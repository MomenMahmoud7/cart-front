import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './Connect';
import './Account.scss'
import { Image, Item, Header } from 'semantic-ui-react';


class Account extends Component {

    render() {
        const {
            name,
            phone,
            email,
            address,
            userType,
            nationalID,
        } = this.props.userData
        return (
            <Item.Group>
                <Item className='product-items-container'>
                    {/* <Item.Image src={product.image} size='medium' /> */}
                    <Item.Description>
                        <Header>{name}</Header><br />
                        <div>{phone}{email}{address}{nationalID}</div>
                    </Item.Description>
                </Item>
            </Item.Group>
        );
    }
}

export default connect(mapStateToProps)(Account);