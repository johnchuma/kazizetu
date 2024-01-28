import { useState } from "react";
import { useEffect } from "react";
import {getCategories} from "../controllers/category_controller"
import Link from "next/link"
const Footer = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        getCategories().then((data)=>setcategories(data))
    }, []);
    return (categories&&
    <div className=" overflow-hidden">
<div className="grid px-3 gap-y-5 md:px-12  grid-cols-1 md:grid-cols-3 w-full  pt-12 bg-white overflow-x-hidden ">
        <div>
            <div className="text-sm font-bold mb-4" >Categories</div>
            <div className="space-y-3">
            {categories.map((item,key)=>{
                return key <8&& <div className="text-sm" key={key}>{item.name}</div>
            })}
            </div>
            
        </div>
       
        <div>
            <div className="text-sm font-bold mb-4" >Statistics</div>
            <div className="space-y-3">
            {[
                {key:"Total registered users",value:"129,000"},
                {key:"Total published services",value:"49,000"},
                {key:"Services views",value:"139,000,000"},

        ].map((item,key)=>{
                return <div className="text-sm" key={key}>
                    {item.key}: {item.value}
                </div>
            })}
            </div>
            
        </div>

        <div>
        <div className="text-sm font-bold mb-4" >Contacts</div>
            <div className="space-y-3">
            {[
                {key:"Phone1",value:"+255627707434"},
                {key:"Phone2",value:"+255621512848"},
                {key:"Email",value:"johnvchuma@gmail.com"},
                {key:"Email2",value:"dereklyatuu@gmail.com"},


        ].map((item,key)=>{
                return <div className="text-sm" key={key}>
                    {item.key}: {item.value}
                </div>
            })}
            </div>
            
        </div>
      
    </div>
    <div className="h-[1px] px-3 md:px-12  overflow-x-hidden   bg-slate-300 my-4"></div> 

    <div className="flex  px-3 md:px-12 overflow-x-hidden justify-between mb-5">

        <div className="flex text-sm space-x-2">
        <Link className="" href="/">
          <div className="font-bold text-sm text-slate-950">KaziZetu</div>
          <div className="w-full h-1 bg-slate-950"></div>

          </Link>
          <div className="hidden md:block">
          ©️ 2024. All rights reserved
          </div>
        </div>
        <div className="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </div>
       </div>
    </div>
     );
}
 
export default Footer;