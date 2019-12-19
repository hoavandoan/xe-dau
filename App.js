import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {createAppContainer, FlatList} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Search from "./src/screens/Search";
import Card from "./src/components/Card";
import {grey50, red100} from "react-native-material-ui/src/styles/colors";
import {Subheader} from "react-native-material-ui";

function App() {
    const [data,setData] = useState([
        {
            carOwner: 'Long Hải',
            phone: '090132132545',
            timeStart: '20191212',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        },
        {
            carOwner: 'Dậu',
            phone: '090132132545',
            timeStart: '20191212',
            image: ''
        },
        {
          carOwner: 'Nham',
            phone: '090132132545',
            timeStart: '20191212',
            image: ''
        },
        {
            carOwner: 'Tien Tien',
            phone: '090132132545',
            timeStart: '20191212',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        }
    ])
    const renderItem = ({item,index})=>{
        return(
            <Card key={index}>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{ width: '70%', height: '70%' }}
                            source={{ uri: item.image}}
                        />
                    </View>
                    <View style={{width: '65%', height: '100%', backgroundColor: '#dddddd'}}></View>
                </View>

            </Card>
            )
    }
  return (
      <View style={styles.container}>
          <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
          />
      </View>

  );
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
    },
    Search: {
        screen: Search
    }

});
App.navigationOptions =({navigation})=>({
    headerTintColor: 'rgba(255,255,255,0.8)',
    headerTitle: 'Nhà xe',
    headerBackground: (
        <LinearGradient
            colors={['#4cbdd7', '#3378C3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        />
    ),
    headerRight: (
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Ionicons name="ios-search" size={25} color="white"/>
        </TouchableOpacity>
    ),
    headerRightContainerStyle: {
        paddingRight: 10
    },
})
export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    card:{
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row'
    },
    cardImage:{
        width: '35%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'
    }
});
