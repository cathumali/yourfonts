import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { Label, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { removeItemToCart, addItemToCart } from '../redux/actions';

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
      props.addItemToCart( product_data )
   }

   return (<React.Fragment>
         {
            props.ascii_data.map( (ascii,key) => {

               const display_date = displayDate(ascii.date);

               return (<Col key={key}  xs={12} sm={6} md={3} xxl={3} >
                  <Card className={`${ascii?.ad&&'with-ad'}`}>
                     { ascii?.ad && <Segment><Label as='a' color='orange' ribbon='right'> Ad</Label></Segment> }
                     <Card.Body className="text-center">
                        {  !ascii?.ad && 
                           <Card.Title >
                              <h6 className="title text-center text-uppercase mt-2 ">
                                 <span >{ ascii.words?.join(',  ')} </span>
                              </h6>
                              <div className="caption-separator"></div> 
                           </Card.Title>
                        }
                        <div className="product-container">
                           <Card.Text style={{fontSize:`${ascii.size}px`}}>{ ascii.ascii }</Card.Text>
                        </div>
                     </Card.Body>
                  </Card> 
                  { !ascii?.ad &&
                     <Row className="mx-1 details-container mt-2">
                        <Col className="p-0 position-relative">
                           <div className="size-date">
                              <div className="price"><span>${ ascii.price }</span></div>
                              <span>Size:<b> {ascii.size}px</b></span>
                           
                           </div>
                        </Col>
                        <Col className="text-end p-0">
                           <div className="cart-container">
                              <Button className="add-to-cart" onClick={(e)=>handleAddToCart(e, ascii)}>Add to cart</Button>
                              <p className="font-italic"> 
                                 <small>{ display_date }</small>
                              </p>
                           </div>
                        </Col>
                     </Row> 
                  }
               </Col> )
            })
         }
   </React.Fragment> )
}

const mapStateToProps = ( state ) => ({
   cart : state.cart 
});
const mapDispatchToProps = (dispatch) => ({
   removeItemToCart  : (item) => dispatch( removeItemToCart(item) ),
   addItemToCart : (item) => dispatch( addItemToCart(item) ),
});
export default connect( mapStateToProps, mapDispatchToProps )(ProductCard)