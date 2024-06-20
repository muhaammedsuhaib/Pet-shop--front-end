// src/SuccessMessage.js
import React, { useEffect } from 'react';
import { MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SuccessMessage = () => {
  const navigate = useNavigate();

  const orderDetails = async () => {
    try {
      const response = await axios.get('http://localhost:7878/api/users/products/payment/success');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error fetching order details:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    orderDetails();
  }, []);

  return (
    <MDBContainer className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center p-4 bg-success text-white rounded">
        <MDBTypography tag="h4" className="mb-4">
          Order completed successfully!
        </MDBTypography>
        <MDBBtn color="light" outline onClick={() => navigate('/')}>
          Go to Home
        </MDBBtn>
      </div>
    </MDBContainer>
  );
};

export default SuccessMessage;
