"use client"
import Link from "next/link"
import { useState } from "react";
import toast from "react-hot-toast"
import {useRouter} from "next/navigation"
import Spinner from "../../components/spinner";
import { login } from "../../controllers/user_controller";

const Page = () => {
    const [loading, setloading] = useState(false);
    const router = useRouter()
    return ( <div className="bg-white  w-full py-6 px-5">

<Link href="/" className="w-6/12 mx-auto flex flex-col justify-center items-center ">
          <div className="font-bold text-4xl text-slate-950">KaziZetu</div>
          <div className="w-full h-2 bg-slate-950"></div>

          </Link>
          {/* <div className=" bg-blue-800 text-center bg-opacity-80 py-3 text-white font-medium mt-6 text-sm ">Sign in with facebook</div> */}
          {/*  <div className=" bg-blue-500 text-center bg-opacity-90 py-3 text-white font-medium mt-6 text-sm ">Sign in with google</div> */}
          <div className="h-[2px] bg-slate-200 mt-4"></div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            const data = {
                email:e.target.email.value,
                password:e.target.password.value
            }
            setloading(true)

            login(data).then((response)=>{
                if(response.status){
                    toast.success("Logged in successfully")
                    router.push("/")
                }
                else{
                    toast.error(response.message)
                }
                setloading(false)
            })

          }} className="space-y-4 mt-6">
            <input required name="email" placeholder="Email address" className="w-full text-sm focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <div className="relative">
            <input required name="password" placeholder="Password" type="password" className="w-full text-sm focus:ring-0 border focus:border-slate-500 border-slate-300 placeholder:text-sm"/>
            <Link className=" absolute right-3 top-3 font-medium text-sm " href="/register">
                <div>Forgot ?</div>
                <div className="h-[3px] w-auto bg-yellow-400"></div>
                </Link>
            </div>
            <button type="submit" className=" bg-slate-950 text-center py-3 w-full flex justify-center text-white 
            font-medium text-sm ">{loading?<Spinner/>:"Login"}</button>
            <div className="text-sm text-center flex justify-center space-x-2"><div>Not registered ? </div>
            <Link className="font-medium " href="/register">
                <div>Sign up</div>
                <div className="h-[3px] w-auto bg-yellow-400"></div>
                </Link>
                
                </div>

          </form>
    </div> );
}
 
export default Page;