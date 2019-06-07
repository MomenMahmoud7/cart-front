import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import { Menu, Dropdown, Responsive, Button, Message, Image, Icon, Transition, Label, Popup } from 'semantic-ui-react';
import logo from '../../../logo.svg';
import './NavBar.scss';


class Navbar extends Component {

    render() {

        const {
            products,
            signedIn,
            signOut,
            showSidebar,
            sidebarCollapsed,
            cartItems,
            itemStatus,
        } = this.props;

        const dropSignIn = (
            <div>
                <Dropdown.Item>
                    <Button primary fluid as={Link} to='/signin'>
                        Sign in
                    </Button>
                    <Message>
                        <div>New Customer ?</div>
                        <Link to='/signup'>Create new Account</Link>
                    </Message>
                </Dropdown.Item>
            </div>
        )

        const dropSignedIn = (
            <div>
                <Dropdown.Item as={Link} to='/user'>My Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user'>My Addresses</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user'>Account Settings</Dropdown.Item>
                <Dropdown.Item as={Link} to='/home' onClick={signOut}>Sign Out</Dropdown.Item>
            </div>
        )

        return (
            <div>
                <Menu
                    borderless
                    inverted
                    fixed='top'
                    className='navbar-container'
                >
                    <Menu.Item onClick={showSidebar}>
                        <Icon name='bars' />
                    </Menu.Item>
                    <Menu.Item as={Link} to='/home'>
                        <Image src={logo} />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown
                            item
                            icon='user'
                            simple
                            closeOnChange
                            direction='left'
                        >
                            <Dropdown.Menu>
                                {signedIn ? dropSignedIn : dropSignIn}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Popup open={itemStatus} position='bottom center' basic trigger={
                            <Menu.Item as={Link} to='/cart'>
                                <Icon name='cart' />
                                <Label color='red' >
                                    {cartItems.reduce((prev, cur) => prev + cur.quantity, 0)}
                                </Label>
                            </Menu.Item>
                        }>
                            Item Added to Cart <br/>
                            <Link to='/cart'>Check your Cart</Link>
                        </Popup>
                    </Menu.Menu>
                </Menu>
                <Transition.Group animation={'slide down'} duration={500}>
                    {!sidebarCollapsed &&
                        <Responsive minWidth='480'>
                            <Menu borderless inverted className='navbar-menu-container'>
                                {products.map((category) =>
                                    <Dropdown
                                        key={category.id}
                                        item
                                        text={category.name}
                                        simple
                                        closeOnChange
                                        direction='right'
                                    >
                                        <Dropdown.Menu >
                                            <div>
                                                {category.subCat.map((subCategory) =>
                                                    <Dropdown.Item
                                                        as={Link}
                                                        to={`/${category.name}/${subCategory.name}`}
                                                        key={subCategory.id}
                                                    >
                                                        {subCategory.name}
                                                    </Dropdown.Item>
                                                )}
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}
                            </Menu>
                        </Responsive>
                    }
                </Transition.Group>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);