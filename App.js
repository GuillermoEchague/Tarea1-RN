
import React, {useState } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native';

const Texto = (props) => {
  const { texto } = props;
  return(
  <Text>{texto}</Text>
  )
}


  const App: () => React$Node = () => {
    
    const titleText = useState("Guillermo Echagüe");
    const body1Text = useState("31");
    const bioText = useState("Bio:");
    const body2Text = useState("MsC. Ingeniero Civil en Mecánica \n Desarrollador Autodidacta ");
    const DesText = useState("Descripción:");
    const body3Text = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");






    return(
  <>
  <StatusBar barStyle="dark-content" />
  <SafeAreaView></SafeAreaView>
    <View style={styles.container1}>
      <View style={styles.container4}>
        <Text style = {styles.titleText}>{titleText}</Text>
        <Text style = {styles.bodyText1}>{body1Text}</Text>
      </View>
    

      <Image
      style={styles.photo}
      source={{uri: 'https://picsum.photos/seed/picsum/200'}}
      />
    </View>

    <View style={styles.container2}>
     <Text style = {styles.titleText1}> { bioText } </Text>
     <Text style = {styles.bodyText}> { body2Text } </Text>
    </View>

    <View style={styles.container3}>
      
    <Text style = {styles.titleText1} > { DesText } </Text>
      <View style={styles.container4}>
      <Text style = {styles.bodyText}> { body3Text} </Text>
      </View>
    </View>

    </>
);
  };

  const styles = StyleSheet.create({
    photo: {
      height: 100,
      width: 100,
      borderRadius:100,
    },
    container1:{
      
      backgroundColor: '#5f9ea0',
      alignItems: 'flex-start',      
      alignContent:'space-around',
      justifyContent:'space-between',
      flexDirection: 'row' ,
      paddingTop:22,
    },
    container2:{
     
      backgroundColor: '#5f9ea0',
      alignItems: 'flex-start',
      justifyContent:'flex-start',
      flexDirection: 'column',
      paddingTop:10,
    },
    container3:{
      flex: 1,
      backgroundColor: '#5f9ea0',
      alignItems: 'flex-start',
      justifyContent:'flex-start',
      flexDirection: 'column',
      paddingTop:10,
    },
    container4:{
      
      backgroundColor: '#5f9ea0',
      alignItems: 'flex-start',
      justifyContent:'flex-start',
      flexDirection: 'column',
      paddingTop:10,
    },

    
      titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color:"#ffffff"
      },
      titleText1: {
        fontSize: 20,
        color:'#deb887',
        
      },
      bodyText: {
        fontSize: 18,
      },
      bodyText1: {
        fontSize: 18,
        color:"#ffffff"
      }


  });

export default App;
