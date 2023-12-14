import {Image} from "@nextui-org/react";
import logoImage from '../static/admin_icon.png'

export const AdminLogin = ()=>{
    return(
        <div>
            <div className="h-full     mt-16 bg-gradient-to-r from-red-400 to-gray-900  "> 

<div className=" h-4/12 flex justify-center bg-white">
<Image
width={300}
alt="NextUI hero Image"
src={logoImage}
/>
</div>
<div className="h-8/12  w-full flex justify-center px-2 pt-1 pb-2 ">
      <div className="w-5/12  shadow-2xl rounded-3xl bg-white my-5    mx-36">


      <form className="max-w-sm mx-auto p-4  mt-4">
<div className="mb-5">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">Admin username</label>
<input type="text" id="username" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-gray-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-blue-500" placeholder="name@flowbite" />

</div>
<div className="mb-5">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">Admin password</label>
<input type="password" id="password" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-gray-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**********" />
</div>
<div className="text-center">
<button type="submit" className="text-white  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-green-500-600 dark:bg-red-500 dark:focus:ring-red-500 ">Login</button>

</div>

</form>

      </div>
</div>
</div>
        </div>
    )
}