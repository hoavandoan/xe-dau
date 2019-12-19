import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from "react-navigation";
import {grey50, grey600} from "react-native-material-ui/src/styles/colors";
import {Feather, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import Search from "./Search";
import Card from "../components/Card";

const Home = () => {
    const [data] = React.useState([
        {
            carOwner: 'Long Hải',
            phone: '090132132545',
            address: 'Nga bach, Nga Son',
            timeStart: '20191212',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        },
        {
            carOwner: 'Dậu',
            phone: '090132132545',
            address: 'Nga Thach, Nga Son',
            timeStart: '20191212',
            image: 'https://limousinevn.vn/wp-content/uploads/2018/01/phuong-nguyen-limousine.jpg'
        },
        {
            carOwner: 'Nham',
            phone: '090132132545',
            address: 'Thi Tran, Nga Son',
            timeStart: '20191212',
            image: 'http://xedulich.danang.vn/public/thue-xe-du-lich-24-cho-da-nang/dich-vu-thue-xe-du-lich-24-cho-gia-re-tai-da-nang.jpg'
        },
        {
            carOwner: 'Tien Tien',
            phone: '090132132545',
            address: 'Nga Yen, Nga Son',
            timeStart: '20191212',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        },
        {
            carOwner: 'Tien Tien',
            phone: '090132132545',
            address: 'Nga Yen, Nga Son',
            timeStart: '20191212',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        }
    ])
    const renderItem = ({item, index}) => {
        return (
            <Card key={index}>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                            source={{uri: item.image}}
                        />
                    </View>
                    <View style={[styles.infoCar, {flex: 1}]}>
                        <View style={{flex: 2, marginLeft: 15}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.carOwner}</Text>
                            <Text style={{fontSize: 14, color: grey600}}>{item.address}</Text>
                        </View>
                        <View style={{flex: 3, marginLeft: 15, backgroundColor: grey50}}>

                        </View>
                        <View style={styles.phone}>
                            <Feather name="phone-call" size={16} color="black"/>
                            <Text> {item.phone}</Text>
                        </View>
                    </View>
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
};

export default Home
Home.navigationOptions = ({navigation}) => ({
    headerTintColor: 'rgba(255,255,255,0.8)',
    headerTitle: 'Nhà xe',
    headerBackground: (
        <LinearGradient
            colors={['#4cbdd7', '#3378C3']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={{flex: 1}}
        />
    ),
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name="ios-search" size={25} color="white"/>
        </TouchableOpacity>
    ),
    headerRightContainerStyle: {
        paddingRight: 10
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row'
    },
    cardImage: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoCar: {
        width: '65%',
        height: '100%',
    },
    phone: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});
