import React from 'react';
import { 
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
} from 'react-native'; 

import { Formik } from 'formik';

export default function EventForm() {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ event: '', description: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            
            {(props) => (
                <View>
                    <Text style={styles.text}>Event Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Event name'
                        onChangeText={props.handleChange('event')}
                        value={props.values.title}
                    />

                    <Text style={styles.text}>Event Description</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder='Description'
                        onChangeText={props.handleChange('description')}
                        value={props.values.description}
                    />

                    <Button color='maroon' title="Post Event" onPress={props.handleSubmit} /> 
                </View>
            )}

            </Formik>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        color: '#000',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
    }

});
