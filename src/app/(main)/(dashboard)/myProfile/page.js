"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { getMyInfo, updateUserInformation } from "../../../controllers/user_controller";
import Spinner from "../../../components/spinner";
const Page = () => {
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState(null);
    const [profileImage, setprofileImage] = useState();
    useEffect(() => {
        getMyInfo().then((data)=>{
            setuser(data)
            
        })
    }, []);
    return ( user&& <div>
        <div className="py-5  bg-slate-950 w-100 flex items-center px-12 justify-between">
                <div className="text-white font-bold text-xl">My profile</div>
                

             </div>
             <div className="bg-white w-full px-12 py-8 ">
             <form onSubmit={(e)=>{
                e.preventDefault()
                setloading(true)
                const data = {
                    name:e.target.name.value,
                    file:e.target.file.files[0]
                    
                }
                updateUserInformation(data).then((response)=>{
                    if(response.status){
                        toast.success("Updated successfully")
                    
                    }
                    else{
                        toast.error(response.message)
                    }
                setloading(false)

                })
                
             }} className="bg-white w-full px-12  ">
                <label for="file">
            <div className="flex space-x-2 items-center">
            <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center">
                {profileImage == null ?<Image height={60}  width={60} className="rounded-full aspect-square object-cover" 
                src={user.image}/>:
                <Image height={60} width={60} className="rounded-full aspect-square object-cover" src={profileImage}/>
                }
                </div>
            <div className="text-sm font-medium">my profile image* </div>
            <input onChange={(e)=>{
                  setprofileImage(URL.createObjectURL(e.target.files[0]))
             }} type="file" id="file" required name="file" className="hidden"/>
           </div>
            
            </label>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <div className="text-sm font-medium pb-4">Username</div>
                        <input required name="name" defaultValue={user.name} className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                    
                    <div>
                        <div className="text-sm font-medium pb-4">Email</div>
                        <input disabled required defaultValue={user.email} name="phone" className="border focus:ring-slate-300 focus:border-0 border-slate-300 w-full bg-slate-50" type="text"/>
                    </div>
                   
                    
                  

                    
                </div>
               

              
             
                <button type="submit" className=" mt-5 bg-slate-950 text-center py-3 w-40 flex justify-center text-white 
            font-medium text-sm ">{loading?<Spinner/>:"Update details"}</button>
                
             </form>
             </div>
    </div> );
}
 
export default Page;