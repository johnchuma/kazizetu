import Image from "next/image"
import { useRouter } from "next/navigation";
const WorkItem = ({item}) => {
   const router = useRouter();
    return ( <div className="cursor-pointer" onClick={()=>{
        router.push(`/viewWork/${item.uuid}`)
    }}>
        <Image height={200} className="w-full h-52 object-cover rounded-md" width={200} src={item.backgroundImage}/>
        <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-2 items-center">
            <Image height={35} width={35} src={item.User.image} className="aspect-squire h-8 w-8 rounded-full object-cover"/>
            <div className=" font-medium text-sm">{item.User.name}</div>
            </div>

            <div className="flex space-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>
                <div className=" font-medium text-sm opacity-80">{item.address}</div>
            </div>
       
        </div>
        

         <div className=" mt-2 text-base font-medium ">{item.title}</div>
         <div className="font-semibold pt-2 text-base">From: {item.startingPrice} TSH</div>
     
        </div> );
}
 
export default WorkItem;