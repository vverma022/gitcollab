import { SignUp } from '@clerk/nextjs'
import { SiteFooter } from '@/app/_components/site-footer'
import { GitGraph } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="  p-4 border-b">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center  space-x-1.5">
          <GitGraph className="h-10 w-6" />
            <span className="text-lg font-semibold">GitCollab</span>
          </div>
        </div>
      </nav>

      
      <div className="flex-grow flex items-center justify-center p-4">
        <SignUp />
      </div>
    </div>
  );
}