import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { IoHomeSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const nav=useNavigate()
  return (
    <div className='container'><br /><br />
        <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link onClick={()=>nav('/allusers')}><FaUsers size={20} color='black'/></Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link onClick={()=>nav('/productsall')} ><FaListAlt size={20} color='black' />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>nav('/')}>
        <IoHomeSharp size={20} color='black' />
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
    
    </div>
  )
}

export default Admin