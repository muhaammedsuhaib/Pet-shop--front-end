import React, { useContext, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import axios from "axios";
import { passingProducts } from "./Main";
import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBCardImage,
    MDBIcon
  } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Wishlist() {

    const {userData,adtest,wishlist,setWishlist,setAdtest}=useContext(passingProducts);
     
    const nav=useNavigate();
    // const isEmpty= wishlist?.length===0;

    // console.log(isEmpty);
  const fetchwishlist = async () => {
    if (!userData?._id) return; // Ensure userData._id is available before making the request
    try {
      const response = await axios.get(`http://localhost:7878/api/users/products/${userData._id}/wishlist`);
      setWishlist(response.data); // Directly set the cart to the fetched data
      setAdtest(!adtest)
      // console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    
      // Optionally handle the error (e.g., show a notification to the user)
    }
  };

  const deleteWishlist = async (itemId)=>{
    const response= await axios.delete(`http://localhost:7878/api/users/products/${userData._id}/wishlist/${itemId}/remove`)
    try {
      // console.log(response);
      setAdtest(!adtest)
      // setWishlist(response.data)
      console.log(response);
      toast.success(response.data.message);
      
    } catch (error) {
      toast.error(response.data.message);
    }

  }



  useEffect(() => {
    fetchwishlist();
  }, [wishlist,setWishlist]);
  // console.log(wishlist);
  return (<>  <br />
  <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    {Array.isArray(wishlist)&&wishlist.length!==0 ?<>
      <div> 
       <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Wishlist Products</strong>
      </h4>

      <MDBRow>
{wishlist?.map((item)=>(
  <>
  <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src={item?.productId.image}
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                    ₹{item.productId.price}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <div className="container-fluid">
            <div className="row">
              <div className="col-10"><MDBBtn className="w-100"  color='link'>Add to cart  </MDBBtn></div>
              <div className="col-2" onClick={()=>deleteWishlist(item.productId._id)}><MDBBtn className="w-100"  color='link'><MDBIcon fas icon="trash" animate="beat" color="danger" size="1x"  />  </MDBBtn></div>
              </div>            
          </div>
         </MDBCol>
  </>
))}    
        
        </MDBRow>
    </MDBContainer>
        </div> 
      
    </> :<>
    <br /><br/>
    <h4 style={{color:'gray'}}>Hey {userData?.username}, your wishlist is empty! Add something now."</h4> 
  <MDBBtn  rounded  className='m-2' color='white' onClick={()=>nav('/all')} >Shop now</MDBBtn>
    </> } 
  </div>

    </>
  );
}

export default Wishlist;