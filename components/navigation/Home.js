import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';


export default function Home() {

    return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Dashboard</Text>
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

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cadefc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: "#defcf9"
    
  },
  headerText: {
    fontSize: 30,
  },
  classContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },  
  classDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  largeText: {
    fontSize: 20,
  }



});


