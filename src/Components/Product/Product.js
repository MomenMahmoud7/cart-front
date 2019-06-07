import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import { Button, Item, Header, Icon } from 'semantic-ui-react';
import './Product.scss';


class Product extends Component {

    render() {
        const {
            product,
            cartItems,
            addItem,
        } = this.props

        return (
            <Item.Group>
                <Item className='product-items-container'>
                    <Item.Image src={product.image} size='medium' />
                    <Item.Description>
                        <Header>{product.name}</Header><br />
                        {product.price} EGP<br /><br />
                        {product.description}
                    </Item.Description>
                    <Item.Content >
                        <Header>Check</Header><br /><br />
                        <Button
                            as={localStorage.user ? null : Link}
                            to='/signin'
                            secondary
                            onClick={() => {
                                if (cartItems.filter(item => item.id === product.id).length === 0)
                                    if (localStorage.user)
                                        addItem(product)
                            }
                            }
                            className='item-card-button'
                        >
                            <Icon name='shop' /> Add to Cart
                        </Button>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);