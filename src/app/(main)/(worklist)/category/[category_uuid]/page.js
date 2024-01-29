"use client"


import { useEffect, useState } from "react";
import { getAllWorks } from "../../../../controllers/work_controller";
import WorkItem from "../../../../components/workItem";
import Loader from "../../../../components/loader";

export default function Page({params}) {
  const [works, setworks] = useState([]);
  const [loading, setloading] = useState(false);
  const uuid = params.category_uuid

  useEffect(() => {
    setloading(true)
    getAllWorks(1,30,uuid,null).then((response)=>{
      setworks(response.data)
      setloading(false)
    })
  }, []);
  
  return  loading?<Loader/>:(
    <main className="bg-white   ">
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
