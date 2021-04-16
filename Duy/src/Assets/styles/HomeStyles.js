import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    sectionContainer: {
        flex:1,
    },
    // Header
    headerContainer: {
        borderWidth:1,
        borderColor:'#FFDCBA',
        backgroundColor: '#FFDCBA',
        paddingVertical:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    headerMain: {
        flexDirection:'row',
        paddingHorizontal:6,
    },
    headerTxtBox: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    logoHomeImg:{
        width:85,
        height:40,
        resizeMode:'cover',
        borderRadius:10,
    },
    headerText: {
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        textTransform:'uppercase',
        marginLeft:7,
    },
    IconClick:{
        marginLeft:177,
        flexDirection:'row',
    },
    infoIcon:{
        color:'#2a2a2a',
        paddingVertical:7,
        marginRight:15,
    },
    headerIcon: {
        backgroundColor:'#fff',
        color:'#F8C491',
        paddingHorizontal:10,
        paddingVertical:7,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    modalContainer:{
        flex:1,
        backgroundColor:'#FFE8D2',
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:20,  
    },
    modalTitle:{
        fontSize:20,
        fontWeight:'600',
        textAlign:'center',
        textTransform:'capitalize',
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
    },
    modalIcon:{
        color:'#fff',
    },
    modalImgContainer:{
        marginBottom:50,
    },
    modalImg:{
        width:250,
        height:100,
        resizeMode:'cover',
    },
    modalContext:{
        flex:1,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    modalTxt:{
        paddingHorizontal:20,
        paddingVertical:20,
        textAlign:'center',
    },
    pickerContainer:{
        width:110,
        height:50,
        color:'#F8C491',
    },
    // Body Container
    bodyContainer:
    {
        flex:1,
        backgroundColor:'#fff',
    },
    // ------------------
    recordContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "transparent",
        borderRadius:10,
        shadowColor: '#2a2a2a',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 3,
        flex:1,
        flexDirection:'row',
    },
    recordIcon:{
        borderWidth:1,
        borderColor:'#F8C491',
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:30,
        backgroundColor:'#FFDCBA',
        
    },
    txtTranslate:{
        textAlign:'center',
        fontSize:17,
        marginTop:7,
    },
    //-------------------
    reverseIcon:{
        borderWidth:1,
        borderColor:'#3DD4CB',
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:30,
        backgroundColor:'#3DD4CB',
    },

    // ConservationContainer
    conservationContainer:{
        flex:5,
        paddingHorizontal:8,
        paddingVertical:10,
    },
    //---------------------
    displayContainer:{
        backgroundColor: "#fff",
        flex:1,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    //---------------------
    titleContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
    translateContainerLeft:{
        flex:1,
        // borderWidth:1,
        // borderColor:'#000',
        marginVertical:10,
        marginHorizontal:10,
    },
    //-------------------
    translateLanguage:{
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#E5E5E5',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-start",
    },
    translateOther:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#FFDCBA',
        backgroundColor:'#FFDCBA',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-start",
    },
    //-------------------
    translateContainerRight:{
        flex:1,
        // borderWidth:1,
        // borderColor:'#000',
        marginVertical:10,
        marginHorizontal:10,
    },
    translateLanguageRight:{
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#E5E5E5',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-end",
    },
    translateOtherRight:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#3DD4CB',
        backgroundColor:'#3DD4CB',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-end",
    },
  });

  export default styles