import React, { useContext } from 'react'
import {Card,Button} from 'react-bootstrap';
import { passingProducts } from '../Components/Main';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'


const Dog = () => {
    const nav=useNavigate()
    const {products}=useContext(passingProducts)
    const filteredData=products.filter((item)=>item.category==='Dog')
  return (<>
  {/* <Navbar/> */}
  {/* <br /><br /><br /> */}
  {/* <div className="d-flex align-items-center justify-content-center flex-wrap " style={{width:'100%',height:700 ,overflow:'auto'}}>
   {filteredData.map((datas)=>(      
  
<Card 
    className="shadow m-2 bg-body-tertiary rounded"
style={{ width: '11rem', height:'20rem', alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between" }}>
<Card.Img style={{height:"9rem", width:'6rem'}} variant="top" src={datas.image} />
<Card.Body>
<Card.Title style={{fontSize:'small'}}>{datas.ProductName}</Card.Title>
<Card.Text>
    <per className="text-decoration-line-through">₹{datas.price}</per>   <br/>       
    ₹{datas.price}
</Card.Text>
<Button variant="primary" onClick={()=>nav(`/show/${datas._id}`)}>Shopnow</Button>
</Card.Body>
</Card>
))}
   </div> */}
 <br/>
<div className="d-flex justify-content-center flex-wrap pt-5">
      {filteredData.map((item) => (
        <Card key={item._id} className="shadow m-2 bg-body-tertiary rounded" style={{ width: '12rem', height: '20rem' }}>
          <Card.Img variant="top" src={item.image} className="img-fluid" style={{ maxHeight: '9rem', overflow: 'hidden' }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-center" style={{ fontSize: 'small' }}>{item.title}</Card.Title>
            <Card.Text className="text-center">
              <per className="text-decoration-line-through">₹{item.price + 500}</per> <br />
              ₹{item.price}
            </Card.Text>
            <Button variant="primary" onClick={() => nav(`/show/${item._id}`)}>shop now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  
  
  
  
  </> )
}

export default Dog