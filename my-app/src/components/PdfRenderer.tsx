import { Button } from "./ui/button"
import {Document, Page} from "react-pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

interface PdfRendererProps {
    url: string
  }
  // need worker to render pdf


const PdfRenderer=({url}:PdfRendererProps)=>{

    return (
        <div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
             <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
                 <div className='flex items-center gap-1.5'>
                    top bar

                </div>
            </div>
            abc
        </div>
    )

}

export default PdfRenderer