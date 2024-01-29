"use client"

import { useParams, usePathname } from "next/navigation";
import { getCategories } from "../../controllers/category_controller";
import Link from "next/link"
import Loader from "../../components/loader";
import { useEffect, useState } from "react";
const Layout = ({children}) => {
    const [categories, setcategories] = useState([]);
    const [loading, setloading] = useState(true);
   const {category_uuid} = useParams()
   const pathname = usePathname()
    useEffect(() => {
        getCategories().then((data)=>{
            setcategories(data)
            setloading(false)
        })
    }, []);

    return ( loading?<Loader/>: <div>
       
            <div className="fixed pt-[5px] md:pt-2 w-screen ">
      <div className="flex mx-3 md:px-12 overflow-x-scroll no-scrollbar space-x-10 bg-white">
        <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            <div className=" text-sm   mt-1 font-semibold line-clamp-1 text-slate-800">All</div>
            { pathname == "/"&& <div  className="h-[2px] mt-2 w-full bg-slate-950 "></div>}
        </Link>
        {categories.map((item,key)=><Link href={`/category/${item.uuid}`}  key={key} className="flex flex-col items-center cursor-pointer text-center">
            <div className="text-slate-900  "  dangerouslySetInnerHTML={{ __html:item.icon }}>
              </div>
            <div className=" text-sm   mt-1 font-semibold line-clamp-1 text-slate-800">{item.name}</div>
            {category_uuid == item.uuid && <div  className="h-[2px] mt-2 w-full bg-slate-950 "></div>}
          </Link>)}
       </div>
       <div className="h-[1px] bg-slate-200 w-screen "></div>
      </div>
      {children}
    </div> );
}
 
export default Layout;