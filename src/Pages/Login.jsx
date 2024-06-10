import React, { useContext, useRef, useState } from 'react'
import { passingProducts } from '../Components/Main'
import { MDBBtn,MDBInput,MDBIcon,MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io"
import './Style.css'
import Navbar from '../Components/Navbar'
import Swal from 'sweetalert2';

import axios from "axios";
const Login = () => {

    const {loginData,setUserData,userData}=useContext(passingProducts);
    const [collect,setcollect]=useState([]);
    const inputRef=useRef()
    const nav=useNavigate()
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     let email = inputRef.current.email.value
    //     let password = inputRef.current.password.value
    //     let dataUser=loginData.find((item)=>item.email===email)
    //     if(email==="admin@gmail.com" && password==="1234"){
    //       nav('/allusers')       
    //     }else if(dataUser && dataUser.password===password){
    //       setUserData(dataUser)
    //        Swal.fire({
    //       text: 'Add account!',
    //       icon: 'success',
    //       confirmButtonText: 'OK'
    //     })
    //      setTimeout(()=>{        
    //     nav('/')
    //      },1000)   
    //     }else{
  
    //     toast.warning(`Can't find account We can't find an account with .Try another email address,or if you don't have an Pet shope account,you can sign up TRY AGAIN `)  
    //     }
     
    //    }
      const handleSubmit= async(e)=>{
        const token = localStorage.getItem('token')
        const consfig = {
          headers : {
            "content-type":"application/json",
            Authorization:token,
          }
      }
       try {
        e.preventDefault()
        const response= await axios.post("http://localhost:7878/api/users/login",{
      email:collect.email,
      password:collect.password
        },consfig)
        setTimeout(()=>{        
          setUserData(response.data.user);
          localStorage.setItem("token",response.data.token)
          nav('/')
        },1000)
        toast.success(response.data.message)
       } catch (error) {
        toast.error(error.response.data.message)
       }
      }

      const Logout=()=>{
        localStorage.clear()
        setUserData(null)
      }
  return (
    <>
    <div className='top'>          
                {!userData?(<>
                  <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
               <div style={{width:"400px",height:"400px" ,padding:"10px",backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(2px)'}} >
                 <form onSubmit={handleSubmit}>
                 <h4>Login</h4>
                <p className='text-end'><MDBIcon fas icon="lock" onClick={()=>nav('/adminlogin')} /></p> 
                 <MDBInput required wrapperClass="mb-4" defaultValue={'ronaldo@gmail.com'} label='Email'  type='email' onChange={(e)=>setcollect({...collect,email:e.target.value})}/>
                 <MDBInput required wrapperClass="mb-4" defaultValue={12345678} label='Password' type='password'  onChange={(e)=>setcollect({...collect,password:e.target.value})} />                     
                 <div className="d-grid gap-2"> 
                      <MDBBtn rounded color='link' onClick={()=>nav('/sign')} >     Create new account    </MDBBtn>
                      <MDBBtn className='mx-2' color='secondary'  type="submit">    Login   </MDBBtn>   </div>                                                    
                 </form>
                 </div>
                 <ToastContainer/>
              </div>
    
    </>):(<> 
    <div className='top'>
         <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
               <div style={{width:"400px",height:"400px" ,padding:"10px",backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(2px)' }} >
                <div className="d-grid gap-2"> 
                <h4>Profile</h4>
                <p><b><FaCircleUser /> {userData.username}</b></p>
                <p><b><IoMdMail />{userData.email}</b></p>
                      <MDBBtn rounded className='mx-2'  onClick={()=>nav('/sign')} >     Add new account    </MDBBtn>
                      <MDBBtn rounded className='mx-2' color='dark' onClick={()=>Logout() } >    Log out    </MDBBtn>    </div>
                      <MDBContainer className='p-3'>
                <p className='text-end'><MDBIcon fas icon="lock" size='lg' onClick={()=>nav('/adminlogin')}/></p> 
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL' role='button' >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='http://wa.me/7306890297' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/suhaii.bb?igsh=ODhhanN0NjYxNmJs' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/muhammedsuhaib/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/muhaammedsuhaib' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <a className='text-white' href='https://www.instagram.com/suhaii.bb?igsh=ODhhanN0NjYxNmJs'>
          suhaib.com
        </a>
      </MDBContainer> 
                </div></div>
        </div>        
        </>   )}
      
             
        </div>    
    </>
  )
}

export default Login