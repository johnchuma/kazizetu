"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { getUserWorks } from "../../../controllers/work_controller";
import NoData from "../../../components/noData";
import WorkItem from "../../../components/workItem"
const Page = () => {
    const [works, setworks] = useState([]);
    useEffect(() => {
        getUserWorks(1,5).then((response)=>{
            setworks(response.data)
        })
    }, []);
    return ( <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">My works</div>
                <Link href="/addWork" className="bg-white py-2 px-3 text-sm flex items-center space-x-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </div>
                    <div>
                        Add
                    </div>
                    </Link>

             </div>
             <div className="bg-white w-full px-12 py-8 ">
                {works.length<1?<NoData/>:<div>
                    <div className="grid grid-cols-2 gap-8">
                        {works.map((item,key)=>{
                         return <div key={key}>
                        <WorkItem item={item}/>
                           
                          </div>
                        })}
                    </div>
                    </div>}
                
             </div>
    </div> );
}
 
export default Page;