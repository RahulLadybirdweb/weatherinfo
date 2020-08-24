import {Dimensions, Platform, StyleSheet } from "react-native";

const Exstyles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    StatusBar : {
      backgroundColor:'#0088CC'
    },
    container : {
      marginLeft:10,
      marginRight:10,
      marginTop:10
    },
    title: {
      fontSize: 25,
      fontWeight:"500",
      color:"#000" 
    },
    version: {
      fontSize: 14,
      marginTop: '3%',
      margin: 5,
      color:"#000"
    },
    aboutUsDiscription: {
      fontSize: 20,
      marginTop: '3%',
      width: '95%',
      margin: 5,
      color:"#000"
    },
    MainSendButtom :{
      paddingLeft:10,
      paddingRight:10
    },
    donoted: {
      fontSize: 14,
      fontWeight: 'bold',
      padding: 30,
      textAlign: "center",
      alignItems:"center",
      color:"#000"
    },
    text : {
      color:"#fff"
    },
    buttom : {
      width:"100%",
      backgroundColor:"#0088CC",
      borderColor:"#000"
    }
  });
  export default Exstyles;