import {Image} from "@nextui-org/react";
import logoImage from '../static/login_icon.png'

export const UserEdit = ()=>{
    return(
        <div className="h-full     mt-16 bg-gradient-to-r from-green-400 to-blue-500  "> 

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
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">Username</label>
    <input type="text" name="username" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="name@flowbite" />

  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">phone Number</label>
    <input type="text" name="phone" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="96556453655" />

  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">Emal</label>
    <input type="email" name="email" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="test@mymail.com" />

  </div>

  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 text-left">Password</label>
    <input type="password" name="password" className="bg-white border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:outline-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-800 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**********" />
  </div>
<div className="text-center">
<button type="submit" className="text-white  bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-green-500-600 dark:bg-green-500 dark:focus:ring-green-500 ">Sign Up</button>

</div>
  
</form>

                </div>
          </div>
        </div>
    )
}