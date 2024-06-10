import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Offer from '../Pages/Offer';
import Footer from './Footer';
// import { Products } from './ProductsObject';
import Cat from '../Pages/Cat';
import Dog from '../Pages/Dog';
import AllProducts from '../Pages/AllProducts';
import ShowProducts from './ShowProducts';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Addtocart from './Addtocart';
import Admin from './Admin';
import ProductsAll from './ProductsAll';
import AllUsers from './AllUsers';
import EditProduct from './EditProduct';
import Addproducts from './Addproducts';
import AddAddress from './AddAddress';
import Navbar from './Navbar';
import axios from 'axios';
import Wishlist from './Wishlist';
import Adminlogin from '../Pages/Adminlogin';


export const passingProducts=createContext()
const Main = () => {
    // const [products,setProducts]=useState(Products)
    const [products,setProducts]=useState([])
    const [loginData,setLoginData]=useState([])
    const [userData,setUserData]=useState(null)
    const [search,setSearch]=useState(null)
    const [ItemUpdate,setItemUpdate]=useState('');
    const [address,setAddress]=useState([])
    const [buy,setBuy]=useState([])
    const [adtest,setAdtest]=useState(false)
    const [cart,setCart]=useState([]);
    const [wishlist,setWishlist]=useState([]);

    const fetchTasks = async ()=>{
      const response = await axios.get("//localhost:7878/api/users/products")
      setProducts(response.data.products);

    }
    

    
    
    
    useEffect(() => {     
      
      fetchTasks();
  }, [])

  return (
    <>
    <BrowserRouter>
    <passingProducts.Provider value={{products,setProducts,loginData,setLoginData,userData,setUserData,search,setSearch,ItemUpdate,setItemUpdate,address,setAddress,buy,setBuy,adtest,setAdtest,cart,setCart,wishlist,setWishlist}}>
   <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/cat' element={<Cat/>}/> 
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/all' element={<AllProducts/>}/>
        <Route path='/show/:id' element={<ShowProducts/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addtocart' element={<Addtocart/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/productsall' element={<ProductsAll/>} />
        <Route path='/allusers' element={<AllUsers/>}/>
        <Route path='/edit' element={<EditProduct/>}/>
        <Route path='/add' element={<Addproducts/>}/>
        <Route path='/address' element={<AddAddress/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/adminLogin' element={<Adminlogin/>}/>
    </Routes>
    <Footer/>
    </passingProducts.Provider>   
    </BrowserRouter>
    </>
  )
}

export default Main