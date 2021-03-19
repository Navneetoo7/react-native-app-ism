import React from 'react';
import { NativeRouter, Switch, Route } from "react-router-native";
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Form from "./components/Form.js"
import Services from "./components/Services.js"
export default function App() {
  console.log("App executed")
  let x = 1; 
  return (
    <NativeRouter>
     <View style={styles.container}>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Search" component={Search}/>
       <Route exact path="/Form" component={Form}/>
       <Route exact path="/Services" component={Services}/>
      </Switch>
     </View>
     </NativeRouter>

    // <Search/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

