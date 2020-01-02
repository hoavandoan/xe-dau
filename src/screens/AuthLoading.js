import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Auth, Hub} from 'aws-amplify';
import {useStore} from '../store/useStore';

const AuthLoading = ({navigation}) => {
    const {dispatch} = useStore();

    Hub.listen('auth', ({payload: {event, data}}) => {
        switch (event) {
            case 'signIn':
                console.log('watch data', event);
                // dispatch({type: 'login', user, token: user.signInUserSession.accessToken.jwtToken});
                navigation.navigate('AppNavigation');
                break;
            case 'signOut':
                console.log('watch data sign out', event);
                navigation.navigate('AuthNavigation');
                break;
            default:
                break;
        }
    });

    useEffect(() => {
        Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(data=>{
            if (data) {
                console.log('get dataaaa',data)
                const {attributes,signInUserSession} = data
                dispatch({type: 'login', user: attributes, token: signInUserSession.accessToken.jwtToken});
                navigation.navigate('AppNavigation');
            }
        })
            .catch(e=>{
                navigation.navigate('AuthNavigation');
            })
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    );
};

export default AuthLoading;
