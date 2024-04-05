/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';


function App(): React.JSX.Element {

  return (

    <>
          <View style={styles.container}>
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.bigBlue}>just bigblue</Text>
                <Text style={[styles.bigBlue,styles.red]}>big Blue, then red</Text>
                <Text style={[styles.red,styles.bigBlue]}>red, then big Blue</Text>
          </View>



          <View>
              <View
                  style={{
                    width:50,
                    height:50,
                    backgroundColor:'powderblue'
                  }}
                />
                

                <View style={{
                  width:100,
                  height:100,
                  backgroundColor:'skyblue'
                }}/>


                <View
                  style={{
                    width:150,
                    height:150,
                    backgroundColor:'steelblue'
                  }}
                />                
          </View>

          
    </>

      
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop:50,
      marginBottom:50
    },
    bigBlue:{
      color: 'blue',
      fontWeight:'bold',
      fontSize:30,
    },
    red:{
      color:'red'
    }
  });

export default App;
