import React, { useContext, useEffect, useState } from 'react';
import { passingProducts } from '../Components/Main';
import { MDBBtn, MDBInput, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './Style.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const { setUserData, userData } = useContext(passingProducts);
  const [collect, setCollect] = useState({ email: '', password: '' });
  const nav = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, [setUserData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: token,
      }
    };

    try {
      const response = await axios.post("http://localhost:7878/api/users/login", {
        email: collect.email,
        password: collect.password
      }, config);

      const userData = {
        username: response.data.user.username,
        userId: response.data.user._id,
        useremail: response.data.user.email,
        token: response.data.token,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData(userData);
      toast.success(response.data.message);
      setTimeout(() => {
        nav('/');
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserData(null);
  };

  return (
    <>
      <div className='top'>
        {!userData ? (
          <div className='container' style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "400px", height: "400px", padding: "10px", backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(2px)' }}>
              <form onSubmit={handleSubmit}>
                <h4>Login</h4>
                <p className='text-end'><MDBIcon fas icon="lock" onClick={() => nav('/adminlogin')} /></p>
                <MDBInput required wrapperClass="mb-4" label='Email' type='email' onChange={(e) => setCollect({ ...collect, email: e.target.value })} />
                <MDBInput required wrapperClass="mb-4" label='Password' type='password' onChange={(e) => setCollect({ ...collect, password: e.target.value })} />
                <div className="d-grid gap-2">
                  <MDBBtn rounded color='link' onClick={() => nav('/sign')}>Create new account</MDBBtn>
                  <MDBBtn className='mx-2' color='secondary' type="submit">Login</MDBBtn>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        ) : (
          <div className='top'>
            <div className='container' style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "400px", height: "400px", padding: "10px", backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(2px)' }}>
                <div className="d-grid gap-2">
                  <h4>Profile</h4>
                  <p><b><FaCircleUser /> {userData.username}</b></p>
                  <p><b><IoMdMail /> {userData.useremail}</b></p>
                  <MDBBtn rounded className='mx-2' onClick={() => nav('/sign')}>Add new account</MDBBtn>
                  <MDBBtn rounded className='mx-2' color='dark' onClick={handleLogout}>Log out</MDBBtn>
                </div>
                <MDBContainer className='p-3'>
                  <p className='text-end'><MDBIcon fas icon="lock" size='lg' onClick={() => nav('/adminlogin')} /></p>
                  <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL' role='button'>
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
                  <a className='text-white' href='https://www.instagram.com/suhaii.bb?igsh=ODhhanN0NjYxNmJs'>
                    suhaib.com
                  </a>
                </MDBContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
