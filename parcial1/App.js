import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

export default function App() {
    const image = require('./assets/NFL.png');

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handlePress = () => {
        setDisplayText(`ID: ${id} \n\nName: ${name} \n\nEmail: ${email} \n\nPhone: ${phone}`);
        setId('');
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />

            <TextInput
                style={styles.input}
                placeholder="Enter ID"
                value={id}
                onChangeText={setId}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Sign Up" onPress={handlePress} color="#013369" />
            <Text style={styles.resultText}>{displayText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingLeft: 8,
    },
    resultText: {
        width: '80%',
        marginTop: 16,
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 100,
        marginBottom: 20,
    },
});

