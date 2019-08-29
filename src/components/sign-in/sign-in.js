import React from 'react';

import FormInput from '../form-input/form-input'

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    
    handleSubmit = event => {
        event.preventDefault();

        this.ListeningStateChangedEvent({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.ListeningStateChangedEvent({ [name]: value })
    } 
    

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} handleChange={this.handleChange}  label='email' required />
                    <label>Email</label>
                    <FormInput name='password' type='password' value={this.state.email} handleChange={this.handleChange} label='password' required />
                    <label>password</label>

                    <input type='Submit' value='submit Form' />
                </form>
            </div>
        )
    }

}

export default SignIn;