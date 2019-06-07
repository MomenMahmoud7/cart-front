import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Form, Message, Select, Card } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './SignUp.scss'

class SignUp extends Component {

    render() {
        const {
            signupName,
            signupNameError,
            signupPhone,
            signupPhoneError,
            signupPassword,
            signupConfirmPassword,
            signupPasswordError,
            signupEmail,
            signupEmailError,
            signupAddress,
            signupAddressError,
            signupUserType,
            signupUserTypeError,
            signupNationalId,
            signupNationalIdError,
            signupTerms,
            signupTermsError,
            signupError,
            signupNameOnChange,
            signupPhoneOnChange,
            signupPasswordOnChange,
            signupConfirmPasswordOnChange,
            signupEmailOnChange,
            signupAddressOnChange,
            signupUserTypeOnChange,
            signupNationalIdOnChange,
            signupTermsOnChange,
            signupOnClick,
        } = this.props

        return (
            <Card raised fluid className='signup-card'>
                <Form error={signupError}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            error={signupNameError}
                            label='Name'
                            placeholder='Name'
                            type='text'
                            onChange={signupNameOnChange}
                        />
                        <Form.Input
                            error={signupPhoneError}
                            label='Phone'
                            placeholder='Phone'
                            onChange={signupPhoneOnChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            error={signupPasswordError}
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
                        error={signupEmailError}
                        label='Email'
                        placeholder='joe@schmoe.com'
                        onChange={signupEmailOnChange}
                    />
                    <Form.Input
                        error={signupAddressError}
                        label='Address'
                        placeholder='Address'
                        onChange={signupAddressOnChange}
                    />
                    <Form.Group widths='equal'>
                        <Form.Input
                            error={signupUserTypeError}
                            control={Select}
                            options={[
                                { key: 'b', text: 'Buyer', value: 'Buyer' },
                                { key: 's', text: 'Seller', value: 'Seller' },
                            ]}
                            label='Buyer/Seller'
                            onChange={(event, data) => signupUserTypeOnChange(data.value)}
                        />
                        <Form.Input
                            error={signupNationalIdError}
                            label='National ID'
                            placeholder='National ID'
                            onChange={signupNationalIdOnChange}
                        />
                        {/* <Form.Input label='Image'>
                            <Button
                                as="label"
                                htmlFor="file"
                                icon='angle up'
                                labelPosition='right'
                                color='google plus'
                                content='Upload'
                            />
                            <input
                                id="file"
                                hidden
                                type="file"
                                onChange={
                                    signupImageUpload
                                }
                            />
                        </Form.Input> */}
                    </Form.Group>
                    <Form.Checkbox
                        error={signupTermsError}
                        inline
                        label='I agree to the terms and conditions'
                        onChange={signupTermsOnChange}
                    />
                    <Button
                        icon='angle right'
                        labelPosition='right'
                        color='blue'
                        content='Create account'
                        onClick={() => signupOnClick(
                            signupName,
                            signupPhone,
                            signupPassword,
                            signupConfirmPassword,
                            signupEmail,
                            signupAddress,
                            signupUserType,
                            signupNationalId,
                            signupTerms,
                            signupError,
                        )}
                    />
                    <Message error >
                        You can only sign up for an account once with a given e-mail address.
                    </Message>
                    <Message>
                        Already have an account ? &nbsp;&nbsp;&nbsp;
                        <Link to='/signin'>Sign in</Link> &nbsp;instead.
                    </Message>
                </Form>
            </Card>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);