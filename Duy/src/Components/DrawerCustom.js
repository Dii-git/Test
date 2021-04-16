import React, {useState} from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { View, Text, Image} from 'react-native';

// Styles
import {StylesDrawer} from '../Assets/styles'
//Constants
import images from '../Constants/image';

import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'

export default function SideBar({progress, ...props}) {
    const transX = Animated.interpolateNode(progress,{
        inputRange: [0,1],
        outputRange: [-100,1],
    })
    return (
        <View style={StylesDrawer.drawerContainer}>
            <View style={StylesDrawer.drawerImgContainer}>
                <Animated.View style = {{transform: [{translateX: transX}]}}>
                    <Image source={images.Logo} style={StylesDrawer.drawerImg}/>
                </Animated.View>
            </View>
            <View style={StylesDrawer.drawerLine}></View>
            <DrawerContentScrollView {...props}>
                <Animated.View style = {{transform: [{translateX: transX}]}}>
                    <DrawerItem
                        label="Trang chủ"
                        icon = {({color,size}) => (
                            <Icons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        onPress={()=> props.navigation.navigate('Home')}
                    />
                    <DrawerItem
                        label="Cài đặt"
                        icon = {({color,size}) => (
                            <Icons
                                name="gear"
                                color={color}
                                size={size}
                            />
                        )}
                        onPress={()=> props.navigation.navigate('Setting')}
                    />
                </Animated.View>
            </DrawerContentScrollView>
        </View>
    );
}