import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow
} from "mdb-react-ui-kit";
import Admin from "./Admin";
import axios from "axios";

export default function Allorders() {

  const [allorder,setallorder]=useState([]);
console.log(allorder);
    const fetchOrder = async()=>{
       const response = await axios.get(`http://localhost:7878/api/admin/orders`) 
       try {
        setallorder(response?.data);
        console.log(response.data);
       } catch (error) {
        console.log(response.data);
       }
    }
    useEffect(()=>{
      fetchOrder();
    },[])
  return (
    <>
    <Admin/>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="12">
              {allorder.length>=0 &&allorder?.map((item)=>(
                <>
                <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                    User Id :{item?.userId}
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>{new Date(item.purchaseDate).toLocaleDateString()}</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <pre>{item.orderId}</pre>
                    </MDBCol>
                  </MDBRow>

                  {/* <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  > */}
                    {/* <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>BEATS Solo 3 Wireless Headphones</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>£299.99</p>
                      </MDBCol>
                    </MDBRow> */}
                    {/* <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Shipping</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">£33.00</p>
                      </MDBCol>
                    </MDBRow> */}
                  {/* </div> */}
                  {/* <MDBRow className="my-4">
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#f37a27" }}
                      >
                       ₹{item.totalPrice}
                      </p>
                    </MDBCol>
                  </MDBRow> */}

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#f37a27" }}
                  >
                    Tracking Order
                  </p>
                  {item?.productId.map((items, index) => (
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
                  {/* <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Shipped
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              On the way
                            </p>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: "-8px" }}
                          >
                            <p style={{ marginRight: "-8px" }}>Delivered</p>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow> */}
                  {/* <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p> */}
                </MDBCardBody>
              </MDBCard>
                </>
              ))}
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}