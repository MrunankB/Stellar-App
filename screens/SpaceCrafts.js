import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView,FlatList } from 'react-native';

import axios from 'axios';

export default class SpaceCraftScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      aircrafts:[]
    }
  }
  componentDidMount=()=>{
    this.getData()
  }
  getData=()=>{
    axios
        .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response=>{
          this.setState({aircrafts:response.data.results})
          console.log(response.data.results)
        })
        .catch(error=>{
          console.log(error.message)
        })
  }
  renderItem=({item})=>{
    return(
      <View style={{ borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20,
                    elevation: 10,
                    backgroundColor: 'white'
                    }}>
        <Image source={{uri:item.agency.image_url}} style={{width:"100%",height:200,marginBottom:15,marginRight:10,marginLeft:10,borderRadius:10}}></Image>
        <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>{item.name}</Text>
        <Text style={{ color: '#696969', fontSize: 16 }}>{item.agency.name}</Text>
          <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#A9A9A9', fontSize: 13 }}>{item.agency.description}</Text>
          </View>
                </View>
      </View>
    )
  }

    keyExtractor = (item, index) => index.toString();

    render() {
          if(Object.keys(this.state.aircrafts).length === 0) {
            return (
              <View style={styles.container}>
              <ImageBackground source={require('../assets/stars.gif')} style={[styles.backgroundImage,{width:"100%",height:"100%"}]}>
               <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    
                    <Text style={styles.routeText}>Loading</Text>
                    <Image source={{uri:"https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"}}
                    style={{width:50,height:50}}></Image>
                </View>
                    </ImageBackground>
              </View>
               
            )
        }else{
          return(
            <View style={styles.container}> 
            <ImageBackground source={require('../assets/bg_2.gif')} style={styles.backgroundImage}>
            <SafeAreaView style={styles.droidSafeArea}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <View style={{flex:0.25}}>
                  <Text style={styles.routeText}>SpaceCraft Screen </Text>
                </View>
                <View style={{flex:0.75}}>
                  <FlatList
                  renderItem={this.renderItem}
                  data={this.state.aircrafts}
                  keyExtractor={this.keyExtractor}
                  />
                </View>
`                `
            </View>
            </SafeAreaView>
            </ImageBackground>
          </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width:"100%",
        height:'100%'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        alignContent:"center",
        alignSelf:'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "purple",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
        // margin: 10,
        // textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

