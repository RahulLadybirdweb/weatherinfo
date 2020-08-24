import React from 'react'
import {View, ScrollView ,StatusBar,Text} from 'react-native'
import Exstyles from './Style/Style'
import { Appbar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'

export default class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      response : '',
      listData : [],
      info : ""
    }
  }
  componentDidMount = () => {
    this.getData()
  }
  getData = () => {
    axios.get("/data/2.5/forecast?q=delhi&appid=5579989ecdedd655c4acbe1bbb6ae654")
    .then(responseData=>{
      console.log(123456,responseData);
      const Data = responseData.data.city.name
      const ListData = responseData.data.list
      const infoData = responseData.data.cnt
     this.setState({ response : Data,listData : ListData,info : infoData })
       
    })
    .catch(error=>{
      console.log(22,error)
    })
  }
 _goBack = () => console.log('Went back');

    render(){
      const state =  this.state.response
      const ListData =  this.state.listData
      const Info =  this.state.info
      console.log(234,ListData);
        return(
        <View style={Exstyles.mainContainer}>
          <Appbar.Header>
              <Appbar.BackAction onPress={this._goBack} />
              <Appbar.Content title="Weather" subtitle="Information" />
          </Appbar.Header>      
        <Card style={{height:"40%"}}>
              <View style={{height:"20%"}} />
              <Text style={{justifyContent:"center",alignSelf:"center",fontSize:100,fontWeight:"bold"}}>{Info}</Text>
              <Text style={{justifyContent:"center",alignSelf:"center",fontSize:30}}>
             {state}
              </Text>
        </Card>
        <ScrollView>
        {ListData.map((item,index) =>
          <View key={index} style={{justifyContent:"space-between",flex:1,flexDirection:"row",paddingVertical:10,paddingHorizontal:10,borderWidth:1,borderColor:"#000"}}>
            {item.weather.map((weather,index) => 
            <Text  key={index} style={{justifyContent:"center",alignSelf:"center",fontSize:20}}> {weather.main}
            </Text>
            )}
            <Text style={{justifyContent:"center",alignSelf:"center",fontSize:20}}> {item.clouds.all} </Text>
          </View>
          )}
        </ScrollView>
  </View>
        );
    }
}