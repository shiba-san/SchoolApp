import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import EventForm from './eventForm';



export default function CreateEvents() {

  return (
    <View style={styles.container}>
      <EventForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cadefc',
    padding: 30,
    flexDirection: 'column'
  },
  card: {
    marginBottom: 40,
  },
  cardText: {
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 7,
  },

});



{/* <View style={styles.card}>        
<Text style={styles.cardText}>Event Name</Text>
  <View style={styles.inputContainer}>
  <TextInput
    style={styles.textInput}
    autoCorrect={false}
    underlineColorAndroid="transparent"
    style={{ color: '#000' }}
  />
</View>
</View>

<View style={styles.card}>        
<Text style={styles.cardText}>Description</Text>
  <View style={styles.inputContainer}>
  <TextInput
    style={styles.textInput}
    autoCorrect={false}
    underlineColorAndroid="transparent"
    style={{ color: '#000', height: 50, }}
  />
</View>
</View>
 */}
