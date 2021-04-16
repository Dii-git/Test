import React from 'react';
 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Tabs from './Routes/Tabs';
import AppDrawer from './Routes/DrawerNavigation';


import {Home, Welcome, Setting} from './Screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import HomeScreen from './Screens/Home';

const Stack = createStackNavigator();

const AppRouter = () => {
  const [isSplash , setIsSplash] = useState(true);
  setTimeout(()=>{
     setIsSplash(false)
  },3000);

  return ( 
   <NavigationContainer>
     <Stack.Navigator
       screenOptions = {{
         headerStyle: {backgroundColor:'wheat'},
         headerShown: false,
       }}
       initialRouteName="Welcome"
     >
       {
         isSplash ? 
         <Stack.Screen name = "Welcome" component={Welcome}/>
         :
         <Stack.Screen name = "Home" component={AppDrawer}/>
       }
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default AppRouter;
