import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native';

export default class WriteScreen extends React.Component{
    constructor(){
        super(
            this.state(
                author='',
                storytext='',
                title=''

            )
        )
    }
    submitStory=()=>{
       db.collection("stories").add({
           author:this.state.author,
           storytext:this.state.storytext,
           title:this.state.title
         //date firebase.firestore .FieldValue. serverTimestamp().now().ToDate()
       })
       this.setState({
           author:'',
           storytext:'',
           title:''
       })
       ToastAndroid.show('Your story has submitted',ToastAndroid.SHORT)
    }
render(){
    return(
        <KeyboardAvoidingView styles={{margin:10,alignSelf:'center'}}>
        <View>
        <TextInput
        style={styles.text}
        placeholder="Write A Story"
        onChangeText={(text)=>{
            this.setState({
                storytext:text
            })
        }}
        multiline={true}/>
        <TextInput
        style={styles.author}
        placeholder="Name of the author"
        onChangeText={(text)=>{
            this.setState({
                author:text
            })
        }}
        />
        <TextInput
        style={styles.title}
        placeholder="Title of the story"
        onChangeText={(text)=>{
            this.setState({
                title:text
            })
        }}
        />
        </View>
        <View>
        <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>
        </View>   
        </KeyboardAvoidingView>
    )
}
}

const styles = StyleSheet.create({
    text:{
        height:250,
        borderWidth:2,
        margin:10
    },
    button:{
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'red',
        width:80,
        height:40
    },
    author:{
        height:40,
        borderWidth:2,
        margin:10
    },
    title:{
        height:40,
        borderWidth:2,
        marginTop:40,
        margin:10
    }
})