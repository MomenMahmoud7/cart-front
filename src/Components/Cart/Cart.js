import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Item, Input, Segment, } from 'semantic-ui-react'
import { mapStateToProps, mapDispatchToProps } from '../../Connect';


class Cart extends Component {
    
    render() {
      	const {
			cartItems,
            addItem,
            removeItem
		} = this.props
        return (
            <Segment basic>
                <Item.Group divided unstackable style={{width:'320px', marginLeft:'auto', marginRight:'auto'}}>
                    {cartItems.map((product) =>
                        <Item key={product.id}>
                            <Item.Image size='small' src={product.image}></Item.Image>
                            <Item.Content verticalAlign='middle' style={{textAlign:'center'}}>
                                <Item.Header>{product.name}</Item.Header>
                                <Item.Extra>
                                    <Button icon='add' onClick={()=> addItem(product)}></Button>
                                    <Input >{product.quantity}</Input>
                                    <Button icon='remove' onClick={()=> removeItem(product)}></Button>                                    
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    )}
                </Item.Group>                
            </Segment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);