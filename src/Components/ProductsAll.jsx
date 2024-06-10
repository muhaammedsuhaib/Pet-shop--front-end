import React, { useContext } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { MdDeleteForever } from "react-icons/md";
import Admin from './Admin';
import { passingProducts } from './Main';
import { FaEdit } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductsAll = () => {
  const {products,setProducts,setItemUpdate}=useContext(passingProducts)
  const nav=useNavigate()
  const remove=(Id)=>{
    let filterData=products.filter((item)=>item.Id !== Id )
    setProducts(filterData)     
  }

  const featchProductsAll = async()=>{
   const response = axios.get('/api/users/products/products')

  }

  
  return (
    <>
    <Admin/>
    <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    <b style={{color:'WindowFrame'}}>All Products</b> 
    <div class="container" style={{textAlign:'right'}} ><MDBBtn color='dark' className='mb-2' onClick={()=>nav('/add')}>< MdFormatListBulletedAdd size={20}/>Add new product</MDBBtn></div>     
       <div class="container">
   {products.map((item)=>(
    <>
    <MDBCard>   
            <div class="container" style={{textAlign:'right'}} > <MdDeleteForever size={25} color='red' onClick={()=>remove(item.Id)}/></div>        
             <MDBCardBody>      
      <div class="container">
    <div class="row">
      <div class="col-sm-3"> 
      <p><b>{item.category}</b></p>    
      <MDBCardImage  src={item.image} fluid />
      </div>
      <div class="col-sm-9">
      <div style={{color:'CaptionText',textDecorationLine:'underline'}} ><b>{item.title} </b></div> 
         ₹<b>{item.price}</b><br/>
M.R.P.: ₹<span className="text-decoration-line-through">{item.price +500}</span><br />      
       <per><strong>Description:</strong>{item.description}</per> <br/>
       <per><strong>{item.category} Food</strong></per> <br/>
          {/* <per><strong>Stock:{item.Stock}</strong></per><br/>       */}
<div class="container" style={{textAlign:'left'}} > <FaEdit size={20} onClick={()=>{nav('/edit');setItemUpdate(item)}}/></div>
      </div>
    </div>
  </div>  
  </MDBCardBody> 
    </MDBCard>
    <hr/>
    </>
   ))}

            
          </div>
   
   
   </div>
    </>
    )
}

export default ProductsAll