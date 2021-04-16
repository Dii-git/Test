import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';


export default function SettingScreen() {
    return(
        <View style={styles.sectionContainer}>
            <Text>Setting Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
  });