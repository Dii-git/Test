import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import HomeScreen from "../Screens/Home";

import SettingScreen from "../Screens/Setting";

import Icons from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated';

// import {image} from "../Constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor:'#A5A4AA',
        activeTintColor:'#F8C491',
        style:{
          borderTopWidth:0,
        }
      }}
    >
      <Tab.Screen 
        name = "Home"
        component={HomeScreen}
        options={{
          tabBarLabel:'Trang chủ',
          tabBarIcon:({color}) => (
            <Icons name="home" size={26} color={color}/>
          ), 
        }}
      />
      <Tab.Screen 
        name = "Setting"
        component={SettingScreen}
        options={{
          tabBarLabel:'Cài đặt',
          tabBarIcon:({color}) => (
            <Icons name="gear" size={26} color={color}/>
          ), 
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;
    