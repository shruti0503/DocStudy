import PdfRenderer from "@/components/PdfRenderer";
import ChatWrapper from "@/components/ChatWrapper";

interface PageProps {
  params: {
    fileid: string
  }
}

const File=()=>{
    const  file={
        name:"file",
        id:"1",
        url:"https://utfs.io/f/ZgFHedT4za3sPAOYHz9dGV0AyWtRznDJHblvmw53hPedFQY9",
    }
    const plan={
        isSubscribed:true


    }


    return (
        <div className='flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]'>
        <div className='mx-auto w-full max-w-8xl grow lg:flex xl:px-2'>
          {/* Left sidebar & main wrapper */}
          <div className='flex-1 xl:flex'>
            <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
              {/* Main area */}
              <PdfRenderer url={file.url} />
            </div>
          </div>
  
          <div className='shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0'>
            <ChatWrapper isSubscribed={plan.isSubscribed} fileId={file.id} />
          </div>
        </div>
      </div>
    )

}

export default File;