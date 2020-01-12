import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View ,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';


export default function Home() {

    return (
      <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
<View style={styles.largeBox}>
  <View style={styles.headerContainer}>
        <Text style={styles.headerText}>        Dashboard</Text>
      </View>

      <View style={styles.classContainer}>
        <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Class: </Text>
          <Text style={styles.largeText}>JC2 H2 Physics</Text>
        </View>

        <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Time: </Text>
          <Text style={styles.largeText}>9:45 AM</Text>
        </View>

        <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Location: </Text>
          <Text style={styles.largeText}>C3-3</Text>
        </View>
      </View>
      </View>
      <View style={styles.largeBox}>
        <View style={styles.twoheaderContainer} >
           <Text style={styles.headerText}>           Exams</Text>
           </View>
           <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Physics: </Text>
          <Text style={styles.largeText}>C3-3</Text>
        </View>
        <View style={styles.classDisplay}>
        <Button
          title="Chemistry"
          color="#f194ff"
          onPress={() => Alert.alert('Uploaded')}
        />
        </View>
        <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Math: </Text>
          <Text style={styles.largeText}>C3-3</Text>
        </View>
        <View style={styles.classDisplay}>
          <Text style={styles.largeText}>Economics: </Text>
          <Text style={styles.largeText}>qweqw</Text>
        </View>
       
        </View>
      
    </ScrollView>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cadefc',
    
  },
  scrollView:{
    flex: 1,
    backgroundColor: 'blue',
    marginHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: "rgb(200,150,220)"
  },
  twoheaderContainer: {
    backgroundColor: "rgb(200,220,150)"
    
  },

  headerText: {
    fontSize: 30,
    color:'rgb(255,255,255)'
  },
  classContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },  
  classDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
   
   
  },
  largeText: {
    fontSize: 20,
    alignContent: 'space-around',
  },

  largeBox: {
    flex: 1,
    width: 250,
    paddingTop:20,
    paddingBottom:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },



});


