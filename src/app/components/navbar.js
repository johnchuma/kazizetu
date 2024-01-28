"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../(main)/layout";
import { useRouter } from "next/navigation";
import { logout } from "../utils/local_storage";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const {userDetails,setUserDetails}  = useContext(UserContext);
 const router = useRouter()

    return ( <div className="fixed w-screen z-30 ">
         <div className=" bg-white  flex justify-between px-3 md:px-12 py-4 md:py-8 items-center">
          
        <div className="flex space-x-5 items-center">
          <Link href="/">
          <div className="font-bold text-xl text-slate-950">KaziZetu</div>
          <div className="w-full h-1 bg-slate-950"></div>

          </Link>

        <div><input placeholder="Search here..." className=" hidden md:block focus:ring-0 placeholder:text-sm border-0 bg-slate-100 rounded-full " type="text"/></div>
        </div>
     <div className="flex space-x-4">

      <div onClick={()=>{
          if(userDetails){
            router.push("/myWorks")

          }else{
            router.push("/login")
            
          }
      }} className="py-2 px-6 cursor-pointer hidden md:block bg-yellow-200  text-sm font-medium rounded-full">
        My works
      </div>
      <div onClick={()=>{
          setshowMenu(!showMenu)
        }} className="flex relative items-center space-x-3 border cursor-pointer  px-1 border-slate-400 py-[2px] md:py-0 rounded-full">
          <div className="aspect-squire bg-slate-950 rounded-full">
            {userDetails != null ?<Image src={userDetails.image} height={30} width={30} className="rounded-full h-6 w-6 aspect-square object-cover"/>:
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white m-2 ">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            }
        

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
    <div className={`absolute z-auto flex flex-col text-slate-800 rounded-lg bg-white shadow-lg  top-10 ${showMenu?"scale-1":"scale-0"} transition-all  right-0 space-y-2`}>
        {
          userDetails ==null? <div>
             <Link className="flex space-x-3 px-4 py-2  hover:bg-slate-200" href="/login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
            <div className="text-sm font-semibold">
            Login
            </div>
        </Link>
        <Link className="flex space-x-3 px-4 py-2 hover:bg-slate-200" href="/register">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor" className="w-5 text-slate-800 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          <div className="text-sm font-semibold">
          Register
          </div>
        </Link>
       
          </div>:<div>
          <Link className="flex space-x-3 px-4 py-2  hover:bg-slate-200" href="/myProfile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-5 h-5 text-slate-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            <div className="text-sm font-semibold">
            Profile
            </div>
        </Link>
        <div onClick={()=>{
          logout()
          setUserDetails(null)
          router.push("/")
          toast.success("Logged out successfully")
        }} className="flex space-x-3 px-4 py-2 cursor-pointer hover:bg-slate-200" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-5 h-5 text-slate-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

          <div className="text-sm font-semibold">
          Logout
          </div>
        </div>
          </div>
        }
       
      


    </div>
        </div>
     </div>
       

       </div>
    </div> );
}
 
export default Navbar;