"use client"
import Image from "next/image"
import Spinner from "../../../components/spinner";
import { useState } from "react";
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import {addCategory} from "../../../controllers/category_controller"

const Page = () => {
const [loading, setloading] = useState(false);
const router = useRouter()

    return ( <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">Add category</div>
                
             </div>
             <form onSubmit={(e)=>{
                e.preventDefault()
                setloading(true)
                const data = {
                    name:e.target.name.value,
                    icon:e.target.icon.value,
                }
                addCategory(data).then((response)=>{
                    if(response.status){
                        toast.success("Added successfully")
                        router.back()
                    }
                    else{
                        toast.error(response.message)
                    }
                setloading(false)

                })
                
             }} className="bg-white w-full px-12 py-8 ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm font-medium pb-4">Category title</div>
                        <input name="name" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Category icon</div>
                        <input name="icon" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    
                </div>
                <button type="submit" className=" mt-5 bg-slate-950 text-center py-3 w-40 flex justify-center text-white 
            font-medium text-sm ">{loading?<Spinner/>:"Add category"}</button>
                
             </form>
    </div> );
}
 
export default Page;