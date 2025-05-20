import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Privacy Policy | GitCollab",
  description: "Privacy policy and data protection information for GitCollab users.",
}

export default function PrivacyPage() {
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
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
            <li>GitHub account information (with your permission)</li>
            <li>Repository access and usage data</li>
            <li>Communication preferences</li>
            <li>Technical information about your device and connection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates and changes</li>
            <li>Ensure the security of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may use third-party services that collect, monitor, and analyze data. These services 
            have their own privacy policies addressing how they use such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us through our 
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