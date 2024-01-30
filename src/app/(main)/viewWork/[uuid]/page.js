"use client"
import { useContext, useEffect, useState } from "react";
import {deleteUserWorks, getWorkDetails} from "../../../controllers/work_controller"
import Loader from "../../../components/loader"
import Image from "next/image"
import Spinner from "../../../components/spinner";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { UserContext } from "../../layout";
const Page = ({params}) => {
    const uuid = params.uuid;
    const [loading, setloading] = useState(true);
    const [deleting, setdeleting] = useState(false);
    const router  = useRouter();
    const {userDetails} = useContext(UserContext)
    const [work, setwork] = useState(null);
    useEffect(() => {
     getWorkDetails(uuid).then((data)=>{
        setwork(data)
        setloading(false)
     }) 
    }, []);
    return ( loading?<Loader/>:<div className=" bg-slate-100 min-h-screen px-3 md:px-12 py-6 md:py-12">
        <div className="flex mb-5 space-x-2">
        <div className="cursor-pointer" onClick={()=>{
            router.back()
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-slate-500">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
        </div>
        <div className="text-slate-500 text-xs"> {work.title} </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
             <div className=" w-full mb-4 md:w-8/12 bg-white px-3 md:px-12 py-8 rounded">
                <div className=" text-xl md:text-2xl font-bold text-slate-800">{work.title}</div>
                <div className="flex space-x-1 items-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>
                <div className=" font-medium text-sm opacity-70">{work.address}</div>
            </div>
                <div className="mt-4"><Image className="w-full rounded-md " src={work.backgroundImage} height={300} width={300}/></div>
            <div className="mt-5 text-slate-800 ">{work.description}</div>
             </div>
             <div className=" w-full md:w-4/12 space-y-4 md:space-y-8  ">
                <div className="w-full bg-white px-3 md:px-12 py-8">
                    <div className="flex items-center space-x-3">
                        <input type="radio" checked className=" checked:bg-slate-800 "/>
                    <div className="font-bold">{work.startingPrice} TSH</div>

                    </div>
                    <div className="text-sm ml-7">Starting price</div>
                </div>

                <div className="w-full flex flex-col items-center bg-white px-3 md:px-12 py-4 md:py-8">
                  
                        <div><Image src={work.User.image} height={80} width={80} 
                        className="rounded-full aspect-square object-cover"/></div>
                        <div className="flex flex-col text-center space-y-1">
                   <div className="font-bold mt-4">{work.User.name} </div>
                   <div className="text-sm">{work.User.email}</div>
                   <div className="text-sm">Phone: {work.phone}</div>

             
                   </div>
                   <div className="py-3 px-4 bg-slate-800 flex justify-center text-sm text-white mt-3 w-full">Call Me</div>

                  
                </div>
                {  userDetails&&
                    userDetails.uuid == work.User.uuid && <div className="flex">
                    <Link href={`/editWork/${work.uuid}`} className="w-4/12 flex justify-center bg-green-600 bg-opacity-80 text-white py-3 px-2">Edit</Link>
                    <div onClick={()=>{
                        setdeleting(true)
                        deleteUserWorks(work.uuid).then((data)=>{
                        setdeleting(false)
                            router.back()
                        })
                    }} className="w-8/12 flex cursor-pointer justify-center bg-red-600 bg-opacity-80 text-white py-3 px-2">
                        {deleting?<Spinner/>:"Delete"}</div>

                </div>
                }
                
             </div>

        </div>
    </div> );
}
 
export default Page;