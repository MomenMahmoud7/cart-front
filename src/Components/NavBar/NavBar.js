import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Connect';
import { Menu, Dropdown, Responsive, Segment, Button, Message, Image, } from 'semantic-ui-react';
import logo from '../../logo.svg';

const dropSignIn = (
    <Segment textAlign='center' style={{ border:'0', boxShadow:'none'}}>
        <Button primary fluid as={Link} to='signin'>
            Sign in
        </Button>
        <Message>
            <div>New Customer ?</div>
            <Link to='signup'>Create new Account</Link>
        </Message>
    </Segment>
)

class Navbar extends Component {

    render() {

        const {
            products,
            showSidebar,
        } = this.props;

        return (
            <Menu 
                fixed='top'
                borderless
                inverted
                style={{
                    height:'64px',
                    padding:'12px',
                    margin:'0',
                    paddingLeft:'10%',
                    paddingRight:'10%',
                    backgroundColor: 'rgb(40, 40, 40)',
                    boxShadow:'0 0 8px rgb(40, 40, 40, 0.8)'
                }}
            >
                <Menu.Item icon='bars' onClick={showSidebar} style={{ margin:'0' }}/>
                <Menu.Item as={Link} to='/home'>
                    <Image src={logo} style={{ width:'64px' }}/>
                </Menu.Item>
                <Responsive as={Menu.Menu} minWidth='480'>
                    {products.map((category) => 
                        <Dropdown key={category.id} item text={category.name} simple>
                            <Dropdown.Menu>
                                { category.subCat.map((subCategory) => 
                                    <Dropdown.Item
                                        as={Link}
                                        to={subCategory.name}
                                        key={subCategory.id}
                                        style={{color:'white'}}
                                    >
                                        {subCategory.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Responsive>
                <Menu.Menu position='right'>
                    <Dropdown
                        item
                        icon='user'
                        simple
                        direction='left'
                    >
                        <Dropdown.Menu>
                            {dropSignIn}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item icon='cart' as={Link} to='/cart'></Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);