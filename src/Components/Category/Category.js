import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Icon, Image, Modal, Header } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './Category.scss';

class Category extends Component {
    render() {
        const { category, subCategory, addItem, cartItems } = this.props;

        return (
            <Card.Group>
                {subCategory.products.map(product => (
                    <Card key={product.id} raised className='item-card'>
                        <Card.Content textAlign='center'>
                            <Modal
                                className='item-modal-container'
                                trigger={
                                    <Image
                                        src={product.image}
                                        className='item-card-image'
                                    />
                                }
                            >
                                <Modal.Header>{product.name}</Modal.Header>
                                <Modal.Content image>
                                    <Image src={product.image} />
                                    <Modal.Description>
                                        <Header>
                                            {product.price} &nbsp; EGP
                                        </Header>
                                        <p>{product.description}</p>
                                        <Link
                                            to={`/${category.name}/${
                                                subCategory.name
                                            }/${product.name}`}
                                        >
                                            VIEW FULL PRODUCT DETAILS
                                        </Link>
                                    </Modal.Description>
                                    <Modal.Content>
                                        <Header>Check</Header>
                                        <Button
                                            as={localStorage.user ? null : Link}
                                            to='/signin'
                                            secondary
                                            onClick={() => {
                                                if (
                                                    cartItems.filter(
                                                        item =>
                                                            item.id ===
                                                            product.id
                                                    ).length === 0
                                                )
                                                    if (localStorage.user)
                                                        addItem(product);
                                            }}
                                            className='item-card-button'
                                        >
                                            <Icon name='shop' /> Add to Cart
                                        </Button>
                                    </Modal.Content>
                                </Modal.Content>
                            </Modal>
                        </Card.Content>
                        <Card.Content className='item-card-content'>
                            <Link
                                to={`/${category.name}/${subCategory.name}/${
                                    product.name
                                }`}
                            >
                                {product.name}
                            </Link>
                        </Card.Content>
                        <Button
                            as={localStorage.user ? null : Link}
                            to='/signin'
                            secondary
                            animated='vertical'
                            size='large'
                            onClick={() => {
                                if (
                                    cartItems.filter(
                                        item => item.id === product.id
                                    ).length === 0
                                )
                                    if (localStorage.user) addItem(product);
                            }}
                            className='item-card-button'
                        >
                            <Button.Content hidden>
                                <Icon name='shop' /> Add to Cart
                            </Button.Content>
                            <Button.Content visible>
                                {product.price} &nbsp; EGP
                            </Button.Content>
                        </Button>
                    </Card>
                ))}
            </Card.Group>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
