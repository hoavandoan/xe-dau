import React from 'react';
import {View, Text, Button} from "react-native";
// import {createStackNavigator} from "@react-navigation/stack";
// import {NavigationNativeContainer,} from "@react-navigation/native";
import {
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {colors} from "../configs/theme";
import {Auth} from "aws-amplify";
import {useStore} from "../store/useStore";


const Account = () => {
    const {state} = useStore()
    console.log(state)
    return (
        <View>
            <Text>{state.user.name}</Text>
            <Button title='Log out' onPress={()=>Auth.signOut()}/>
        </View>
    );
};

const AccountStack = createStackNavigator({Account})
export default createAppContainer(AccountStack)

Account.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.account,
    },
}
//
// const Account = createStackNavigator()
//
// const AccountScreen = () => {
//     return (
//         <View>
//             <Text>Account</Text>
//         </View>
//     )
// }
// const AccountStackScreen = () => {
//     return (
//         <NavigationNativeContainer>
//             <Account.Navigator>
//                 <Account.Screen
//                     name="Account"
//                     component={AccountScreen}
//                     options={{
//                         headerTitle: 'Account',
//                         headerTintColor: 'black',
//                         headerStyle: {
//                             backgroundColor:'#ffc107'
//                         }
//
//                     }}
//                 />
//             </Account.Navigator>
//         </NavigationNativeContainer>
//     );
// };

// export default AccountStackScreen;
