import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import images from '../Constants/image'
// const Logo = require('../Assets/images/Logo.png');

export default function WelcomeScreen() {
    return(
        <View style={styles.sectionContainer}>
            <View style={styles.logoContainer}>
                <Image source={images.Logo} style={styles.logoImg}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor:'#fff',
        flex:1,
    },
    logoContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logoImg: {
        width:370,
        height:270,
    },
    logoTxt: {
        textAlign:'center',
        marginBottom:30,
        fontStyle:'italic',
        fontWeight:'600',
    },
  });