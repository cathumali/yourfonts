import React from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { data } = props.cart || {};
    return (<>
        <div className="d-flex align-items-end flex-column mt-4">   
            <div className="svg-cart">
                <Label color='yellow' circular > { data?.length }</Label>
                <Link to='/cart'>
                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </Link>
            </div>
        </div>
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <h1 className="m-0">YF</h1>
            <span className="fs-4">YourFonts</span>
            </a>
        </header>
    </>)
}

const mapStateToProps = ( state ) => ({
    cart : state.cart_data 
}); 
export default connect( mapStateToProps, null )(Header)