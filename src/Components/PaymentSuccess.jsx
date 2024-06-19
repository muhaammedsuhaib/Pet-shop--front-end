// src/SuccessMessage.js
import React from 'react';
import { MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
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
