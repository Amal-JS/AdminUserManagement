import {Button} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import CustomTable from "./Table";


export const AdminHome = ()=>{
    return (
        <>
    
        <div className="text-right p-2 bg-stone-800">
        <Button color="danger" className="" variant="bordered" startContent={<FaUser />}>
        Logout
      </Button>
        </div>

        <div className="p-12">
        <div className=" w-full shadow-2xl border-2  rounded-md px-20 ">

<div className="flex justify-center w-full">

<div className="h-full w-[80%] bg-white mt-6  " >

      
      <form className="w-full ">    
<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
</div>
<input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users..."  />
<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-700-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>
   
</div>


</div>


{/* 
table content */}

<div className="mb-6 flex justify-center w-full  bg-white mt-6">
    
    <div className="w-[80%]   border-black shadow-2xl border-2 p-3  rounded-md ">
            <CustomTable />
    </div>
</div>


</div>
        </div>


       
       
     
           
         </>
    )
}