import React, {useState} from 'react';

import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';

// Components
import Header from '../Components/Header';
import TranslateScreen from '../Components/Translate';

// Styles
import {StylesHome} from '../Assets/styles'

export default function HomeScreen() {    
    return(
        <View style={StylesHome.sectionContainer}>
            {/* Header */}
            <Header/>
            {/* Body */}
            <TranslateScreen/>
        </View>
    );
};

