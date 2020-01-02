import React,{useEffect} from 'react';
import {View} from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
import ContainerNavigation from "./src/navigations/ContainerNavigation";
import { Linking } from 'expo';

Amplify.configure(config);

function App() {
    const prefix = Linking.makeUrl('/');
    return (
            <View style={{flex: 1}}>
                <ContainerNavigation uriPrefix={prefix} />
            </View>

    );
}
export default App
