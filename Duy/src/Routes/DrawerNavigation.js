import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "../Screens/Home";
import SettingScreen from "../Screens/Setting";

import Icons from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated';

import SideBar from "../Components/DrawerCustom";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <SideBar {...props} />}
    >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default AppDrawer;
    