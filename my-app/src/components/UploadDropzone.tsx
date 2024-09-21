'use client'
import { Cloud, File } from "lucide-react";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/hooks/use-toast";

const UploadDropzone = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);  
  const {startUpload}=useUploadThing('pdfUploader')
  const {toast}=useToast();
  //@ts-ignore
  const onDrop = useCallback(async(acceptedFiles) => {
    try{
        const res= await startUpload(acceptedFiles);
        console.log("res on uploading file", res)
        if(!res){
            return toast({
                title: "something went wrong",
                description:"Please try again later",
                variant:"destructive",
            })

        }
        const [fileResponse]=res;
        console.log("fileResponse",fileResponse)
        const  key=fileResponse?.key;
        if(!key){
            return toast({
                title:"something went wrong",
                description:"Please try again later",
                variant:"destructive"
            })
        }
        //pooling approach to check if its is actually in database
        // keep pooling [To do]
        // 


    }
    catch(err){
        console.log("err", err)
        return toast({
            title: "something went wrong",
            description:"Please try again later",
            variant:"destructive",
        })
        
    }
    console.log("accepted Files", acceptedFiles);
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  useEffect(() => {
    console.log("files", files);
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section>
      <div {...getRootProps()} className="border bg-gray-100 p-5 h-64 border-dashed border-gray-400 rounded-lg overflow-y-auto">
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <Cloud className='h-6 w-6 text-violet-500 mb-2' />
          <p className='mb-2 text-sm text-zinc-700'>
            <span className='font-semibold'>Click to upload</span> or drag and drop
          </p>
          <p className='text-xs text-zinc-500'>PDF (up to {isSubscribed ? "16" : "4"}MB)</p>
        </div>

        
        {files.length > 0 && <strong className="text-violet-700">Uploaded Files:</strong>}
        {files.length > 0 && (
          files.map((file: any) => (
            <div key={file.name} className='max-w-xs my-1 bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
              <div className='px-3 py-2 h-full grid place-items-center'>
                <File className='h-4 w-4 text-blue-500' />
              </div>
              <div className='px-3 py-2 h-full text-sm truncate'>{file.name}</div>
            </div>
          ))
        )}

        {/* To do : progress bar */}
        {isUploading && (
          <div className='w-full mt-4 max-w-xs mx-auto'>
            <Progress
              //@ts-ignore
              indicatorColor={uploadProgress === 100 ? 'bg-green-500' : ''}
              value={uploadProgress}
              className='h-1 w-full bg-zinc-200'
            />
            {uploadProgress === 100 ? (
              <div className='flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2'>
                Redirecting...
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadDropzone;
