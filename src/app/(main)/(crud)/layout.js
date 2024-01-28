"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Page = ({children}) => {
   const pathname  =  usePathname()
   const router = useRouter()
    return ( <div className="bg-slate-100  min-h-screen px-12 py-8 flex space-x-12">
          <div className="w-3/12 flex flex-col fixed">
            {[
                {title:"Go back",link:"/",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
                           
              },
               
        ].map((item,key)=><div key={key} onClick={()=>{
            router.back()
        }} className={`bg-yellow-200  px-4 py-3 flex items-center space-x-3`} href={item.link}>
            <div>{item.icon}</div>
            <div className="font-medium text-sm">
            {item.title}
            </div>
            </div>)}

          </div>
          <div className="w-full ">
            <div className="w-9/12 ml-auto">
            {children}
            </div>
          </div>
    </div> );
}
 
export default Page;