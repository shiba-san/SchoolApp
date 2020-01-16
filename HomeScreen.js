import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudentApp')}>
            <Text style={styles.buttonText}>Student Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeacherApp')}>
            <Text style={styles.buttonText}>Teacher Mode</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#758184',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#cfb495',
        borderColor: '#1b262c',
        borderRadius: 20,
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 30,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
      }

});
