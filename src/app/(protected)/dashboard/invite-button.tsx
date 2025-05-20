import React from 'react'
import useProject from '@/hooks/use-projects';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
const InviteButton = () => {
    const {projects} = useProject();
    const [open, setOpen] = useState(false);
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Invite a user</DialogTitle>
            </DialogHeader>
            <p className='text-sm text-muted-foreground'>
               Invite a user to your project by entering copying the link
            </p>
            <Input className='mt-4' readOnly onClick={()=>{
                navigator.clipboard.writeText(`${window.location.origin}/join/${projects?.id}`);
                toast.success('Link copied to clipboard');
            }}
            value={`${window.location.origin}/join/${projects?.id}`}
             />
        </DialogContent>
    </Dialog>
    <Button onClick={()=>{
        setOpen(true);
    }}>
        <Plus className='w-4 h-4' />
        Invite
    </Button>
    </>
  )
}

export default InviteButton