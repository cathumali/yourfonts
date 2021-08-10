import React, { Component, useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SortAsciiFacesBy from './SortAsciiFacesBy';
import _ from 'lodash';

const apiGetsService =  async (page) => {
   const requestHeaders= {
      method : 'GET',
      headers: { 
         'Content-Type': 'application/json', 
         'Accept': 'application/json' 
      }
   } 
   const res = await fetch(`../json/ascii.json?page=${page}`, requestHeaders).then(response => response.json());
   return res;
 }

class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
         ascii_data : [],
         loading : false,
         loading_more: false,
         page: 0,
         nextPage: 1,
         _start : 0,
         _end : 200,
         chunks : 200,
         remaining: 0,
         firstload : false,
         nextAsciiData : {
            ascii_data: [],
            total: 0,
            ascii_data: 0,
            page: 0,
            nextPage: 0,
            _start : 0,
            _end : 0,
         }
      }
   }

   advancedFetchNextPage = async () => {
      this.setState({ loading_more : true });

      const count = this.state.remaining > 1 ;
      const { ascii_data } = this.state.nextAsciiData || {};
      console.log(ascii_data)
      
      if( count ) {
         
         if( ascii_data) {

            if( !ascii_data.length ) {

               // console.log('advancedFetchNextPage')
               const { _end, chunks, page, nextPage } = this.state || {};         
               const data = await apiGetsService( this.state.nextPage );
      
               if (data ) {
                  this.setState({
                     loading_more : false,
                     nextAsciiData : {
                        total: data.length,
                        ascii_data: data.splice( parseInt( 0 ), parseInt( _end + chunks ) ),
                        page: page + 1,
                        nextPage: nextPage + 1,
                        _start : _end + 1,
                        _end : _end + chunks,
                     }
                  })
               }
            }
         }
      } 
   }
   
   processData = ( data, intialLoad = false ) => { 
      const { _start, _end, page, nextPage, } = this.state || {}; 
      const total = data.length; 
      this.setState({
         all_data: data,
         total: total,
         remaining: total - _end,
         ascii_data: data.splice( parseInt(_start), parseInt( _end ) ),
         loading:  false,
         loading_more: false,
         page: page + 1,
         nextPage: nextPage + 1, 

      } ,  this.advancedFetchNextPage ); 
   }

   fetchInitialData = async ( intialLoad=false ) => {
      if(intialLoad) {
         this.setState({  loading : true, scrolled: true });
      }
      const res = await apiGetsService( this.state.nextPage );
      this.processData(res, intialLoad);
   }

   loadMoreFonts = () => {
   } 

   onScroll = () => {
      this.setState({ scrolled : true });
      if( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)  
            &&  document.getElementsByClassName('loading_container').length
      ){  
         this.setState({ 
            scrolled: true, 
            loading : false,
            loading_more: true
         });
         setTimeout(() => {
            const { ascii_data } = this.state.nextAsciiData || {};
            if( ascii_data.length && this.state.scrolled ) {
               this.setState({ 
                  ...this.state.nextAsciiData,
                  scrolled: false,
                  ascii_data: ascii_data,
                  nextAsciiData: {},
                  loading_more: false,
         
               },() => { 
                  this.advancedFetchNextPage()
               });  
            }  
         }, 800);         
      } 
   }   
   

   componentDidMount = () => {
      // console.log(this.state)
      this.fetchInitialData( true );
      document.addEventListener('scroll', this.onScroll, false );
      window.addEventListener('scroll', this.onScroll, false )
   }


   sortByFilterHandle = ( data ) => {
      // const ascii_data = _.sortBy(this.state.ascii_data, ['sort_by']);
      console.log( data.name, data.value)
      const ascii_data = _.orderBy(this.state.ascii_data, [data.name], [data.value]);
      this.setState({ ascii_data })
   }

   componentWillUnmount = () => {
      document.removeEventListener('scroll', this.onScroll, false )
      window.removeEventListener('scroll', this.onScroll, false )
   }
   


   render() {
      const { loading, loading_more, nextAsciiData, ascii_data } = this.state || {}; 
      return (<main>
            <h1>Shop for fonts</h1>
            <p className="fs-5 col-md-8">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
            </p>

            <Row className="row g-5 mb-4">
               <Col>
                  <SortAsciiFacesBy sortByFilterHandle={this.sortByFilterHandle} />
               </Col>
            </Row>
   
            <Row className="row g-5"> 
               <ProductCard loading={loading} ascii_data={ascii_data} />
            </Row>

            { !loading && 
               <Row className="row g-5 text-center"> 
                  {  loading_more ? 
                     <Col>
                        <p className="mt-2">
                           <button className="btn btn-default" type="button" disabled>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                           {' '}Loading...
                           </button>
                        </p>
                     </Col> :
                     <Col className="loading_container hidden">Load more </Col>
                  }     
                  {/* <Col>~ end of catalogue ~</Col> */}
               </Row>
            }

         </main> )
   }
} 

export default Main;