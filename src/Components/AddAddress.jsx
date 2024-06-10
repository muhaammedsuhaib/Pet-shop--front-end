import React, { useContext, useRef} from 'react'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import { passingProducts } from './Main';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const nav=useNavigate()
  const {address,setAddress,adtest,setAdtest}=useContext(passingProducts)
  const inputRef=useRef()
  const handlesubmit=(e)=>{
    e.preventDefault()
    
    let sName=inputRef.current.lastname.value
    let add=inputRef.current.addres.value
    let email=inputRef.current.email.value
    let phone=inputRef.current.phone.value
    let pincode=inputRef.current.pincode.value    
    setAddress([...address,{firstname:inputRef.current.firstname.value,lastName:sName,add:add,email:email,phone:phone,pincode:pincode}])
    Swal.fire({
      title:'Add address!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    setAdtest(!adtest)
    setTimeout(()=>{
      nav('/addtocart')
    },1000)
  }
  return (<>
        <Navbar/>
        <div className='topone'>
    <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div  style={{width:"800px",height:"auto" ,padding:"10px",backgroundColor:'white' }} >
      <div className='container' style={{textAlign:'left', color:"Highlight",textDecoration:'underline'}}><h5>ADDRESS</h5></div>
      <form onSubmit={handlesubmit} ref={inputRef}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' required label='First name' name='firstname'/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' required label='Last name' name='lastname' />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' required  label='Address' name='addres'/>
      <MDBInput wrapperClass='mb-4' required type='email' label='Email' name='email' />
      <MDBInput wrapperClass='mb-4' required type='tel'  label='Phone' name='phone'/>
      <MDBInput wrapperClass='mb-4' required type='number'  label='Bank Code' name='Bank Code'/>
      <MDBInput wrapperClass='mb-4' required textarea  rows={4} label='Pincode'  name='pincode'/>
      <MDBBtn className='mb-4' type='submit' block>     Add address   </MDBBtn>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default AddAddress