import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
   if( props.loading ) {
      return <Col>Loading... </Col>
   }
   return (<React.Fragment>
         {
            props.ascii_data.map( (ascii,key) => {
               return (<Col key={key}  xs={12} sm={6} md={4} lg={4} xl={3} className="text-center">
                  <Card >
                     <Card.Body className="text-center">
                        <Card.Title>{ ascii.ascii }</Card.Title>
                        {/* <Card.Text>
                           { ascii.words.map( (word,key) => <span key={key}>{ word } </span> )}
                        </Card.Text> */}
                     </Card.Body>
                  </Card>
                  {/* <div class="caption-separator"></div> */}
                  <h6 className="title text-uppercase mt-2 ">
                     { ascii.words.map( (word,key) => <span key={key}>{ word } </span> )}
                  </h6>
                  <div className="price"><span>${ ascii.price }</span></div>
                  <Button className="add-to-cart mt-4">Add to cart</Button>
               </Col> )
            })
         }
   </React.Fragment> )
}
export default ProductCard;