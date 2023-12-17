import {Button} from "@nextui-org/react";
import { useEffect ,  } from "react";
import { FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

type accessTokenDemo = string | null;   

export const UserHome = ()=>{

    // const navigate = useNavigate()

    // useEffect(()=>{
    //     const accessToken : accessTokenDemo= localStorage.getItem('accessToken') 
        
    //     if (accessToken){
           
    //         //get the user details with the access token 
    //         //set the username in the local storage
    //         localStorage.setItem('username','amaljs')
    //     }
    //     else{
            
    //         //navigate to user login 
    //         navigate('/userLogin')
    //     }
    // })

    const handleLogout =() : void =>{

        //clear the username and accessToken from the local storage
        localStorage.removeItem('username')
        console.log('removed the username')
    }
    return (
        <>
        <div className="relative">
        <Button color="danger" className="absolute right-10 top-3 hover:bg-white" variant="bordered" startContent={<FaUser />} onClick={handleLogout}>
        Logout
      </Button>
        </div>
   
        <div className="flex justify-center h-2/4">
          
        <div className=" border-cyan-500  shadow-2xl p-1 my-24 w-9/12 flex h-full">
            <div className="h-full w-4/12 p-2">

            <img className="object-contain h-64 w-96  shadow-gray-500 shadow-2xl mb-3" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41k0KglsbIL._SX300_SY300_QL70_FMwebp_.jpg"/>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-2  text-center  w-full">Change picture</button>
            </div>


            <div className="h-full w-8/12 p-6 flex  ">
                <div className="w-6/12 border-l-1 p-3 border-x-gray-600">
                <p className="text-sm text-gray-500 font-normal  my-3">Name :</p>
                <p className="text-sm text-gray-500 font-normal  my-3">Email :</p>
                <p className="text-sm text-gray-500 font-normal  my-3">Phone :</p>
                </div>
                 
                <div className="w-6/12 b ">
                <p className="text-xl font-normal  my-3 text-blue-600 underline">Amal</p>
                <p className="text-sm text-red-600 font-normal  my-3">amalrandom@gmail.com</p>
                <p className="text-sm text-black font-bold my-3">92020783020</p>
                </div>
                
            </div>
        </div>
            
        </div> </>
    )
}