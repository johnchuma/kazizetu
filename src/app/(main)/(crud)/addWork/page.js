"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { addWork, addWorkAttachment } from "../../../controllers/work_controller"
import Spinner from "../../../components/spinner";
import { getCategories } from "../../../controllers/category_controller";
import {regions} from "../../../utils/regions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
const Page = () => {
 const [loading, setloading] = useState(false);
 const [categories, setcategories] = useState([]);
 const [previewImage, setpreviewImage] = useState(null);
 const [files, setfiles] = useState([]);
 const router = useRouter()
 useEffect(() => {
     getCategories().then((data)=>setcategories(data))
 }, []);
    return ( <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">Add work</div>
                
             </div>
             <div className="bg-white w-full px-12 py-8 ">
             <form onSubmit={(e)=>{
                e.preventDefault()
                setloading(true)
                const data = {
                    title:e.target.title.value,
                    file:e.target.file.files[0],
                    phone:e.target.phone.value,
                    address:e.target.address.value,
                    startingPrice:e.target.price.value,
                    description:e.target.description.value,
                    category_uuid:e.target.category_uuid.value
                }
                addWork(data).then((response)=>{
                    if(response.status){
                        files.forEach(async(item)=>{
                          await addWorkAttachment(response.body.uuid, {file:item})
                        })
                        toast.success("Added successfully")
                        router.back()
                    }
                    else{
                        toast.error(response.message)
                    }
                setloading(false)

                })
                
             }} className="bg-white w-full px-12  ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm font-medium pb-4">Work title</div>
                        <input required name="title" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Work category</div>
                        <select required name="category_uuid" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text">
                            <option>Select category</option>
                            {categories.map((item,key)=><option key={key} value={item.uuid}>{item.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Phone number</div>
                        <input required name="phone" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Select region</div>
                        <select required name="address" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text">
                            <option>Select region</option>
                            {regions.map((item,key)=><option key={key} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Starting price</div>
                        <input required name="price" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Work cover image</div>
                        <label for="file" className="w-full flex py-2 bg-slate-100 justify-center" >
                            <div>
                           {previewImage!=null?<Image height={120} width={120} src={previewImage}/>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>} 
                            </div>
                            
                      </label>
                        <input onChange={(e)=>{
                            setpreviewImage(URL.createObjectURL(e.target.files[0]))
                        }} required name="file" id="file" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50 scale-0" type="file"/>
                    </div>

                    
                </div>
                <div className="mt-0">
                        <div className="text-sm font-medium pb-4">Description</div>
                        <textarea required name="description" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>

              <div className="flex justify-between mt-5">
              <div className="text-sm font-medium pb-4">Work pictures</div>
              <div>
            <label for="files">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </label>
            
                <input type="file" id="files" className="hidden" onChange={(e)=>{
                    setfiles([...files,e.target.files[0]])
                }}/>
              </div>

              </div>
              <div className="grid grid-cols-4 gap-4">
                {files.map((item,key)=>{
                    return <div key={key}>
                        <Image src={URL.createObjectURL(item)} height={100} width={100} className="w-full h-32 object-cover"/>
                    </div>
                })}
              </div>
                <button type="submit" className=" mt-5 bg-slate-950 text-center py-3 w-40 flex justify-center text-white 
            font-medium text-sm ">{loading?<Spinner/>:"Publish work"}</button>
                
             </form>
             </div>
    </div> );
}
 
export default Page;