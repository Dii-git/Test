import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
// Package
import Modal from 'react-native-modal';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
// Icon Library
import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'
import {Picker} from '@react-native-picker/picker';

// Styles
import {StylesHome} from '../Assets/styles'

//Constants
import images from '../Constants/image';

export default function Header(){

    const [modalOpen, setModalOpen] = useState(false);

    const clear = () => {
        Alert.alert("Your conservation is cleared!");
    };

    // Open Drawer
    const Menu = () => 
    { 
        const navigation = useNavigation();
        return(
            <TouchableOpacity 
                style={StylesHome.headerTxtBox}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Image source={images.Logo} style={StylesHome.logoHomeImg}/>
            </TouchableOpacity>
        );
    }

    return(
        <View style={StylesHome.headerContainer}>
            <View style={StylesHome.headerMain}>
                <Menu/>
                <TouchableOpacity 
                    onPress={() => setModalOpen(true)} 
                    style={StylesHome.IconClick} 
                    activeOpacity={0.6}
                >
                    <Guide name="info" size={26} style={StylesHome.infoIcon}/>
                    <Modal isVisible={modalOpen} animationIn="bounce">
                        <View style={StylesHome.modalContainer}>
                            <Icons 
                                name="window-close" 
                                size={26} 
                                style={StylesHome.modalIcon}
                                onPress={() => setModalOpen(false)}
                            />
                            <Text style={StylesHome.modalTitle}>Just Say c?? nh???ng g???</Text>
                            <View style={StylesHome.modalContext}>
                                <View style={StylesHome.modalImgContainer}>
                                    <Image source={images.Logo} style={StylesHome.modalImg}/>
                                </View>
                                <Text style={StylesHome.modalTxt}>---- X??a b??? ??i r??o c???n ng??n ng??? ----</Text>
                                <Text style={StylesHome.modalTxt}>---- T??i hi???u b???n v?? b???n c??ng hi???u t??i ----</Text>
                                <Text style={StylesHome.modalTxt}>C???m ??n b???n s??? d???ng ph???n m???m c???a ch??ng t??i</Text>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
                <TouchableOpacity onPress={clear} activeOpacity={0.8}>
                    <Icons name="trash" size={26} style={StylesHome.headerIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};