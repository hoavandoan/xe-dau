import {Auth} from "aws-amplify";

export const getInfoUser = (navigation,dispatch)=> {
    console.log('vao day')
    Auth.currentAuthenticatedUser({
        bypassCache: false
    }).then(data=>{
        if (data) {
            navigation.navigate('AppNavigation');
            const {attributes,signInUserSession} = data
            dispatch({type: 'login', user: attributes, token: signInUserSession.accessToken.jwtToken});
        }
    })
        .catch(e=>{
            dispatch({type: 'login', user: {}});
            navigation.navigate('AuthNavigation');
        })
}
