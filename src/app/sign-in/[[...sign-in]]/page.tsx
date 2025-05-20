import { SiteFooter } from '@/app/_components/site-footer'
import { SignIn } from '@clerk/nextjs'
import { GitGraph } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="p-3 border-b">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-1.5">
            <img 
              src="/la.png" 
              alt="GitCollab Logo" 
              className="h-8 w-10 object-contain pb-1" 
            />
            <span className="text-lg font-bold">GitCollab</span>
          </div>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <SignIn />
      </div>

    
    </div>
  );
}