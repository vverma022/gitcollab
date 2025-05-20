import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Terms of Service | GitCollab",
  description: "Terms and conditions for using GitCollab services.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex items-center justify-center mb-12">
        <Image 
          src="/la.png" 
          alt="GitCollab Logo" 
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using GitCollab, you agree to be bound by these Terms of Service and all 
            applicable laws and regulations. If you do not agree with any of these terms, you are 
            prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground leading-relaxed">
            Permission is granted to temporarily use GitCollab for personal, non-commercial purposes. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on GitCollab</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials on GitCollab are provided on an 'as is' basis. GitCollab makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, 
            without limitation, implied warranties or conditions of merchantability, fitness for a 
            particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall GitCollab or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising out 
            of the use or inability to use the materials on GitCollab.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on GitCollab could include technical, typographical, or photographic 
            errors. GitCollab does not warrant that any of the materials on its website are accurate, 
            complete, or current. GitCollab may make changes to the materials contained on its website 
            at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please contact us through our 
            <a 
              href="https://github.com/vverma022/gitcollab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              GitHub repository
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
} 