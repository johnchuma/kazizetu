"use client"
import Image from "next/image"
import Link from "next/link"

import {NoData} from "../../../components/noData"
import { getCategories } from "../../../controllers/category_controller"
import { useEffect, useState } from "react"
const Page = () =>{
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        getCategories().then((data)=>setcategories(data))
    }, []);

    return ( <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">Categories</div>
                <Link href="/addCategory" className="bg-white py-2 px-3 text-sm flex items-center space-x-2">
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

                {categories.length<1?<div></div>:<div className="grid grid-cols-6 gap-y-6">
                    {categories.map((item,key)=>{
                        return <div key={key} className="flex flex-col items-center text-center">
                            <div dangerouslySetInnerHTML={{ __html:item.icon }}></div>
                            <div className="text-sm font-medium">{item.name}</div>
                        </div>
                    })}
                    
                    </div>}
                
             </div>
    </div> );
}
 
export default Page;