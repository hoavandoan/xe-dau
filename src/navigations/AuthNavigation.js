import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import SignIn from "../components/SignIn";
import SignUp from "../screens/SignUp";
import Verify from "../screens/Verify";
import PasswordRecovery from "../screens/PasswordRecovery";

const AuthNavigation = createSwitchNavigator({
    SignIn: SignIn,
    SignUp: SignUp,
    Verify: Verify,
    PasswordRecovery: PasswordRecovery
},{
    initialRouteName: 'SignIn',
    headerMode: 'none'
})

const AuthNavigator = createAppContainer(AuthNavigation)
export default AuthNavigator
