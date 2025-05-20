import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { AppSidebar } from './sidebar'
import { ModeToggle } from '@/components/ui/mode-change'
import { SiteFooter } from "@/app/_components/site-footer"

type Props = {
    children: React.ReactNode
}

const SidebarLayout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen w-screen flex-col">
            <div className="flex flex-1">
                <AppSidebar />
                <main className='flex-1 flex flex-col min-w-0'>
                    <header className='flex items-center justify-between h-16 px-4 bg-sidebar shadow-sm border-b border-sidebar-border'>
                        <div className='flex items-center space-x-4'>
                            {/* <SearchBar /> */}
                        </div>
                        <div className='flex items-center space-x-4'>
                            <UserButton afterSignOutUrl="/"/>
                            <ModeToggle />
                        </div>
                    </header>
                    <div className='flex-1 p-3 overflow-auto'>
                        <div className='bg-sidebar shadow-md rounded-lg p-4 h-full'>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </SidebarProvider>   
  )
}

export default SidebarLayout