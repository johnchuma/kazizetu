import Image from "next/image"
const NoData = () => {
    return ( <div>
        <div className="flex justify-center items-center w-3/12 mx-auto">
                    <div className="flex flex-col justify-center items-center">
                    <Image height={100} width={100} src="/nodata.png"/>
                    <div className="text-sm font-medium text-center ">No data created yet! Data will appear here once their available</div>
                    </div>
                </div>
    </div> );
}
 
export default NoData;