import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';


export default function SignUpList({ navigation }) {
  const [event, setEvent] = useState([
    { name: 'GP Day Elective', description: ' of the loremlorem ipsumlorem loremlorem ipsumlorem ipsum loremloremlorem ipsumlorem ipsumloremloremlorem ipsumlorem dddd ipsumlorem ipsumloremloremlorv dvem idseffves mlorem ipsumloremloremlorem ipsumlorem ipsumlore mlorem lorem i psumlorem ipsumlo remldd oremlorem ipsum lorem ipsumlor emloreml orem ipsumlorem ipsumlorcecepsumlorem ips ecewumlor emipsu mlorem ipsumlorem ipsum ipsum printing.', id: '1' },
    { name: 'TM Run', description: 'with lorem ipsumthe ', id: '2' },
    { name: 'Math Olympiad Signup', description: 'lelorem ipsumtte, content', id: '3' },
    { name: 'Math Elective', description: 'years, ,  hereccident', id: '4' },
    { name: 'Chemistry Elective', description: 'are gipsumoing  Ipsum, you', id: '5' },
    { name: 'Econmics Elective', description: 'ipsumipsumipsum', id: '6' },
    { name: 'Physics Elective', description: '2000 ipsum ock', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('SignUpPage', item)}>
            <Text style={styles.cardHeader}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
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
