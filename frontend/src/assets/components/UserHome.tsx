import {Button} from "@nextui-org/react";
import { useEffect , useState , useRef} from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {userDataUrl , userDataUpdateUrl} from '../../configs/url'

type accessTokenDemo = string | null;   

type userData = {
    username:string,
    phone : number,
    email : string, 
    image : string
}

export const UserHome = ()=>{

    const navigate = useNavigate()
    const [loggedUser,setLoggedUser] = useState< userData | null >(null)
   
    const fileInputRef = useRef<HTMLInputElement|null>(null)

    const userInLocalStorage : accessTokenDemo= localStorage.getItem('user') 

    useEffect(()=>{    
        if (userInLocalStorage){
            //get the user details with the access token 
            //set the username in the local storage
            getUserData()  
        }
        else{
            //navigate to user login 
            navigate('/userLogin')
        }

       

    },[loggedUser?.username])

    
    const getUserData = async () => {
            
        const data = await axios.get(userDataUrl+`?username=${userInLocalStorage}`)
        setLoggedUser(data.data.userData)
    }


    const handleLogout =() : void =>{

        //clear the username and accessToken from the local storage
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setLoggedUser(null)
        console.log('removed the user details from the local storage')
        navigate('/userLogin')
        
    }

    const handleImageClick = ()=>{
        fileInputRef.current.click()
    }
    const handleImageInput = (evt : React.ChangeEvent<HTMLInputElement> )=>{
        const selectedFile = evt.target.files[0]
        
        const data = new FormData();
  data.append('user', loggedUser?.username);
  data.append('image', selectedFile);

        
        axios.put(userDataUpdateUrl,data,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        })
        .then((res)=>{
            console.log(res)
            getUserData()
        }
            )
        .catch((err)=>console.log(err))
      
        
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

            <img className="object-contain h-64 w-96  shadow-gray-500 shadow-2xl mb-3" src={loggedUser?.image ? `http://127.0.0.1:8000${loggedUser?.image}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png"}/>
            <button onClick={handleImageClick} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-2  text-center  w-full">Change picture</button>
            <input onChange={handleImageInput} type='file' className="invisible" name='image' accept=".jpeg , .jpg , .png" ref={fileInputRef}></input>
            </div>


            <div className="h-full w-8/12 p-6 flex  ">
                <div className="w-6/12 border-l-1 p-3 border-x-gray-600">
                <p className="text-sm text-gray-500 font-normal  my-3">Name :</p>
                <p className="text-sm text-gray-500 font-normal  my-3">Email :</p>
                <p className="text-sm text-gray-500 font-normal  my-3">Phone :</p>
                </div>
                 
                <div className="w-6/12 b ">
                <p className="text-xl font-normal  my-3 text-blue-600 underline">{loggedUser?.username}</p>
                <p className="text-sm text-red-600 font-normal  my-3">{loggedUser?.email}</p>
                <p className="text-sm text-black font-bold my-3">{loggedUser?.phone}</p>
                </div>
                
            </div>
        </div>
            
        </div> </>
    )
}