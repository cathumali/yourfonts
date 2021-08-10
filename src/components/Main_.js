import React, { Component, useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const debounce = (func, delay) => {
   let debounceTimer
   return function() {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
   }
}

class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
         asciimojis : [],
         loading : false,
         loading_more: false,
         page: 0,
         nextPage: 1,
         start : 0,
         end : 20,
         remaining: 0,
         firstload : false
      }
   }

   fetchCallBack = () => {
      // const count = this.state.total - this.state.remaining;
      if( this.state.remaining ) {
         this.setState({ loading_more : true });
         this.apiGetsService();
      }
   }
   
   processData = ( data ) => { 
      const { start, end, page, asciimojis, nextPage } = this.state || {};
      const chuncked_data =  data.splice( parseInt(start), parseInt(end) );
      const current_data = this.state.firstload ? chuncked_data :  [...asciimojis]
      setTimeout(() => {     
         this.setState({ 
            total: data.length,
            asciimojis: current_data,
            nextData: chuncked_data,
            // asciimojis : [ ...asciimojis, ...data.splice(parseInt(start), parseInt(end)) ],
            start : end + 1,
            end : end + 20,
            remaining: data.length - 20,
            page: page + 1,
            nextPage: nextPage+1,
            loading: false,
            loading_more : false,
            scrolled: false
         }, this.fetchCallBack );

      }, 5000);
   }

   apiGetsService =  async () => {
      const requestHeaders= {
         method : 'GET',
         headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json' 
         }
      } 
      const res = await fetch("../json/ascii.json", requestHeaders).then(response => response.json());
      this.processData(res)
   }

   getData = () => {
      this.setState({ 
         loading : true, 
         firstload: true,
         // scrolled: true, 
      });
      this.apiGetsService();
   }

   
   callDebounce = debounce(() => {
      if( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)  
          &&  document.getElementsByClassName('loading_container').length
      ){     
         console.log('time to load more');
         setTimeout(() => {     
            this.setState({ 
               scrolled: true,
               asciimojis: [...this.state.asciimojis, ...this.state.nextData],
               nextData: []
            });
         }, 5000);
      }
    },100);

   // onScroll = () => {
   //    this.setState({ loading_more : true });
   //    this.callDebounce();
   //    console.log(this.state)
   // }
   

   componentDidMount = () => {
      this.getData();
      document.addEventListener('scroll', this.onScroll, false );
      window.addEventListener('scroll', this.onScroll, false )
   }

   componentWillUnmount = () => {
      document.removeEventListener('scroll', this.onScroll, false )
      window.removeEventListener('scroll', this.onScroll, false )
   }


   render() {
      const { loading, loading_more, asciimojis } = this.state || {}; 
      return (<>       
         <main>
            <h1>Shop for fonts</h1>
            <p className="fs-5 col-md-8">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
   
            <Row className="row g-5"> 
               <ProductCard loading={loading} asciimojis={asciimojis} />
               { (asciimojis?.length && loading_more )&& 
                  <Col className="loading_container">Loading more... </Col> }

            </Row>
         </main> 
      </>)
   }
} 

export default Main;