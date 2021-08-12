import React from 'react';
import { connect } from 'react-redux'; 
import { removeItemToCart } from '../redux/actions';
import { Header, Table } from 'semantic-ui-react'
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const { data } = props.cart || {};
    console.log(props.cart)
    return (<React.Fragment key={props.location.key}> 

        <Table celled padded>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell singleLine>Ascii Face</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Size</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>

            { data?.length &&
                data.map( (item, key) => {
                    return(<>
                    
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h2' textAlign='center'>
                                { item.ascii}
                            </Header>
                            </Table.Cell>
                            <Table.Cell singleLine>{ item.words?.join(',  ') }</Table.Cell>
                            <Table.Cell>
                                {item.size}px
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                            ${ item.price }
                            </Table.Cell>
                            <Table.Cell>
                                <Button> Remove Item</Button>
                            </Table.Cell>
                        </Table.Row> 
                    </>)
                })}
            </Table.Body>
        </Table>

    </React.Fragment> );
}
 
const mapStateToProps = ( state ) => ({
    cart : state.cart 
 });
 const mapDispatchToProps = (dispatch) => ({
    removeItemToCart  : (item) => dispatch( removeItemToCart(item) ),
 });
 export default connect( mapStateToProps, mapDispatchToProps )(Cart)