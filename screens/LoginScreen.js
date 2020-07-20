import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Alert, TouchableOpacity } from 'react-native';
import firebase from '../Config'

export default class LoginScreen extends React.Component{
    constructor(){
        super(
            this.state={
            email="",
            password=""
            }
        )
    }
    login=async(email,password)=>{
        if(email && password){
            try{
                const response=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                  this.props.navigation.navigate('WriteScreen')
                }
            }

            catch(error){
                switch(error.code){
                    case'auth/user-not-found':
                    Alert.alert('user not found')
                    console.log('does not exist')
                    break
                    case'auth/invail email':
                    Alert.alert('invalid email and password')
                    console.log('invalid')
                    break
                }
            }
        }
            else{
                Alert.alert('enter email and password')
            
        }
    }


    render(){
        return(
            <KeyboardAvoidingView style={{margin:20,alignItems:'center'}}>
        <View>
            <TextInput
            style={styles.LoginBox}
            placeholder="login"
            onChangeText={()=>{
             this.setState({
                 email:text
             })   
            }}
            />
            <TextInput
            style={styles.LoginBox}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={()=>{
                this.setState({
                    password:text
                })
            }}     
            />
        </View>
        <View>
          <TouchableOpacity style={{heigh:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.email,this.state.password)}}>
              <Text style={{textAlign:'center'}}Login></Text>
          </TouchableOpacity>  
        </View>    
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    LoginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})