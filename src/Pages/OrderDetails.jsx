import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useContext, useEffect, useState } from "react";
  import { passingProducts } from "../Components/Main";
  import axios from "axios";
import { useNavigate } from "react-router-dom";
  
  export default function OrderDetails() {
    const { userData } = useContext(passingProducts);
    const [order, setOrder] = useState(null);
  console.log(order);
    const nav=useNavigate()
    useEffect(() => {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(
            `http://localhost:7878/api/users/products/${userData?.userId}/orders`
          );
          console.log(response.data);
          setOrder(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      };
  
      if (userData?.userId) {
        fetchOrder();
      }
    }, [userData]);
  
    if (!order) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        <br />
        <section className="h-100 gradient-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="12">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Thanks for your Order,{" "}
                      <span style={{ color: "#a8729a" }}>{userData?.username}</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  {order.length>=0 && order?.map((product, index) => (
                  <div key={index}>
                  <MDBCardBody className="p-4 ">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                        Receipt
                      </p>
                      <pre className="small text-muted text-breack mb-0">
                        Order ID: {product?.orderId}
                      </pre>
                    </div>
                    {product?.productId.map((items, index) => (
                      <MDBCard className="shadow-0 border mb-4" key={index}>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol md="2">
                              <MDBCardImage src={items?.image} fluid alt={items.name} />
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0">{items.title}</p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              {/* <p className="text-muted mb-0 small">{items.color}</p> */}
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">Category: {items.category}</p>
                            </MDBCol>
                            {/* <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">Qty: {items.quantity}</p>
                            </MDBCol> */}
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">₹{items.price}</p>
                            </MDBCol>
                          </MDBRow>
                          <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }} />
                          <MDBRow className="align-items-center">
                            <MDBCol md="2">
                              <p className="text-muted mb-0 small">Track Order</p>
                            </MDBCol>
                            <MDBCol md="10">
                              <MDBProgress style={{ height: "6px", borderRadius: "16px" }}>
                                <MDBProgressBar
                                  style={{
                                    borderRadius: "16px",
                                    backgroundColor: "#a8729a",
                                  }}
                                  width={index+20*index}
                                  valuemin={0}
                                  valuemax={100}
                                />
                              </MDBProgress>
                              <div className="d-flex justify-content-around mb-1">
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivery</p>
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total</span> ₹{product.totalPrice}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Invoice Number : {product.paymentId}</p>
                      {/* <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Discount</span> $0
                      </p> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">Invoice Date : {new Date(product.purchaseDate).toLocaleDateString()}</p>
                      {/* <p className="text-muted mb-0">
                        <span className="fw-bold me-4">GST 18%</span> ${(order.totalPrice * 0.18).toFixed(2)}
                      </p> */}
                    </div>
                    <div className="d-flex justify-content-between mb-5">
                      {/* <p className="text-muted mb-0">Receipts Voucher : {order.orderId}</p> */}
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Delivery Charges</span> Free
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-2"
                    style={{
                      backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h6"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Total paid: <span className="h6 mb-0 ms-2">₹{product.totalPrice}</span>
                    </MDBTypography>
                  </MDBCardFooter> <hr /></div>))}

                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }
  