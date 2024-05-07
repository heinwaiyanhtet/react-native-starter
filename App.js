import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View,StyleSheet, FlatList,Text } from 'react-native';

const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingTop:22,
  },

  item:{
     padding:10,
     fontSize:18,
     height:44,
  }

})


export default function App() {

  // const name = "Maru";
  // const getFullName = (firstName,secondName,thirdName) => {
  //   return firstName + ' ' + secondName +  ' ' + thirdName
  // }

  return (


      <View style={styles.container}>

          <FlatList 

              data={[
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
                {key:'Devin'},
              ]}

              renderItem={ ({item})  => <Text style={styles.item}> {item.key}  </Text>}
          
          />


      </View>
    // <ScrollView>

    //      <Text>Some Text</Text>

    //      <View>

    //         <Text>Some more Text</Text>

    //         <Image
    //           source={{
    //             uri:'https://reactnative.dev/docs/assets/p_cat2.png'
    //           }}
    //           style={{width:200,height:200}}
    //         >
    //         </Image>

    //      </View>

    //      <TextInput
    //         style={{
    //           height:40,
    //           borderColor:'gray',
    //           borderWidth:1
    //         }}
    //         defaultValue="You can type in me"
    //      >
    //      </TextInput>

    // </ScrollView>


    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! {name}!</Text>
    //   <Text>Hello I am {getFullName('Hein','Wai','Yan')}</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

