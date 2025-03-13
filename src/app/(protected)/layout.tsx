import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import { AppSidebar } from './sidebar'
import { ModeToggle } from '@/components/ui/mode-change'
type Props = {
    children: React.ReactNode
}

const SidebarLayout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className='w-full m-2'>
            <div className='flex items-center gap-2 border-sidebar-border bg-sidebar shadow rounded-md p-2 px-4'>
                {/* <SearchBar /> */}
                <div className='ml-auto'></div>
                <UserButton />
                <ModeToggle />
                </div>
                <div className='h-4'></div>
                <div className='border-sidebar-border bg-sidebar shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4'>
                    {children}
                </div>
        </main>
     </SidebarProvider>   
  )
}

export default SidebarLayout