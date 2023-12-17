import {useState} from 'react';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { LoginUrl } from '../../configs/url';


type UserData = string; // username and password string


export const LoginHook = ()=>{
                const [userName,setUsername] = useState<UserData>('')
                const [password,setPassword] = useState<UserData>('')

                const FormFieldsEmptyCheck = (): boolean => {

                    if (userName == "" || password == "") {
                      toast.error("Empty form can't be submitted.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                      // form empty
                      return false
                    }
                    
                    //form not empty
                    return true;

                  };

                  const handleSubmit = () => {
                    const fieldCheck = FormFieldsEmptyCheck()
                    if (fieldCheck){
                            loginHandle()

                    }
                    else{
                        console.log('field empty');
                        
                    }
                  }

                  const loginHandle = (userType : string = 'user')=>{

                    const userCheck = async () =>{

                        const data = {
                            username :userName,
                            password : password
                        }

                        try {

                            const userExist = await axios.post(LoginUrl,data)
                         
                                    if (userExist.data){
                                        console.log(userExist.data)
                                    }

                        }catch (error) {

                            
                            toast.error("Wrong Credentials. No user ", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                              });


                        }
                    
                   

                 
                     
                        //check the user is valid 
                        if (userType == 'user'){

                            

                        }else{
    
                        }
                        //check user type if user add to local storage or cookie
                        //if admin check the admin type if not toast no permission to access it
                        //then in the local storage add the username and 
                        //store the refresh token and access token



                    

                    }
                    userCheck()

                  }
                  const handleUserName = (evt:React.ChangeEvent<HTMLInputElement>) => setUsername(evt.target.value)
                  const handlePassword = (evt:React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)

                  return {
                    userName,
                    password,
                    setUsername,
                    setPassword,
                    handleSubmit,
                    handlePassword,
                    handleUserName,
                    FormFieldsEmptyCheck,
                    loginHandle
                  }
}