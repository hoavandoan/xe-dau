import React,{useEffect} from 'react';
import {View} from 'react-native';
import Navigation from "./src/components/Navigation";

export default function App() {

    return (
            <View style={{flex: 1}}>
                <Navigation/>
            </View>

    );
}
