import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from "react-native";
import Header from "./Header"

const Form = ({ history }) => {
  const [name, onChangeName] = React.useState("");
  const [address, onChangeAddress] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [contact, onChangeContact] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>

      <Header/> 
       <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="name"
      />
      <Text>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={address}
        placeholder="address"
      />
      <Text>Contact</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeContact}
        value={contact}
        placeholder="conatct"
        keyboardType="numeric"
      />
      <Text>Bed Number</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="bed number"
        keyboardType="numeric"
       />
      <Text style={{}}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />

      <Button
        title="Submit"
        onPress={() => history.push("/Thank")}
      />
        

      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Form;