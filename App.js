import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Settings from './Screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import {Platform} from 'react-native'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    Settings,
    navigationOptions: {title: 'Home'}
  },
  Detail: {
    screen: Detail,
    navigationOptions: {title: 'Detail'}
  },
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {title: 'Settings'}
  }
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
}, { 
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({ tintColor }) => {
      const {routeName } = navigation.state;

      let iconName;
      if(routeName === 'Home') {
        iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
      } else if (routeName === 'Settings') {
        iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
      }
      return <Ionicons name={iconName} size={20} color={tintColor} />
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#556'
    }
  })
})

export default createAppContainer(AppNavigator)