import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';


export default function Upload() {

    return (
    <View style={styles.container}>
      <Text>Upload</Text>
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
