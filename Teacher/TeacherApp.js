import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabOptions, } from 'react-navigation-material-bottom-tabs';  // It's a bit different from the tutorial
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CreateEvents from './components/navigation/CreateEvents.js';
import Home from './components/navigation/Home.js';
import Upload from './components/navigation/Upload.js';
import Settings from './components/navigation/Settings.js';


const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    CreateEvents:{
      screen: CreateEvents,
      navigationOptions: {
        tabBarIcon: tabBarIcon('event')
      }
    },
    Home:{
      screen: Home,
      navigationOptions: {
        tabBarIcon: tabBarIcon('home')
      }
    },
    Upload:{
      screen: Upload,
      navigationOptions: {
        tabBarIcon: tabBarIcon('file-upload')
      }
    },
    Settings:{
      screen: Settings,
      navigationOptions: {
        tabBarIcon: tabBarIcon('settings')
      }
    },
  },
  {
    shifting: false,
    activeColor: '#6200ee', // Color of icons at bottom nav bar when clicked
    inactiveColor: '#000',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);

export default createAppContainer(BottomTabMaterial); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
