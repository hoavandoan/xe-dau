import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoading from "../screens/AuthLoading";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";


const containerNavigation = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoading,
            path: 'loading'
        },
        AuthNavigation: {
            screen: AuthNavigation
        },
        AppNavigation: {
            screen: Navigation
        }
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

const AppContainerNavigator = createAppContainer(containerNavigation);

export default AppContainerNavigator;

