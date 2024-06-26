import React, { useContext, useState } from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from 'mdb-react-ui-kit';
import { FaCircleUser, FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { passingProducts } from './Main';
import axios from 'axios';


const Navbar = () => {
    const [openBasic, setOpenBasic] = useState(false);
    const nav=useNavigate()
    const {userData,setSearch,products,search}=useContext(passingProducts)

    const searchinput= async (e)=>{
      e.preventDefault()
      // setSearch(e.target.value);
       
      // const response=await axios.get(`http://localhost:7878/api/users/products/category/${e.target.value}`);
      // console.log(response);

      // console.log(search);

      let inputword=products.filter((x)=>x.title.toLowerCase().includes(e.target.value.toLowerCase()));
      if(e.target.value.length===0){
        setSearch(null)
      }else if(inputword){
        setSearch(inputword)
        nav('/all')
      }else{
        setSearch(null)    
      }
    }
  
  return (
    <>
    <div>
        <MDBNavbar expand='lg' light bgColor='light' fixed="top" >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'onClick={()=>nav('/')}>Pet shop</MDBNavbarBrand>
     
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
                <input
              type="search"
              placeholder="Search "
              style={{
                width: "140px",
                height: "20px",
                paddingRight: "20px",
                borderRadius: "20px",
                border: "2px solid black",
              }}  aria-label='Search' onChange={searchinput}
              className='mx-3'
            />
          <MDBIcon icon='bars' fas  onClick={() => setOpenBasic(!openBasic)}/>
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=>nav('/')}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=>nav('/offer')} >
                Offers
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' >
                
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 Shopnow
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>nav('/cat')}>Cat</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/dog')}>Dog</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/all')}>All</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>           
          </MDBNavbarNav>   
          <form className='d-flex input-group w-auto'>            
          <input type='search' className='form-control' placeholder='Search' aria-label='Search' onChange={searchinput} />
          
          </form>          
            <MDBNavbarLink >
            {userData&& <FaHeart size={28} style={{margin:'15'}}  onClick={()=>nav('/wishlist')}/>}                      
                </MDBNavbarLink>
            <MDBNavbarLink >
                {userData&&  <MDBIcon fas icon="truck" animate='beat' style={{margin:'15',fontSize:'25px'}} onClick={()=>nav('/OrderDetails')}/>}      
                </MDBNavbarLink>
                <MDBNavbarLink>   
              {userData&& <FaCartShopping size={28} style={{margin:'15'}} onClick={()=>nav('/addtocart')}/>}                
                    
                    </MDBNavbarLink>  
            <MDBNavbarLink >
                {!userData? <MDBIcon fas icon="user-plus" animate='beat' style={{padding:'10px',fontSize:'25px'}} onClick={()=>nav('/login')}/>:<FaCircleUser size={28} style={{margin:'15'}}  onClick={()=>nav('/login')}/>}      
                </MDBNavbarLink>
                                              
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
    </div>
   
    
    </>
  )
}

export default Navbar



