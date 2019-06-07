import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Item, Image, Card, Message, Select, Statistic } from 'semantic-ui-react'
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './Cart.scss';


const quantityOptions = [
    { key: 1, text: 1, value: 1 },
    { key: 2, text: 2, value: 2 },
    { key: 3, text: 3, value: 3 },
    { key: 4, text: 4, value: 4 },
    { key: 5, text: 5, value: 5 },
    { key: 6, text: 6, value: 6 },
    { key: 7, text: 7, value: 7 },
    { key: 8, text: 8, value: 8 },
    { key: 9, text: 9, value: 9 },
    { key: 10, text: 10, value: 10 },
    { key: 11, text: 11, value: 11 },
    { key2: 1, text: 12, value: 12 },
]

const add = (x, y) => {
    return x + y;
}

class Cart extends Component {

    render() {

        const {
            cartItems,
            removeItem,
            changeItemQuantity
        } = this.props
        
        if (localStorage.user)
            if (cartItems.length === 0)
                return (
                    <Message
                        warning
                        className='cart-check-message'
                    >
                        Shopping cart is currently empty.<br />
                        Add items to your cart and view them here before you checkout.<br />
                        <Link to={'/home'}>Continue shopping !</Link>
                    </Message>
                )
            else
                return (
                    <Card.Group centered >
                        <Card className='cart-items-container'>
                            <Card.Content>
                                <Card.Header content='Cart' />
                                <Item.Group
                                    divided
                                    unstackable
                                >
                                    {cartItems.map((product) =>
                                        <Item key={product.id}>
                                            <Image
                                                src={product.image}
                                                className='cart-item-image'
                                            />
                                            <Item.Content
                                                verticalAlign='middle'
                                                className='cart-item-content'
                                            >
                                                {product.name}
                                                <Item.Extra>
                                                    <Select
                                                        defaultValue={product.quantity}
                                                        options={quantityOptions}
                                                        onChange={(event, data) =>
                                                            changeItemQuantity(data.value, product)
                                                        }
                                                    />
                                                    <Button
                                                        icon='trash alternate'
                                                        color='google plus'
                                                        onClick={() => removeItem(product)}
                                                    />
                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>
                                    )}
                                </Item.Group>
                            </Card.Content>
                        </Card>
                        <Card raised className='cart-check-container'>
                            <Card.Content className='cart-check-content'>
                                <Card.Header content='Total' />
                                <Statistic>
                                    <Statistic.Value>{cartItems.map(item => item.price * item.quantity).reduce(add, 0)}</Statistic.Value>
                                    <Statistic.Label>EGP</Statistic.Label>
                                </Statistic>
                            </Card.Content>
                            <Button secondary size='large' content='Checkout' />
                        </Card>
                    </Card.Group>
                )
        else
            return (
                <Message
                    warning
                    className='cart-check-message'
                >
                    Already have an account ? <br />
                    <Link to={'/signin'}>Sign In !</Link> <br />
                    New Customer ? <br />
                    <Link to={'/signup'}>Create new Account !</Link>
                </Message>
            )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);