import React from 'react'
import {    MDBFooter,  MDBContainer,  MDBIcon, MDBBtn  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (<>
      <div>
         <MDBFooter className='text-center' color='white' bgColor='dark' >
      <MDBContainer className='p-3'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL' role='button' >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='http://wa.me/7306890297' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/suhaii.bb?igsh=ODhhanN0NjYxNmJs' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/muhammedsuhaib/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/muhaammedsuhaib' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

      
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 
        <a className='text-white' href='https://muhammedsuhaibpottayil@gmail.com/'>
          Suhaib.com
        </a>
      </div>
    </MDBFooter>
    </div>
  </> )
}

export default Footer