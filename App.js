import React,{useEffect} from 'react';
import {View} from 'react-native';
import Amplify,{Cache} from 'aws-amplify';
import config from './aws-exports';
import ContainerNavigation from "./src/navigations/ContainerNavigation";
import {StoreProvider} from './src/store/useStore';
import { Linking } from 'expo';

Amplify.configure(config);

function App() {

    return (
            <StoreProvider style={{flex: 1}}>
                <ContainerNavigation/>
            </StoreProvider>

    );
}
export default App
