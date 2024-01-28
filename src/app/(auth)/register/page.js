"use client"
import Link from "next/link"
import { useState } from "react";
import { register } from "../../controllers/user_controller";
import toast from "react-hot-toast"
import Spinner from "../../components/spinner";
import { useRouter } from "next/navigation";
import Image from "next/image"
const Page = () => {
    const [image, setimage] = useState("");
    const router = useRouter()
    const [loading, setloading] = useState(false);
  const [profileImage, setprofileImage] = useState(null);
    return ( <div className="bg-white  w-full py-6 px-5">

<Link href="/" className="w-6/12 mx-auto flex flex-col justify-center items-center ">
          <div className="font-bold text-4xl text-slate-950">KaziZetu</div>
          <div className="w-full h-2 bg-slate-950"></div>

          </Link>
          {/* <div className=" bg-blue-800 text-center bg-opacity-80 py-3 text-white font-medium mt-6 text-sm ">Sign in with facebook</div> */}
          {/* <div className=" bg-blue-500 text-center bg-opacity-90 py-3 text-white font-medium mt-6 text-sm ">Sign in with google</div> */}
          <div className="h-[2px] bg-slate-200 mt-4"></div>
          <form  onSubmit={(e)=>{
            e.preventDefault();
            
            if(e.target.password.value == e.target.repeatPassword.value){
                setloading(true)
                
                const data = {
                    name:e.target.name.value,
                    email:e.target.email.value,
                    password:e.target.password.value,
                    file:e.target.file.files[0]
                }

                register(data).then((response)=>{
                    if(response.status){
                        toast.success("Registered successfully");
                        setloading(false)
                        router.push("/")
                    }
                    else{
                        toast.error(response.message)
                        setloading(false)

                    }
                })

            }
            else{
                toast.error("Passwords don't match")
            }
           
          }} className="space-y-3 mt-6 text-sm">
            <label for="file">
            <div className="flex space-x-2 items-center">
            <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center">
                {profileImage == null?<div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-5 h-5 text-slate-600 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                </div>:
                <Image height={60} width={60} className="rounded-full aspect-square object-cover" src={profileImage}/>
                }
                </div>
            <div className="text-sm font-medium">Upload your profile image* </div>
            <input onChange={(e)=>{
                  setprofileImage(URL.createObjectURL(e.target.files[0]))
             }} type="file" id="file" required name="file" className="hidden"/>
           </div>
            
            </label>
          
             <input required name="name" placeholder="Username" className=" text-sm w-full focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <input required name="email" placeholder="Email address" className=" text-sm w-full focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <input required name="password" placeholder="Password" type="password" className=" text-sm w-full focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <input required name="repeatPassword" placeholder="Repeat password" type="password" className=" text-sm w-full focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <button type="submit" className=" bg-slate-950 text-center py-3 w-full flex justify-center text-white 
            font-medium text-sm ">{loading?<Spinner/>:"Register"}</button>
            <div className="text-sm text-center flex justify-center space-x-2"><div>Already registered ? </div>
            <Link className=" " href="/login">
                <div className="font-medium">Sign in</div>
                <div className="h-[3px] w-auto bg-yellow-400"></div>
                </Link></div>

          </form>
    </div> );
}
 
export default Page;