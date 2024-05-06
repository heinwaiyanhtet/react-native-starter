import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const name = "Maru";
  const getFullName = (firstName,secondName,thirdName) => {
    return firstName + ' ' + secondName +  ' ' + thirdName
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {name}!</Text>
      <Text>Hello I am {getFullName('Hein','Wai','Yan')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
