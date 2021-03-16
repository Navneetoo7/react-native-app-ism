import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, Alert, Button } from 'react-native';

export default function App() {
  console.log("App executed")
  let x = 1; 
  return (
    <View style={styles.container}>
      <Text>first recheck react navtive app!</Text>
      <TouchableHighlight onPress={() => console.log("did you tapped on image")}>

      <Image source= {{ 
        width:200,
        height:300,
        uri: "https://picsum.photos/200/300"
        }}/>
      </TouchableHighlight>
       <Button color="orange" title="Click me" 
       onPress={() => 
        Alert.alert("my title", "my messages", [
         {text:"Yes", onPress: () => console.log("yes") },
         {text:"No", onPress: () => console.log("No") },
         ])} />
         <Button color="orange" title="Click me for input" 
       onPress={() => 
        Alert.prompt("my title", "my messages", text => console.log(text))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
