import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import useProject from '@/hooks/use-projects'
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'
import Image from 'next/image'
import { askQuestion } from './action'
import { readStreamableValue } from 'ai/rsc'
import MDEditor from '@uiw/react-md-editor'
import CodeReferences from './code-reference'

const AskQuestionsCard = () => {
    const { projects } = useProject()
    const [question, setQuestion] = React.useState(' ')
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading ] = React.useState(false)
    const [filesReferences,setFilesReferences] = React.useState<{fileName: string;sourceCode: string; summary: string}[]>([])
    const [answer, setAnswer] = React.useState(' ');

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setAnswer(' ')
        setFilesReferences([])
        e.preventDefault()
        if(!projects?.id) return 
        setLoading(true)
      
        
        const {output , filesReferences } = await askQuestion(question,projects.id)
        setOpen(true)
        setFilesReferences(filesReferences)

        for await (const delta of readStreamableValue(output)){
            if(delta){
                setAnswer(ans => ans + delta)
            }

        }
        setLoading(false)
    }
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className='sm:max-w-[80vw]'>
        <DialogHeader>
            <DialogTitle>
                <Image src='/logogit.jpeg' alt='GitCollab' width={40} height={40} />
            </DialogTitle>
        </DialogHeader>
            <MDEditor.Markdown source={answer} className="max-w-[70vw] !h-full max-h-[40vh] overflow-scroll" />
            <div className="h4"></div>
            <CodeReferences filesReferences={filesReferences} />
            

        </DialogContent>

    </Dialog>
    <Card className='relative col-span-3'>
        <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={onSubmit}>
                <Textarea placeholder='While files lets me edit the Home Page ? ' />
                <div className='h-4'></div>
                <Button type='submit' disabled={loading}>
                    Ask
                </Button>
            </form>
        </CardContent>
    </Card>
    </>
  )
}

export default AskQuestionsCard