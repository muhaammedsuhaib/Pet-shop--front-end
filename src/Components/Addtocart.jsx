import React, { useContext, useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { passingProducts } from './Main';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { toast,ToastContainer } from 'react-toastify';
import Navbar from './Navbar'
import Swal from 'sweetalert2';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Addtocart = () => {
  const {userData,adtest,cart,setCart,setAdtest}=useContext(passingProducts);
  const nav=useNavigate()


  const fetchCart = async (id) => {
    try {
      const response = await axios.get(`http://localhost:7878/api/users/products/${id}/cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  };


  useEffect(() => {
    fetchCart(userData?.userId);
  }, [cart,setCart]);



  const increment= async (id)=>{
    const response = await axios.put(`http://localhost:7878/api/users/products/${userData?.userId}/cart/${id}/increment`)
  }

  const decrement= async (id)=>{
    const response = await axios.put(`http://localhost:7878/api/users/products/${userData?.userId}/cart/${id}/decrement`)
    }
 

  const order= async ()=>{
    const response= await axios.post(`http://localhost:7878/api/users/products/${userData?.userId}/payment`);
    try {
      console.log(response.data.url);
      const url = response.data.url;
      const confirmation = window.confirm("Payment session created. Redirecting to the payment gateway. Continue?");
      if (confirmation) window.location.replace(url);
    } catch (error) {
      console.log(error);
      
    }

  }
//  const click=()=>{
//  if(userData?.cart?.length===0){
//   toast.warning('Add products') 
//   setTimeout(() => {
//     nav('/all')
//   }, 1000); 
//  }else if(adtest){
//   Swal.fire({
//     text: 'Order success!',
//     icon: 'success',
//     confirmButtonText: 'OK'
//   }) 
  
//  }else {
//   nav('/address')
//  }
//  }
//  const buyProduct=(Id)=>{
//   if(address){
//     nav('/address')
//   }else{
//     const productBuy=userData.cart.filter((item)=>item.Id ==Id);
//     if(productBuy){
//       const updatcart=userData.cart.filter((item)=>item.Id !== Id)
//       userData.cart=updatcart
//       setBuy([...buy,productBuy])
//       Swal.fire({ text: 'Add account!', icon: 'success',  confirmButtonText: 'OK'    }) 
//       }
//     }
//   }


const deletecart = async (itemId)=>{
  const response= await axios.delete(`http://localhost:7878/api/users/products/${userData?.userId}/cart/${itemId}/remove`)
  try {
    toast.success(response.status);
    console.log(response);
    setAdtest(!adtest)
    // setWishlist(response.data)
    // console.log(response);
    
  } catch (error) {
    toast.error(response.data.message);
  }

}
  return (<>
  <br /><br />
  <div style={{width:'100%', height:'700px',overflow:'auto',padding:0}}>
    {Array.isArray(cart)&&cart.length !==0 ?<>
      <div>


<section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-2 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="p-4">
            <MDBRow>
              <MDBCol lg="7">
                <MDBTypography tag="h5">
                  <a href="#!" className="text-body" onClick={()=>nav('/all')}>
                    <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                    shopping
                  </a>
                </MDBTypography>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have {cart.length} items in your cart</p>
                  </div>
                  <div>
                    <p>
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price
                        <MDBIcon fas icon="angle-down mt-1" />
                      </a>
                    </p>
                  </div>
                </div>

                {cart?.map((item)=>(<>
                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src={item.productId.image}
                            fluid className="rounded-3" style={{ width: "85px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                            {item.productId.title}
                          </MDBTypography>
                          <p className="small mb-0">{item.productId.category} Food</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>

                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            
                          <MDBBtn color="link" onClick={()=>decrement(item.productId._id)} >
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>
                            {item.quantity} 
                            <MDBBtn color="link" onClick={()=>increment(item.productId._id)}>
                        <MDBIcon fas icon="plus"  />
                      </MDBBtn>
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                          ₹{item?.quantity * item?.productId?.price}
                          </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <MDBIcon fas icon="trash-alt" onClick={()=>deletecart(item.productId._id)} />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard> </>))}
              </MDBCol>

              <MDBCol lg="5">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" className="mb-0">
                        Card details
                      </MDBTypography>
                      <MDBIcon fas icon="user-circle" size='2x' />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <hr />

                      {cart?.map((item)=>(<>
                        <div className="d-flex justify-content-between">
                      <p className="mb-2">{item.productId.title}</p>
                      {/* <p className="mb-2">{item.quantity}</p> */}
                      <p className="mb-2">₹{item.quantity*item.productId.price}</p>
                    </div>
                      </>))}                   

                
                    
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total</p>
                      <p className="mb-2">₹{cart?.reduce((acc, curr) => acc + curr.productId.price * curr.quantity, 0)}</p>
                    </div>

                    <MDBBtn color="info" block size="lg" onClick={()=>order()}>
                      <div className="d-flex justify-content-between">
                        <span>{}</span>
                        <span>
                          Order{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>

          </div>
     
    </> :<>
    <br />
    <h4 style={{color:'gray'}}>Hey {userData?.username}, your cart is empty! Add something now."</h4> 
  <MDBBtn  rounded  className='m-2' color='white' onClick={()=>nav('/all')} >Shop now</MDBBtn>
    
    </> } 
  </div>
 
  </> )
}

export default Addtocart





















// {userData?nav('/address'):toast.warning('Add product')}






{/* {!userData?(<> */}
  {/* <div style={{width:'100%', height:'700px',overflow:'auto'}}>
  <h3 style={{color:'gray'}}>Please Login and continue </h3>   
          <div className='container' style={{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <div style={{width:"400px",height:"400px"  }} >                     
                    <MDBCardImage src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt="..." fluid  onClick={()=>nav('/login')}/> 
                    <MDBBtn outline rounded className='mx-5' color='dark'  onClick={()=>nav('/login')}>        Login     </MDBBtn>                
                  </div>
                  </div>
                  </div> */}
  {/* </>):( */}




  
  {/* <Navbar/> */}
  // <br /><br /><br />
  
  //   <>
  //   <div style={{width:'100%', height:'700px',overflow:'auto'}}>
  //   <b style={{color:'WindowFrame'}}>Products</b> 
  //   {cart?.map((item)=>(
  //      <div class="container">
  //           <MDBCard>   
  //           <div class="container" style={{textAlign:'right'}} ><MDBBtn color='wihte' onClick={()=>remove(item.Id)}><MdDeleteForever size={30}/></MDBBtn></div>     
  //     <MDBCardBody>      
  //     <div class="container">
  //   <div class="row">
  //     <div class="col-sm-1">
  //     <p><b>{item?.productId?.category}</b></p>
  //     <MDBCardImage  src={item?.productId?.image} alt='df' fluid />
  //     </div>
  //     <div class="col-sm-6">
  //     <div style={{color:'Highlight',textDecorationLine:'underline'}} ><b>{item?.productId?.title}</b></div> 
  //     <MDBBtn   rounded  className='mx-2' color='white'  onClick={()=>decrement(item.Id)}>  <FaCircleMinus size={20} /> </MDBBtn>
  //       <b >Quantity:{item.Qty}</b>
  //     <MDBBtn   rounded  className='mx-2' color='white' onClick={()=>increment(item.Id)}>  <FaCirclePlus size={20}/> </MDBBtn>   <br />
  //     <b>₹{item.Qty * item.Price}</b> <br />
  //     <MDBBtn  rounded  className='m-2'  >BUY Product</MDBBtn>
  //     </div>
  //   </div>
  // </div> 
  // </MDBCardBody>
  //   </MDBCard>
  //         </div>
  //   ))}
  //  <div class="container" style={{textAlign:'right'}} ><MDBBtn size='lg' className='m-2' >Total amount:₹{userData.cart.reduce((acc,curr)=>acc+=curr.Price*curr.Qty,0)}</MDBBtn></div>
  //  </div>
  //   </>
      //  <ToastContainer/>                     
  










