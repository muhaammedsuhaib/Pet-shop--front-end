import React, { useContext, useRef } from 'react'
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Admin from './Admin';
import { passingProducts } from './Main';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const EditProduct = () => {
  const {products,setProducts,ItemUpdate}=useContext(passingProducts)
  const nav=useNavigate()
   
      const nameRef=useRef('')
      const imageRef=useRef('')
      const priceRef=useRef('')
      const stockRef=useRef('')
      const oldprieRef=useRef('')
      
     
           const edit = (e)=>{
          e.preventDefault();
          const temporary = products.map((x)=>
          x.Id === ItemUpdate.Id?{
            ...x,
            ProductName:nameRef.current.value,
            OldPrice:oldprieRef.current.value,
            Price:priceRef.current.value,
            Image:imageRef.current.value,
            Stock: stockRef.current.value,
          }:x
          )
     setProducts(temporary)
      
      }
      const click=()=>{
        Swal.fire({
          text: 'Edit product!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setTimeout(()=>{
        nav('/productsall')
        },1000)
      }
  return (<>
  <Admin/>
  <div className='top'>
    <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"600px",height:"500px" ,padding:"10px",backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(2px)'}}>
           <form onSubmit={edit} >
           <MDBInput wrapperClass='mb-4'  type='text' label='Product name' defaultValue={ItemUpdate.ProductName} ref={nameRef} />
      <MDBInput wrapperClass='mb-4'  type='number' label='Product Stock' defaultValue={ItemUpdate.Stock} ref={stockRef}/>
      <MDBInput wrapperClass='mb-4'  type='number' label='Price' defaultValue={ItemUpdate.OldPrice} ref={oldprieRef} />
      <MDBInput wrapperClass='mb-4'  type='number' label='Discont price' defaultValue={ItemUpdate.Price} ref={priceRef}/>
      <MDBInput wrapperClass='mb-3'  type='url' label='Image URL' defaultValue={ItemUpdate.Image} ref={imageRef} />

      <MDBBtn className='mb-4' type='submit'  onClick={click}>      Edit product    </MDBBtn>
    </form>
    <b>suhaib@gmail.com</b>
    </div>
    </div>
    </div>
    </>
  )
}

export default EditProduct