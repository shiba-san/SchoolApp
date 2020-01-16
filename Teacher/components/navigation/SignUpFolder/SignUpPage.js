import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SignUpPage({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.nameCard}>
        <Text style={{fontSize: 20}}>Event: </Text>
        <Text style={{fontSize: 20}}>
          { navigation.getParam('name') }
        </Text>
      </View>

      <View style={styles.descriptionCard}>
        <Text style={{fontSize: 20}}>Description: </Text>
        <Text>{ navigation.getParam('description') }</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#cadefc',
  },
  nameCard: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#3282b8'
  },
  descriptionCard: {
    paddingTop: 20,
    fontSize: 20,
  }
});


