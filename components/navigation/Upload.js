import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Button,
  Alert,
  
} from 'react-native';


export default function Upload() {

    return (
    <View style={styles.container}>
      <View> 
        <Button
          title="Upload timetable"
          color="#f194ff"
          onPress={() => Alert.alert('Uploaded')}
        /></View>
      
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
});
