import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Header from "./Header"


export default class Services extends React.Component {
	render() {
		return(
		<View style={styles.container}>
			<Header/>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/bathing-icon-256x256.png')} style={styles.inner}/>
			  <Text style={styles.text}>Caregiving</Text>
		  </View>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/restaurant-dinning-004-512.png')} style={styles.inner}/>			  
			<Text style={styles.text}>Homehealth</Text>
		  </View>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/t.png')} onPress={() => history.push("/Thank")} style={styles.inner}/>
			<Text style={styles.text}>Hospice</Text>
		  </View>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/nursing.png')} style={styles.inner}/>
			  <Text style={styles.text}>Nursing Services</Text>
		  </View>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/bathing-icon-256x256.png')} style={styles.inner}/>
			  <Text style={styles.text}>service 5</Text>
		  </View>
		  <View style={styles.box}>
		    <ImageBackground source ={require('../assets/Business_Location_Man_Place_Placement_Pin_Marker-512.png')} style={styles.inner}/>
			  <Text style={styles.text}> Placement Services</Text>
		  </View>
		</View>
		 
		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '85%',
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
     },
	 box: {
		  width: '40%',
		  height: '30%',
		  padding: 25,
		  margin: 13
	 },
	 inner: {
		  flex: 1,
		  alignItems: 'center',
		  justifyContent: 'center'
	 },
	 text:{
		justifyContent: 'center'
	 }
});