import React from 'react'
import { View, Button, Text } from 'react-native';


const Home = ({ history }) => {
   
   return (
      <View>
         <Text>This is HOME!</Text>
         <Button title=" welcome to ISM" onPress={() => history.push("/Search")}/>
      </View>
   )
}
export default Home