import React, { useContext, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { passingProducts } from '../Components/Main';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {

    const {loginData,setUserData,userData}=useContext(passingProducts);
    const [collect,setcollect]=useState([]);
    const nav=useNavigate()
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
        const response= await axios.post("http://localhost:7878/api/admin/login",{
      email:collect.email,
      password:collect.password
        },consfig)
        setTimeout(()=>{        

        //   setUserData(response.data.user);
        //   localStorage.setItem("token",response.data.token)

          nav('/allusers')
        },1000)
        toast.success(response.data.message)
        alert(response.data.message)
       } catch (error) {
        toast.error()
        alert(error.response.data.message)
       }
      }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e)=>setcollect({...collect,email:e.target.value})}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e)=>setcollect({...collect,password:e.target.value})}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Login admin' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' type="submit">Login</MDBBtn>
              </form>
              <div className="text-center">

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Adminlogin;