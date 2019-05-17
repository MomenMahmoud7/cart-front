import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Form, Message, Icon } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../../Connect';

class SignIn extends Component {
    
    render() {

        const { 
            signinEmailOnChange,
            signinPasswordOnChange,
            signinOnClick,
            signinEmailError, 
        } = this.props;

        return (
            <Form style={{ padding:'24px', width:'360px', marginLeft:'auto', marginRight:'auto' }}>
                <Form.Input 
                    error={signinEmailError}
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address'
                    onChange={signinEmailOnChange}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={signinPasswordOnChange}
                />
                <Form.Checkbox inline label='Keep me signed in.' />
                    <Button 
                        icon 
                        labelPosition='left' 
                        color='blue'
                        onClick={signinOnClick}
                    >
                        <Icon name='lock' />
                        Sign in
                    </Button>
                    <Button 
                        icon
                        floated='right'
                        labelPosition='left' 
                        href='/forget_password'
                    >
                        <Icon name='redo' />
                        Forget Password
                    </Button>
                <Message>
                    New Customer ?&nbsp;&nbsp;&nbsp;
                    <Link to='/signup'>Create new Account</Link>
                </Message>
            </Form>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);