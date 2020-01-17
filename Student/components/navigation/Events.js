import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


export default function Events() {
  const [event, setEvent] = useState([
    { name: 'GP Day', date: '19 January 2020', description: 'Lorem Ipsum is simply dummy text of the printing.', id: '1' },
    { name: 'TM Run', date: '1 January 2020', description: 'with the release of Letraset sheets containing', id: '2' },
    { name: 'Math Olympiad Signup', date: '19 February 2020', description: 'letters, as opposed to using Content here, content', id: '3' },
    { name: 'Math Elective', date: '19 March 2020', description: 'years, sometimes by accident', id: '4' },
    { name: 'Chemistry Elective', date: '3 January 2020', description: 'are going to use a passage of Lorem Ipsum, you', id: '5' },
    { name: 'Econmics Elective', date: '19 June 2020', description: 'repeat predefined chunks as necessary, making this the', id: '6' },
    { name: 'Physics Elective', date: '4 April 2020', description: '2000 years old. Richard McClintock', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeader}>{item.name}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
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
    borderWidth: 2,
    borderColor: '#333366',
  },
  cardHeader: {
    fontSize: 23,
    marginTop: -17,
    marginLeft: -8,
    fontWeight: 'bold',
  },
  cardDate: {
    alignSelf: 'center',
    paddingVertical: 20,
    fontStyle: 'italic',
  },
  cardDescription: {
    alignSelf: 'center',
    paddingVertical: 20,
  },

});
