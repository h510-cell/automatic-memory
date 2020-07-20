import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'recat-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';
import LoginScreen from './screens/LoginScreen'
import firebase from './Config'

export default function App() {
  return (
    <AppContainer/>
  );
}

 const TabNavigator =createBottomTabNavigator({
   WriteStory:{screens:WriteScreen},
   ReadStory :{screens:ReadScreen}
 },
 {
   defaultNavigationOptions:({navigation})=>{
     tabBarIcon:()=>{
       var routename=navigation.state.routename;
       console.log(routename)
       if(routename==="ReadScreen"){
         return(
           <Image
           soure ={require ("./assets/Reading.png")}
           style={{width:40,height:40}}
           />
         )
       }

       else if (routename==="WriteScreen"){
         return(
           <Image
           soure={require("./assets/Writing.png")}
           style={{width:40,height:40}}
           />)
       }}
 }}
 );

 const switchNavigator=createSwitchNavigator({
   LoginScreen:{screen:LoginScreen},
   TabNavigator:{screen:TabNavigator}
 })

 const AppContainer = createAppContainer(TabNavigator)
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
