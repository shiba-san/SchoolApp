import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import StudentApp from './Student/StudentApp';
import TeacherApp from './Teacher/TeacherApp';



const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'HomeScreen',
        }
    },

    StudentApp: {
        screen: StudentApp,
        navigationOptions: {
            title: 'STUDENT',        }
    },

    TeacherApp: {
        screen: TeacherApp,
        navigationOptions: {
            title: 'TEACHER',
        }
    }
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerTitleStyle: { fontSize: 15, color: '#f0e3ff' },
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#3282b8', height: 40},
        headerShown: false, // Hides the header
    }
});

export default createAppContainer(LoginStack);