import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import Image from "./Image.js";

const Search = ({ history }) => {
  
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
    <Image/>
    <Text>Welcome to the immediate Service Request</Text>
   
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Search Criteria"
        keyboardType="numeric"
      />
      
      <Button 
      style={styles.button}
      title="Client Search"
      onPress={() => history.push("/Services")}
  />
  <Button 
      style={styles.button}
      title="Referral Search"
       onPress={() => history.push("/Services")}
   />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       justifyContent:"space-evenly",


        },
   input: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    width: 200,
    alignItems: 'center',
  },
});

export default Search;