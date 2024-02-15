import React from 'react'
import "../Components/CarditemsStyle.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import CircleData5 from './CircleCardData5';
import { useCart } from 'react-use-cart';
export default function CircleCard5 () {
  const {addItem} = useCart();
  return (
    <div className="product-cards-container">
      {CircleData5.map((product, index) => (
        <MDBRipple key={index} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCard style={{ width: '300px' }} className='card-container'>
            <MDBCardImage src={product.imgsrc} alt={product.title} />
            <MDBCardBody>
              <MDBCardTitle>{product.title}</MDBCardTitle>
              <MDBCardText>{product.content}</MDBCardText>
              <div className="product-details">
                <span className="price">${product.price}</span>
                <div className="button-container">
                  <MDBBtn className='btn-buy-now me-4'>Buy Now</MDBBtn>
                  <button onClick={()=> addItem(product)}
                  >Add to cart</button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBRipple>
      ))}
    </div>
  );
}
