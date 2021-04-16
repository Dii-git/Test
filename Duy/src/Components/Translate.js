import React, {useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    Button, 
    TouchableOpacity, 
    Alert, 
    ScrollView
} from 'react-native';
// Import Style
import {StylesHome} from '../Assets/styles';
// Import Voice Lib
import Voice from 'react-native-voice';
// Import Icons
import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'
import {Picker} from '@react-native-picker/picker';

export default function TranslateScreen() { 

    const[selectedValue,setSelectedValue] = useState("Việt");

    return(
        <View style={StylesHome.bodyContainer}>
            <View style={StylesHome.conservationContainer}>
                {/*  */}
                <View style={StylesHome.displayContainer}>
                    <ScrollView>
                        {/*  */}
                        <View style={StylesHome.titleContainer}>
                            <Text>Việt</Text>
                            <Text style={{marginHorizontal:5}}>-</Text>
                            <Text>Anh</Text>
                        </View>
                        {/*  */}
                        <View style={StylesHome.translateContainer}>
                            <View style={StylesHome.translateContainerLeft}>
                                <TouchableOpacity style={StylesHome.translateLanguage} activeOpacity={0.8}>
                                    <Text>Xin chào!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesHome.translateOther} activeOpacity={0.8}>
                                    <Text>Hi!</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={StylesHome.translateContainerRight}>
                                <TouchableOpacity style={StylesHome.translateLanguageRight} activeOpacity={0.8}>
                                    <Text>Hello!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesHome.translateOtherRight} activeOpacity={0.8}>
                                    <Text>Xin chào!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={StylesHome.recordContainer} >
                <View>
                    <TouchableOpacity style={StylesHome.recordIcon} activeOpacity={0.8}>
                        <Other name="microphone" size={35} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Picker
                        selectedValue={selectedValue}
                        style={StylesHome.pickerContainer}
                        activeOpacity={0.6}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Việt" value="vie"/>
                        <Picker.Item label="Anh" value="en" />
                        <Picker.Item label="Hàn" value="korea" />
                        <Picker.Item label="Pháp" value="france" />
                    </Picker>
                </View>

                <View>
                    <TouchableOpacity style={StylesHome.reverseIcon} activeOpacity={0.8}>
                        <Other name="microphone" size={35} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Picker
                        style={{ height: 50, width: 110, color:'#3DD4CB'}}
                    >
                        <Picker.Item label="Anh" value="en" />
                        <Picker.Item label="Việt" value="vie" />
                        <Picker.Item label="Hàn" value="korea" />
                        <Picker.Item label="Pháp" value="france" />
                    </Picker>
                </View>
            </View>
            
        </View>
    );
};
