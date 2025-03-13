"use client"

import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/components/ui/sidebar"
import Image from "next/image"
import useProject from "@/hooks/use-projects"


const MenuItem = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Q&A",
        url: "/qa",
        icon: Bot,
    },
    {
        title: "Meetings",
        url: "/meetings",
        icon: Presentation,
    },
    {
        title: "Billing",
        url: "/billing",
        icon: CreditCard,
    },
]


export function AppSidebar() {
    const pathname = usePathname()
    const {open} = useSidebar()
    const { project , selectedprojectId, setProjectId } = useProject();

    return (
       <Sidebar>
        <SidebarHeader>
            <div className="flex items-center gap-2">
               <Image src='/logogit.jpeg' width={40} height={40} alt="logo" className="rounded-full" />
               {open && (
                  <h1 className="text-xl font-bold">
                  GitCollab
                 </h1>
               )}
            </div>
        </SidebarHeader>

        <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>
                Appppp
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {MenuItem.map((item) => {
                    return (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                           <Link href={item.url} className={cn({
                            '!bg-primary !text-white': pathname === item.url
                           })}>
                            <item.icon />
                            <span>{item.title}</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                    )
                })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupLabel>
                Projects
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {project?.map((item) => {
                    return (
                     <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                         <div onClick={() => {
                            setProjectId(item.id)
                         }}>
                            <div className={cn(
                                'rounded-sm border size-6 flex items-center justify-center text-center text-sm bg-white text-primary',{
                                  'bg-primary text-white' : item.id === selectedprojectId

                                }
                            )}>
                                {item.name[0]}
                            </div>
                            <span>{item.name}</span>
                         </div>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                    )
                })}
                <div className="h-2"> </div>
                <SidebarMenuItem>
                    <Link href="/create">
                    <Button variant="outline" size="sm" className="w-fit">
                        <Plus />
                        Create Project
                    </Button>
                    </Link>
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>

        </SidebarGroup>
        </SidebarContent>

       </Sidebar>
    )
}