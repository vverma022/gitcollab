import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github'
import { Document } from '@langchain/core/documents'
import { generateEmbedding, summariseCode } from './gemini'
import { db } from '@/server/db'

export const  LoadGitHubRepo = async (githubUrl: string, githubToken?: string) => {
     const loader = new GithubRepoLoader(githubUrl , {
        accessToken: githubToken || process.env.GITHUB_TOKEN || ' ',
        branch: 'main',
        ignoreFiles: ['package-lock.json','yarn.lock','pnpm-lock.yaml','bun.lockb'],
        recursive: true,
        unknown: 'warn',
        maxConcurrency: 5
     })
     const docs = await loader.load()
     return docs
}

export const IndexGitHubRepo = async (projectId: string, githubUrl: string, githubToken?: string ) => {
    // Clear any existing embeddings for this project
    await db.sourceCodeEmbedding.deleteMany({
        where: { projectId }
    })

    const docs = await LoadGitHubRepo(githubUrl, githubToken)
    const allEmbeddings = await generateEmbeddings(docs)

    await Promise.allSettled(allEmbeddings.map( async (embedding,index) => {
        console.log(`processing ${index} of ${allEmbeddings.length}`)
        if(!embedding) return 

        const sourceCodeEmbedding = await db.sourceCodeEmbedding.create({
            data: {
                summary: embedding.summary,
                sourceCode: embedding.sourceCode,
                fileName: embedding.filename,
                projectId
            }
        })
        await db.$executeRaw`
        UPDATE "SourceCodeEmbedding"
        SET "summaryEmbedding" = ${embedding.embedding}::vector
        WHERE "id" = ${sourceCodeEmbedding.id}
        `
    }))
}

const generateEmbeddings = async (docs: Document[] ) => {
    return await Promise.all(docs.map(async doc => {
        const summary = await summariseCode(doc)
        const embedding = await generateEmbedding(summary)
        return {
            summary,
            embedding,
            sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
            filename: doc.metadata.source
        }
    }))
}



