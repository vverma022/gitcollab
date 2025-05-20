
import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'; 
import { clerkClient } from '@clerk/nextjs/server';

type Props = {
    params: Promise<{projectid: string}>
}

const JoinHandler = async (props: Props) => {
    const {projectid} = await props.params;
    const {userId} = await auth();
    if (!userId) {
        return redirect('/sign-in');
    }
    const dbUser = await db.user.findUnique({
        where: {
            id: userId,
        },
    });
    const client = await clerkClient();
    const user = await client.users.getUser(userId)
    if(!dbUser){
        await db.user.create({
            data: {
                id: userId,
                emailAddresses: user.emailAddresses[0]!.emailAddress,
                imageUrl: user.imageUrl,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
    }
    const project = await db.project.findUnique({
        where: {
            id: projectid,
        },
    });
    if(!project){
        return redirect('/dashboard');  
    }
    try{
        await db.usertoProject.create({
            data: {
                userId: userId,
                projectId: projectid,
            },
        });
        return redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
    return redirect('/dashboard');

}

export default JoinHandler;