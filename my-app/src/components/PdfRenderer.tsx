import { Button } from "./ui/button"

interface PdfRendererProps {
    url: string
  }


const PdfRenderer=({url}:PdfRendererProps)=>{

    return (
        <div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
             <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
                 <div className='flex items-center gap-1.5'>
                    <Button>
                        btn
                    </Button>

                </div>
            </div>
            abc
        </div>
    )

}

export default PdfRenderer