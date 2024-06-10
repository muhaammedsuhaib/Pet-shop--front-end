import React from 'react'
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import {  MDBCard,  MDBCardImage,  MDBRow,  MDBCol} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'

const Home = () => {
    const nav=useNavigate()
  return (<>
  {/* <Navbar/> */}
    <div style={{width:'100%', height:'770px',overflow:'auto'}}>
      <br/><br/>
 <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.petsy.online/cdn/shop/files/Cat-treats-2_1896x527.jpg?v=1705660356' className='d-block w-100' alt='...' onClick={()=>nav('/offer')}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://www.petsy.online/cdn/shop/files/Cat-Banner-8_1.jpg?v=1716805663&width=1912' className='d-block w-100' alt='...' onClick={()=>nav('/offer')} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://www.petsy.online/cdn/shop/files/Dog-Banner-1_1896x527.jpg?v=1705659931' className='d-block w-100' alt='...' onClick={()=>nav('/offer')} />
      </MDBCarouselItem>
    </MDBCarousel>

    <MDBRow className='row-cols-1 row-cols-md-12 g-1'>
    <MDBCol>
    <MDBCard>
      <video autoPlay loop muted playsInline  onClick={()=>nav('/offer')}>
              <source src="https://cdn.shopify.com/videos/c/o/v/39e0d2559bf549dcb3ae9188932e41ba.mp4"  />
            </video>
    </MDBCard>
    </MDBCol>
    </MDBRow>
            
         

    <MDBRow className='row-cols-6 row-cols-md-12 g-3'>
      <MDBCol >
        <MDBCard>
          <MDBCardImage
            src='https://supertails.com/cdn/shop/files/categories_52c8479c-3318-4f9c-8c6e-22c46140d720_480x.png?v=1704701404'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://supertails.com/cdn/shop/files/categories-4_91417480-eecc-4ad9-a673-a414448added_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/cat')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://supertails.com/cdn/shop/files/categories-8_ec2faa12-455f-4cad-b998-36449c3ec9f7_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
         </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-1_acf513ca-2e51-4594-81f1-774aac7ac9d1_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-5_704f164b-7c3c-4dca-b73c-5cddacd739d8_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/cat')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-9_4e448ae0-6f60-419b-a0d0-d488ce03e842_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/cat')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-2_767ff9c2-bf16-4371-bca3-43b4e8c14d43_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-6_b37cbb83-8ea3-45f2-98ea-d59981ebd474_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-10_5714a368-6d86-4287-b417-8e780062a239_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-3_c1821f4b-c73e-4019-a850-ebffa28664ea_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-7_0e233886-a925-480c-942b-27b3972fc4cf_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           src='https://supertails.com/cdn/shop/files/categories-11_0f1d5be6-d225-4f35-8316-b4594d74abd3_800x.png?v=1703666861'
            alt='...'
            position='top'
            onClick={()=>nav('/dog')}
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow className='row-cols-1 row-cols-md-12 g-1'>
    <MDBCol>
    <MDBCard>
      <video autoPlay loop muted playsInline  onClick={()=>nav('/offer')}>
              <source src="https://cdn.shopify.com/videos/c/o/v/fc2c206b295b40fda82fa08a9b9ef68c.mp4"  />
            </video>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    <MDBCarousel showControls showIndicators style={{padding:'5px'}}>
      <MDBCarouselItem itemId={1} onClick={()=>nav('/offer')}>
        <img src='https://supertails.com/cdn/shop/files/29th_Jan_web_4_1600x.png?v=1706505759' className='d-block w-100' alt='...' />
       </MDBCarouselItem>
      <MDBCarouselItem itemId={2} onClick={()=>nav('/offer')}>
        <img src='https://supertails.com/cdn/shop/files/29th_Jan_web_5_1600x.png?v=1706505760' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3} onClick={()=>nav('/offer')}>
        <img src='https://supertails.com/cdn/shop/files/29th_Jan_web_3_d6d8cba7-996c-40c7-a2fe-0c90e362859a_1600x.png?v=1706524870' className='d-block w-100' alt='...' />
       </MDBCarouselItem>
    </MDBCarousel>
    <MDBRow className='row-cols-1 row-cols-md-12 g-1'>
    <MDBCol>
    <MDBCard>
      <video autoPlay loop muted playsInline  onClick={()=>nav('/offer')}>
              <source src="https://cdn.shopify.com/videos/c/o/v/081564c5d9c94abd87abcbe88d42e169.mp4"  />
            </video>
            <div className="full-cover-photo p-3">
            <img src='https://supertails.com/cdn/shop/files/Des-5_b4b4f1ed-5b2e-4083-972b-f2369a3a17cf_1600x.png?v=1703668430'  alt="Full Cover" className="img-fluid" onClick={()=>nav('/all')} />
            </div>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </div> 
  </>  )    
}

export default Home