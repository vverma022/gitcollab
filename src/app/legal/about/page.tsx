import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | GitCollab",
  description: "Learn more about GitCollab and our mission to enhance collaboration in software development.",
}

export default function AboutPage() {
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
      <h1 className="text-4xl font-bold mb-8 text-center">About GitCollab</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            GitCollab is dedicated to revolutionizing the way developers collaborate on GitHub projects. 
            We believe in making open-source collaboration more accessible, efficient, and enjoyable for everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            GitCollab provides a platform that enhances the GitHub collaboration experience by offering 
            tools and features that streamline the development process, improve communication, and foster 
            better project management.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Open Source First</li>
            <li>Community Driven</li>
            <li>Continuous Innovation</li>
            <li>User-Centric Design</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Have questions or suggestions? We'd love to hear from you! Reach out to us through our 
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