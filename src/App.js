import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import Header from './components/header/header'
import  { auth, createUserProfileDocument } from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {
    // constructor (props) {
    //     super(props);

    //     this.state = {
    //         currentUser: null
    //     }
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser }  = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {  
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        })
                    });
                    // console.log(this.state);
                
            } else {
                setCurrentUser(userAuth);
            }
            // createUserProfileDocument(userAuth);
            // this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }

}

const mapDispatchToProps = () => ({
    setCurrentUser: user => dispatchEvent(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps )(App);