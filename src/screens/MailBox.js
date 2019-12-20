import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hộp thư góp ý</Text>
        </View>
    );
}

function MailBox() {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'Mail Box',
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#00cc00"
                            />
                        ),
                        headerTintColor: 'black',
                        headerStyle: {
                            backgroundColor:'#226557'
                        }

                    }}
                />
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}

export default MailBox;
