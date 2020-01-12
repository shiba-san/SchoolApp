import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


export default function Events() {
  const [event, setEvent] = useState([
    { name: 'GP Day', description: 'Lorem Ipsum is simply dummy text of the printing.', id: '1' },
    { name: 'TM Run', description: 'with the release of Letraset sheets containing', id: '2' },
    { name: 'Math Olympiad Signup', description: 'letters, as opposed to using Content here, content', id: '3' },
    { name: 'Math Elective', description: 'years, sometimes by accident', id: '4' },
    { name: 'Chemistry Elective', description: 'are going to use a passage of Lorem Ipsum, you', id: '5' },
    { name: 'Econmics Elective', description: 'repeat predefined chunks as necessary, making this the', id: '6' },
    { name: 'Physics Elective', description: '2000 years old. Richard McClintock', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeader}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />

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
  cardContainer: {
    flex: 1,
    marginHorizontal: 2,
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f1f1f6',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333366',
  },
  cardHeader: {
    fontSize: 23,
    marginBottom: 20,
  },
  cardDescription: {

  },
});
