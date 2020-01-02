import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Hub,Auth} from 'aws-amplify';
import {useStore} from "../store/useStore";

const AuthLoading = ({navigation}) => {
    const {dispatch} = useStore()
    Hub.listen('auth', ({payload: {event, data}}) => {
        switch (event) {
            case 'signIn':
                console.log('watch data', data);
                // dispatch({type: 'login', user, token: user.signInUserSession.accessToken.jwtToken});
                navigation.navigate('AppNavigation');
                break;
            case 'signOut':
                console.log('watch data sign out', data);
                dispatch({type: 'login', user: {}, });
                navigation.navigate('AuthNavigation');
                break;
            default:
                break;
        }
    });

    useEffect(()=>{
        Auth.currentAuthenticatedUser().then(user => {
            console.log('user loading',user);
            navigation.navigate('AppNavigation');
        }).catch(e => {
            console.log(e);
            navigation.navigate('AuthNavigation');
        });
    },[])
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    );
};

export default AuthLoading;
