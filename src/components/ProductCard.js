import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import moment from 'moment';

const ProductCard = (props) => {
   if( props.loading ) {
      return <Col>Loading... </Col>
   }    
   
   const displayDate = ( posted_date ) => {
      const one_week_ago = new Date(new Date().setDate(new Date().getDate() - 7));
      const morethanaweek = one_week_ago > new Date(posted_date);
      const display_date = morethanaweek ?
         `Added on ${moment(posted_date).format('ll')}` : 
         `Added ${moment(posted_date).fromNow()}`;
      return display_date;
   }

   const handleAddToCart = (e, product_data) => {
      console.log(product_data)
   }

   return (<React.Fragment>
         {
            props.ascii_data.map( (ascii,key) => {

               const display_date = displayDate(ascii.date);

               return (<Col key={key}  xs={12} sm={6} md={4} lg={4} xl={4} xxl={3} >

                  <Card >
                     <Card.Body className="text-center">
                        <Card.Title >
                        <h6 className="title text-center text-uppercase mt-2 ">
                           { ascii.words.map( (word,key) => <span key={key}>{ word } </span> )}
                        </h6>
                        <div className="caption-separator"></div> 
                        </Card.Title>
                        <div className="product-container">
                           <Card.Text style={{fontSize:`${ascii.size}px`}}>{ ascii.ascii }</Card.Text>
                        </div>
                     </Card.Body>
                  </Card> 
                  <Row className="mx-1 details-container mt-2">
                     <Col className="p-0 position-relative">
                        <div className="size-date">
                           <span>Size:<b> {ascii.size}px</b></span>
                           <p className="font-italic"> 
                              <small>{ display_date }</small>
                           </p>
                        </div>
                     </Col>
                     <Col className="text-end p-0">
                        <div className="text-center price"><span>${ ascii.price }</span></div>
                        <Button className="add-to-cart" onClick={(e)=>handleAddToCart(e, ascii)}>Add to cart</Button>
                     </Col>
                  </Row> 
               </Col> )
            })
         }
   </React.Fragment> )
}
export default ProductCard;