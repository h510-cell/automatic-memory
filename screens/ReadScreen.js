import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
    constructor(){
        super(
         this.state({
             allStories:[],
             dataSource:[],
             search:'',
         })
        )  
    };
    componentDidMount(){
        this.retriveStories()
    }

    updateSearch=search=>{
        this.setState({search})
    }

    retriveStories=()=>{
        try{
            var allStories=[];
            var stories = db.collection("stories")
            .get().then((querySnapshot)=>{
                  querySnapshot.forEach((doc) => {
                //doc.data()is undefined for query docsnapshots
                
                allStories.push.apply(doc.data())
                   console.log('this are the stories',allStories)
                  })
                 this.setState({allStories}) 
            })
        }
        catch(error){
        console.log(error)
        }
    };

    SearchFilterFunction=()=>{
        //paasing the input in the text input
        const newData=this.state.allStories.filter((text)=>{
              //applying filter for the search bar
              const itemData=item.title?item.title.toUpperCase():''.toUpperCase();
              const textData=text.toUpperCase();
              return itemData.indexOf(textData)> -1;
                    });
                this.setState({
                    //setting the filterd newdata on dataSource 
                    //after setting the it wil automatically re-render the view
                    dataSource:newData,
                    search:text
                })    
              }
render(){
    return(
           <view style={styles.container}>

        <View style={{height:20,width:'100%'}}>
          <Searchbar
          placehaolder="Search here..."
          onChangeText={text=>this.SearchFilterFunction(text)}
          onClear={text=>this.SearchFilterFunction('')}
          value={this.state.search}
          />  
        </View>

        <FlatList
        data={this.state.search===''?this.state.allStories:this.state.dataSource}
        renderItem={({item})=>(
           <View style={styles.itemContainer}>
            <Text> Title: {item.title}</Text>
             <Text> Author:{item.author}</Text>
           </View>
        )}
        keyExtractor={(item,index)=>index.toString()}
        />
        </view>
    )
}
}

const Styles = StyleSheet.create({
     container:{
     backgroundColor:'rgb(0,0,225)'
     },
    text:{
        textAlign:'center',
        color:'red'
    },
    item:{
        backgroundColor:'red',
        padding:10,
        marginVertical:8,
        marginHorizontal:16    
    },
    title:{
    fontSize:'32'
    },
    itemContainer:{
        height:80,
        width:'100%',
        borderWidth:2,
        borderColor:'green',
        justifyContent:'center',
        alignSelf:'center'
    }
});