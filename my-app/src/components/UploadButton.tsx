'use client'

import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import UploadDropzone from "./UploadDropzone"
import Dropzone from "react-dropzone"


 const UploadButton=()=>{
    const [isOpen, setIsOpen]=useState<boolean>(false)
    

    return(
        <Dialog open={isOpen} onOpenChange={(v)=>{
            if(!v) setIsOpen(v);
        }}>
            <DialogTrigger asChild onClick={()=>setIsOpen(true)}>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropzone  isSubscribed={false}/>
            </DialogContent>

        </Dialog>
    )
}

export default UploadButton

// Upload Dropzone: react-dropzone
// UploadButton: open dialog -> upload PDFs vis UploadDropzone
// UI Elements: Dialog , button , progress , useToast