"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { addWork, addWorkAttachment, getWorkDetails, updateUserWork } from "../../../../controllers/work_controller"
import Spinner from "../../../../components/spinner";
import { getCategories } from "../../../../controllers/category_controller";
import {regions} from "../../../../utils/regions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import Loader from "../../../../components/loader";
const Page = ({params}) => {
 const [loading, setloading] = useState(false);
 const [categories, setcategories] = useState([]);
 const [previewImage, setpreviewImage] = useState(null);
 const [files, setfiles] = useState([]);
 const [work, setwork] = useState(null);
 const uuid  = params.uuid;

 const router = useRouter()
 useEffect(() => {
     getCategories().then((data)=>{
        setcategories(data)
        getWorkDetails(uuid).then((data)=>{
            setwork(data)
         }) 
     })
 }, []);
    return ( work&& <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">Edit work</div>
                
             </div>
             <div className="bg-white w-full px-12 py-8 ">
             <form onSubmit={(e)=>{
                e.preventDefault()
                setloading(true)
                let data = {
                    title:e.target.title.value, 
                    phone:e.target.phone.value,
                    address:e.target.address.value,
                    startingPrice:e.target.price.value,
                    description:e.target.description.value,
                    category_uuid:e.target.category_uuid.value
                }
                if(previewImage){
                    data.file = e.target.file.files[0]
                }
                updateUserWork(uuid,data).then((response)=>{
                   
                setloading(false)
                router.back()


                })
                
             }} className="bg-white w-full px-12  ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm font-medium pb-4">Work title</div>
                        <input required defaultValue={work.title} name="title" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Work category</div>
                        <select required  name="category_uuid" defaultValue={work.Category.uuid} className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text">
                            <option>Select category</option>
                            {categories.map((item,key)=><option key={key} value={item.uuid}>{item.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Phone number</div>
                        <input required defaultValue={work.phone} name="phone" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Select region</div>
                        <select required defaultValue={work.address} name="address" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text">
                            <option>Select region</option>
                            {regions.map((item,key)=><option key={key} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Starting price</div>
                        <input required defaultValue={work.startingPrice} name="price" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    <div>
                        <div className="text-sm font-medium pb-4">Work cover image</div>
                        <label for="file" className="w-full flex py-2 bg-slate-100 justify-center" >
                            <div>
                           {previewImage!=null?<Image height={120} width={120} src={previewImage}/>:<Image height={120} width={120} src={work.backgroundImage}/>} 
                            </div>
                            
                      </label>
                        <input onChange={(e)=>{
                            setpreviewImage(URL.createObjectURL(e.target.files[0]))
                        }}  name="file" id="file" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50 scale-0" type="file"/>
                    </div>

                    
                </div>
                <div className="mt-0">
                        <div className="text-sm font-medium pb-4">Description</div>
                        <textarea required defaultValue={work.description} name="description" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
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