import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Form, Message, Select } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../../Connect';

class SignUp extends Component {
    
    render() {
        const {
            signupEmailError,
            signupNameOnChange,
            signupPhoneOnChange ,
            signupPasswordOnChange ,
            signupConfirmPasswordOnChange,
            signupEmailOnChange ,
            signupAddressOnChange ,
            signupNationalIdOnChange,
            signupOnClick,
        } = this.props

        return (
            <Form 
                style={{ 
                    padding:'24px', 
                    maxWidth:'720px', 
                    minWidth:'360px', 
                    marginLeft:'auto', 
                    marginRight:'auto' 
                }}>
                <Form.Group widths='equal'>
                    <Form.Input 
                        label='Name' 
                        placeholder='Name' 
                        type='text'
                        onChange={signupNameOnChange}
                    />
                    <Form.Input 
                        label='Phone' 
                        placeholder='Phone' 
                        onChange={signupPhoneOnChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        label='Password'
                        type='password'
                        onChange={signupPasswordOnChange}
                    />
                    <Form.Input 
                        label='Confirm Password' 
                        type='password'
                        onChange={signupConfirmPasswordOnChange}
                    />
                </Form.Group>
                <Form.Input 
                    label='Email' 
                    placeholder='joe@schmoe.com'
                    onChange={signupEmailOnChange}
                    error={signupEmailError}
                />
                <Form.Input 
                    label='Address' 
                    placeholder='Address'
                    onChange={signupAddressOnChange}
                />
                <Form.Group widths='equal'>
                    <Form.Input 
                        control={Select} 
                        options={[
                            { key: 'b', text: 'Buyer', value: 'Buyer' },
                            { key: 's', text: 'Seller', value: 'Seller' },
                        ]}
                        label='Buyer/Seller' placeholder='Buyer/Seller' 
                    />
                    <Form.Input 
                        label='National ID' 
                        placeholder='National ID'
                        onChange={signupNationalIdOnChange}
                    />
                    <Form.Input label='Image'>
                        <Button 
                            as="label" 
                            htmlFor="file"
                            icon='angle up'
                            labelPosition='right' 
                            color='google plus'
                            content='Upload'
                        />
                        <input id="file" hidden type="file" />
                    </Form.Input>
                </Form.Group>
                <Form.Checkbox 
                    inline 
                    label='I agree to the terms and conditions' 
                />
                <Button 
                    icon='angle right'
                    labelPosition='right' 
                    color='blue'
                    content='Create account'
                    onClick={signupOnClick}
                />
                <Message
                    error
                    header='Action Forbidden'
                    content='You can only sign up for an account once with a given e-mail address.'
                />
                <Message>
                    Already have an account ? &nbsp;&nbsp;&nbsp; 
                    <Link to='/signin'>Sign in</Link> &nbsp;instead.
                </Message>
            </Form>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);