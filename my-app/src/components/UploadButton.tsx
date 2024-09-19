'use client'

import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { useState } from "react"


export const UploadButton=()=>{
    const [isOpen, setIsOpen]=useState<boolean>(false)

    return(
        <Dialog open={isOpen} onOpenChange={(v)=>{
            if(!v) setIsOpen(v);
        }}>
            <DialogTrigger asChild onClick={()=>setIsOpen(true)}>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                exmaple content
            </DialogContent>

        </Dialog>
    )
}