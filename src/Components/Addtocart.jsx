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
  const {userData,adtest,cart,setCart,setAdtest}=useContext(passingProducts)
  const nav=useNavigate()
  // const [auth,setAuth]=useState(false)

  const fetchCart = async () => {
    if (!userData?._id) return; // Ensure userData._id is available before making the request
    try {
      const response = await axios.get(`http://localhost:7878/api/users/products/${userData._id}/cart`);
      setCart(response.data); // Directly set the cart to the fetched data
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
      // Optionally handle the error (e.g., show a notification to the user)
    }
  };
  useEffect(() => {
    fetchCart();
  }, [cart,setCart]);
  // console.log(isEmpty);

// const increment= async(id)=>{
//   console.log('jhh');
//   const response= await axios.patch(`http://localhost:7878/api/users/products/${userData?._id}/cart/${id}/increment`);
//   try {
//     console.log(response);
//     toast.success(response.data.message);
//   } catch (error) {
//     toast.error(response.data.message);
//   }
// }




//   const increment=(Id)=>{
//     const cartData=userData.cart.find((item)=>item.Id ===Id)
//     if(cartData.Stock>cartData.Qty){
//       cartData.Qty +=1
//     setAuth(!auth)
//     }else{
//       toast.warning('Out of stock')
//     }    
//   }
//   const decrement=(Id)=>{
//     const cartData=userData.cart.find((item)=>item.Id ===Id)
//     if(cartData.Qty>1){
//       cartData.Qty -=1
//     }
//     setAuth(!auth)   
//   }
//   const remove=(Id)=>{
//     let filterData=userData.cart.filter((item)=>item.Id !== Id )
//      userData.cart=filterData
//      setAuth(!auth)
//   }
 
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
  const response= await axios.delete(`http://localhost:7878/api/users/products/${userData._id}/cart/${itemId}/remove`)
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
  <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    {Array.isArray(cart)&&cart.length !==0 ?<>
      <div>
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="12">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>

        {cart?.map((item)=>(
        <MDBCard className="rounded-3 mb-4">
                <p className='text-end p-1 ' > <MDBBtn color='link'><MDBIcon fas icon="times" animate='fade' style={{fontSize:'26px'}} onClick={()=>deletecart(item.productId._id)} /></MDBBtn> </p>
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={item?.productId?.image}
                  alt={item?.productId?.title} />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{item?.productId?.title}</p>
                {/* <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p> */}
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2" >
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={item?.quantity} type="number" size="sm" />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus"  />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                ₹{item?.quantity * item?.productId?.price}
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-white" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      ))}
        {/* <MDBCard className="mb-4">
          <MDBCardBody className="p-4 d-flex flex-row">
            <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
            <MDBBtn className="ms-3" color="warning" outline size="lg">
              Apply
            </MDBBtn>
          </MDBCardBody>
        </MDBCard> */}

        <MDBCard>
          <MDBCardBody>
            <MDBBtn className="ms-0" color="warning" block size="lg">
              Apply
            </MDBBtn>
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
  










