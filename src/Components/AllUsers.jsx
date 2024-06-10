import React, { useContext, useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody ,MDBIcon} from 'mdb-react-ui-kit';
import Admin from './Admin';
import { passingProducts } from './Main';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';

const AllUsers  = () => {
  const {loginData,adtest,setAdtest}=useContext(passingProducts);

  const [user,setUser]=useState([]);

  const fetchUser= async ()=>{
    const response= await axios.get('http://localhost:7878/api/admin/viewAllUsers');
    setUser(response.data)
  }
  
  const userBlock = async (userId)=>{
    console.log(userId);
const response = await axios.put(`http://localhost:7878/api/admin/user/block/${userId}`) 
try {
console.log(response.data.message);
setAdtest(!adtest)
  alert(response.data.message);
} catch (error) {
  alert(response.data.message);
}
  }

  const userUnblock= async (userId)=>{
    console.log(userId);
    const response = await axios.put(`http://localhost:7878/api/admin/user/unblock/${userId}`) 
    try {
    console.log(response.data.message);
    setAdtest(!adtest)
      alert(response.data.message);
    } catch (error) {
      alert(response.data.message);
    }
  }
  useEffect(()=>{
    fetchUser();
  },[setAdtest,adtest])
  console.log(user);
  return (
  <div>
    <Admin/>
    <div className='container' style={{border:'2px solid black',width:'90%',height:700 ,overflow:'auto'}}>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>User</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Block</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        {user?.map((item)=>(
           <tr>
          <th scope='row'><FaUserCircle size={30}/></th>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item?.isDeleted?<MDBIcon fas icon="user-lock" onClick={()=>userUnblock(item._id)}  />:<MDBIcon fas icon="user-alt" onClick={()=>userBlock(item._id)}  />}</td>
        </tr>  
        ))}
            
      </MDBTableBody>
    </MDBTable>
    </div>
  </div>
    
  );
};
export default AllUsers ;