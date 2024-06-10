import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passingProducts } from '../Components/Main';
import { MDBBtn,MDBInput,MDBFile } from 'mdb-react-ui-kit';
import './Style.css'
// import Navbar from '../Components/Navbar'
import axios from "axios";

const Signup = () => {
    const {loginData,setLoginData,setUserData}=useContext(passingProducts)
     const inputRef=useRef()
     const nav=useNavigate()

     const [collect,setCollect]=useState('');
     const [auth,setAuth]=useState(true);

    //  const handleSubmit= ((e)=>{
    //     e.preventDefault()



    //     let password = inputRef.current.password.value
    //     let cPassword = inputRef.current.cPassword.value
    //     let email = inputRef.current.email.value
    //     if(loginData.find((item)=>item.email===email)){
    //         toast.warning('Already have Account , login continue...')
    //         setTimeout(()=>{
    //             nav('/login')
    //         },1000)       
    //     }else if(password===cPassword){
    //       setLoginData([...loginData,{username:inputRef.current.username.value,email:email,password:password,cart:[]}])
    //       nav('/login')
    //     }  else{
    //       toast.warning('Password not match')
    //     }
        
    //     })

    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
       const response = await axios.post('http://localhost:7878/api/users/register',{
          username:collect.username,
          email:collect.email,
          password:collect.password,          
        })
        setAuth(!auth)
        setCollect('')
        setTimeout(()=>{
                      nav('/login')
                  },1000) 
        toast.success(response.data.message)
      } catch (error) {
        toast.error(error.response.data.message);        
      }
    }
  return (
    <>
    {/* <Navbar/> */}
    <div className='top'>     
     <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <div style={{width:"400px",height:"400px" ,padding:"10px",backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(2px)'}} >
          <form onSubmit={handleSubmit} >
          <h4>Create new account</h4>
         {/* <MDBFile wrapperClass="mb-4" label="Choose file" onChange={(e)=>setCollect({...collect,image:e.target.value})} /> */}
          <MDBInput required wrapperClass='mb-4 mt-3' label='Name' id='form1' name="username" type='text'onChange={(e)=>setCollect({...collect,username:e.target.value})} />
          <MDBInput required wrapperClass="mb-4" label='Email' id='form2' name="email" type='email' onChange={(e)=>setCollect({...collect,email:e.target.value})}/>
          <MDBInput required wrapperClass="mb-4"  label='Password' id='form3' name="password" type='password' onChange={(e)=>setCollect({...collect,password:e.target.value})} />
          {/* <MDBInput required wrapperClass="mb-4" label='Confirm Password' id='form4' name="cPassword" type='password' onChange={(e)=>setCollect({...collect,cpassword:e.target.value})}/>     */}
          <div className="d-grid gap-2">        <MDBBtn  className='mx-2' color='secondary'  type="submit"> Submit </MDBBtn>   
          <MDBBtn rounded color='link' onClick={()=>{setUserData(null);nav('/login')}} > Login </MDBBtn>
           </div>                
          </form>
          </div>
          <ToastContainer/>
       </div>
       </div>
    </>
  )
}

export default Signup
