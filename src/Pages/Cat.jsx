import React, { useContext } from 'react'
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { passingProducts } from '../Components/Main';
import Navbar from '../Components/Navbar'

const Cat = () => {
    const {products}=useContext(passingProducts)
    const nav=useNavigate()
    const filteredData=products.filter((item) => item.category === "Cat");
  return (<>
  {/* <Navbar/> */}
  <br /><br /><br />
  <div className="d-flex justify-content-center flex-wrap">
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

export default Cat
