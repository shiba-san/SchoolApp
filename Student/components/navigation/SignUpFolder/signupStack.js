import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUpList from './SignUpList';
import SignUpPage from './SignUpPage';


const screens = {
    SignUpList: {
        screen: SignUpList,
        navigationOptions: {
            title: 'Sign Up Now!',
            // headerStyle: { backgroundColor: '#333'}
        }
    },

    SignUpPage: {
        screen: SignUpPage,
        navigationOptions: {
            title: 'Sign Up Page',
            headerMode: false,
            // headerStyle: { backgroundColor: '#eee'}
        }
    }
}

const SignUpStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 50 }
    }
});

export default createAppContainer(SignUpStack);