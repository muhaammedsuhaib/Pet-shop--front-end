// src/SuccessMessage.js
import React, { useEffect } from 'react';
import { MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SuccessMessage = () => {

  const orderDetaiils = async()=>{
    const response = await axios.get(`http://localhost:7878/api/users/products/payment/success`)
    try {
      console.log(response.data.message);
    } catch (error) {
      console.log(response.data);
    }
  }

  useEffect(()=>{
    orderDetaiils();
  },[])
    const nav=useNavigate()
  return (
    <MDBContainer className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center p-4 bg-success text-white rounded">
        <MDBTypography tag="h4" className="mb-4">
          Order completed successfully!
        </MDBTypography>
        <MDBBtn color="light" outline onClick={()=>nav('/')}>
          Go to Home
        </MDBBtn>
      </div>
    </MDBContainer>
  );
};

export default SuccessMessage;
