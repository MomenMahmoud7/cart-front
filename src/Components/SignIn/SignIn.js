import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Form, Message, Icon, Card } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './SignIn.scss'

class SignIn extends Component {

    render() {

        const {
            signinEmail,
            signinEmailError,
            signinPassword,
            signinPasswordError,
            signinError,
            signinEmailOnChange,
            signinPasswordOnChange,
            keepSignedInOnChange,
            signin,
        } = this.props;

        return (
            <Card raised fluid className='signin-card' >
                <Form error={signinError}>
                    <Form.Input
                        error={signinEmailError}
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        onChange={signinEmailOnChange}
                    />
                    <Form.Input
                        error={signinPasswordError}
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={signinPasswordOnChange}
                    />
                    <Form.Checkbox inline
                        label='Keep me signed in'
                        onChange={keepSignedInOnChange} />
                    <Button
                        icon
                        fluid
                        labelPosition='left'
                        color='blue'
                        onClick={() => signin(signinEmail, signinPassword)}
                    >
                        <Icon name='lock' />
                        Sign in
                    </Button>
                    <Button
                        icon
                        fluid
                        labelPosition='left'
                        href='/forget_password'
                        className='signin-card-button'
                    >
                        <Icon name='redo' />
                        Forget Password
                    </Button>
                    <Message error >
                        No account associated to email address
                    </Message>
                    <Message>
                        New Customer ?&nbsp;&nbsp;&nbsp;
                        <Link to='/signup'>Create new Account</Link>
                    </Message>
                </Form>
            </Card>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);