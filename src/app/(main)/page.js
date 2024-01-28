"use client"


import { useEffect, useState } from "react";
import { getCategories } from "../controllers/category_controller";
import { getAllWorks } from "../controllers/work_controller";
import NoData from "../components/noData";
import WorkItem from "../components/workItem";

export default function Home() {
  const [selectedCategory, setselectedCategory] = useState(0);
  const [categories, setcategories] = useState([]);
  const [works, setworks] = useState([]);
  useEffect(() => {
    getAllWorks(1,10).then((response)=>{
      setworks(response.data)
    })
      getCategories().then((data)=>setcategories(data))
  }, []);
  return (
    <main className="bg-white min-h-screen  ">
      <div className="fixed pt-0 md:pt-2 w-screen ">
      <div className="flex mx-3 md:px-12 overflow-x-scroll no-scrollbar space-x-10 bg-white">
        {categories.map((item,key)=><div key={key} onClick={()=>{
            setselectedCategory(key)
          }} className="flex flex-col items-center cursor-pointer text-center">
            <div className="text-slate-900  "  dangerouslySetInnerHTML={{ __html:item.icon }}>
              </div>
            <div className=" text-sm   mt-1 font-semibold line-clamp-1 text-slate-800">{item.name}</div>
            {selectedCategory ==key && <div  className="h-[2px] mt-2 w-full bg-slate-950 "></div>}
            
          </div>)}

       </div>
       <div className="h-[1px]  bg-slate-200 w-screen "></div>
      </div>
       
       <div className=" px-3 md:px-12 pt-24">
       {works.length<1?<div></div>:<div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {works.map((item,key)=>{
                         return <div key={key}>
                        <WorkItem item={item}/>
                           
                          </div>
                        })}
                    </div>
                    </div>}
       </div>
       
    </main>
  );
}
