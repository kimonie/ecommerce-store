import React from 'react';

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
                    <input name='email' value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.email} onChange={this.handleChange}  required />
                    <label>password</label>

                    <input type='Submit' value='submit Form' />
                </form>
            </div>
        )
    }

}

export default SignIn;