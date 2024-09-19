'use client'
import { useState } from "react";
import { UploadButton } from "./UploadButton";
import Skeleton from "react-loading-skeleton";
import { Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { format } from 'date-fns'
import { Button } from "./ui/button";
const Dashboard=()=>{
    const [files, setFiles]=useState([{id:"1", name:"new", uploadStatus:"DONE",createdAt:""}]);
    const [isLoading, setIsLoading]=useState<Boolean>(false)
    const [currentlyDeletingFile, setCurrentlyDeletingFile]=useState('2')
    const deleteFile=({id})=>{
        console.log(id)

    }

    return(
        <main className="mx-auto max-w-7xl md:p-10">
            <div>
                <h1>My Files</h1>
            </div>
            {
                files && files.length !==0 ?(
                   <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
                     {
                        files.sort((a,b)=>
                            //@ts-ignore
                            new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
                        .map((file)=>(
                            <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg">
                                {/* @ts-ignore */}
                                <Link href={`/dashboard/${file.id}`} className="flex flex-col gap-2">
                                <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6 ">
                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-800 to-violet-500"></div>
                                    <div className="flex items-center space-x-3">
                                        <h3 className="truncate text-lg fount-medium text-zinc-900">{file.name}</h3>
                                    </div>
                                </div>
                                </Link>

                            <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                                <div className='flex items-center gap-2'>
                                    <Plus className='h-4 w-4' />
                                    {/* {format(
                                    new Date(file.createdAt),
                                    'MMM yyyy'
                                    )} */}
                                </div>

                                <div className='flex items-center gap-2'>
                                    <MessageSquare className='h-4 w-4' />
                                    mocked
                                </div>

                                <Button
                                    onClick={() =>
                                    deleteFile({ id: file.id })
                                    }
                                    size='sm'
                                    className='w-full'
                                    variant='destructive'>
                                    {currentlyDeletingFile === file.id ? (
                                    <Loader2 className='h-4 w-4 animate-spin' />
                                    ) : (
                                    <Trash className='h-4 w-4' />
                                    )}
                                </Button>
                            </div>
                            </li>
                        ))
                     }

                   </ul>

                ): isLoading ? (
                    <Skeleton height={100} className="my-2"  count={3}/>

                ):(
                    <div className="">
                        <Ghost className="" />
                        <h3>
                            Pretty empry around here
                        </h3>
                        <p>Let&apos;s upload your first PDF.</p>

                    </div>
                    

                )
            }
            <UploadButton></UploadButton>


        </main>
    )

}

export default Dashboard;