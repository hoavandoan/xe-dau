import React from 'react';
import CardView from 'react-native-cardview'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Card = ({children}) => {
    return (
        <CardView cardElevation={2}
                  cardMaxElevation={2}
                  style={styles.card}
        >
            {children}
        </CardView>
    );
};

export default Card;
const styles = StyleSheet.create({
    card:{
        margin:15,
        padding: 10,
        marginBottom:0,
        marginTop:0,
        flex: 1
    }
});
