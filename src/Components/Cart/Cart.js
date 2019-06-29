import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Button,
    Item,
    Image,
    Card,
    Message,
    Select,
    Statistic
} from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './Cart.scss';

const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const quantityOptions = quantitys.map(quantity => ({
    key: quantity,
    value: quantity,
    text: quantity
}));

const add = (a, b) => {
    return a + b;
};

class Cart extends Component {
    render() {
        const { cartItems, removeItem, changeItemQuantity } = this.props;

        if (localStorage.user)
            if (cartItems.length === 0)
                return (
                    <Message warning className='cart-check-message'>
                        Shopping cart is currently empty.
                        <br />
                        Add items to your cart and view them here before you
                        checkout.
                        <br />
                        <Link to={'/home'}>Continue shopping !</Link>
                    </Message>
                );
            else
                return (
                    <Card.Group centered>
                        <Card className='cart-items-container'>
                            <Card.Content>
                                <Card.Header content='Cart' />
                                <Item.Group divided unstackable>
                                    {cartItems.map(product => (
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
                                                        defaultValue={
                                                            product.quantity
                                                        }
                                                        options={
                                                            quantityOptions
                                                        }
                                                        onChange={(
                                                            event,
                                                            data
                                                        ) =>
                                                            changeItemQuantity(
                                                                data.value,
                                                                product
                                                            )
                                                        }
                                                    />
                                                    <Button
                                                        icon='trash alternate'
                                                        color='google plus'
                                                        onClick={() =>
                                                            removeItem(product)
                                                        }
                                                    />
                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>
                                    ))}
                                </Item.Group>
                            </Card.Content>
                        </Card>
                        <Card raised className='cart-check-container'>
                            <Card.Content className='cart-check-content'>
                                <Card.Header content='Total' />
                                <Statistic>
                                    <Statistic.Value>
                                        {cartItems
                                            .map(
                                                item =>
                                                    item.price * item.quantity
                                            )
                                            .reduce(add, 0)}
                                    </Statistic.Value>
                                    <Statistic.Label>EGP</Statistic.Label>
                                </Statistic>
                            </Card.Content>
                            <Button secondary size='large' content='Checkout' />
                        </Card>
                    </Card.Group>
                );
        else
            return (
                <Message warning className='cart-check-message'>
                    Already have an account ? <br />
                    <Link to={'/signin'}>Sign In !</Link> <br />
                    New Customer ? <br />
                    <Link to={'/signup'}>Create new Account !</Link>
                </Message>
            );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
