import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { passingProducts } from './Main';

const ShowProducts = () => {

    const {id} =useParams()
    
    const [proShow,setProShow]=useState('');

const {userData,adtest,setAdtest}=useContext(passingProducts);

    const pro= async (id) =>{
      const respose = await axios.get(`http://localhost:7878/api/users/products/${id}`)
      setProShow(respose.data.product);
    }

    const cartshowing= async(productId)=>{
    const response = await axios.post(`http://localhost:7878/api/users/products/${userData._id}/cart/${productId}`)
    try {
      setAdtest(!adtest)
      toast.success(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
    }
    }

    const addtowishlist= async (productId)=>{
  const response =await axios.post(`http://localhost:7878/api/users/products/${userData._id}/wishlists/${productId}`)
    try {
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
    }
    }

    useEffect(()=>{
      pro(id);
    },[])

   const nav=useNavigate()

  
           
  return (
   <>
    <br/><br/>   
<div className="container p-3" >
          <MDBCard style={{ maxWidth: '100%' }}>
        <p className='text-start p-2'><MDBIcon fas icon="heart" size='2x'onClick={()=>userData? addtowishlist(proShow._id):nav('/login')} /></p> 
      <MDBRow className='g-0'>
        <MDBCol md='3'>
          <MDBCardImage src={proShow.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{proShow.title}</MDBCardTitle>
            <MDBCardText> 
             
             <span style={{color:'red'}}>-15%</span>  ₹<b>{proShow.price}</b>(inclusive of all taxes)<br/>
          M.R.P.: ₹<span className="text-decoration-line-through">{proShow.price+500}</span> <br />
          {proShow.category} Food         
              <br/>    <strong style={{textDecoration:'underline'}}> Proudect detiles</strong>
              <br/>
            </MDBCardText> 
            <MDBCardText>
             <p><strong>{proShow.description}</strong></p> 
            </MDBCardText>          
              <MDBBtn className='mx-1' onClick={()=>userData? cartshowing(proShow._id):nav('/login')}><MDBIcon fas icon="cart-plus"/> Add to cart</MDBBtn>          
              <MDBBtn className='mx-1' color='success'>Buy</MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    </div>
          <ToastContainer/>
          </>
  )
}

export default ShowProducts





{/* <div style={{width:'100%', height:'700px',overflow:'auto'}}>
            <MDBCard>
              <div className="container bg-black">hy</div>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={proShow.image} fluid alt={proShow.title}   style={{ width: '15rem', height:'20rem'}}></MDBCardImage>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{proShow.title}</MDBCardTitle>
              <MDBCardText> 
             
   <span style={{color:'red'}}>-15%</span>  ₹<b>{proShow.price}</b>(inclusive of all taxes)<br/>
M.R.P.: ₹<span className="text-decoration-line-through">{proShow.price+500}</span>


    <br/>    <strong style={{textDecoration:'underline'}}> Proudect detiles</strong>
    <br />
    <pre>{proShow.description}</pre>              
       <per><strong style={{color:'yellowGreen'}}>Powerd by :Suhaib.com</strong></per><br/>            
              </MDBCardText>  
                <MDBBtn >Add to cart</MDBBtn>                          
            </MDBCardBody>
          </MDBCard>
          </div> */}
                {/* <MDBBtn onClick={()=>userData?cartshowing():nav('/login')}>Add to cart</MDBBtn>                           */}