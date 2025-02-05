import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Appbar } from 'react-native-paper';

export default function App() {

  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      {/* APPBAR COMPONENT PAPER */}
      <Appbar>
        <Appbar.Content title='REACT NATIVE PAPER' />

      </Appbar>
      {/* TEXTINPUT COMPONENT PAPER */}
      <TextInput 
        style={styles.input}
        label='Type SomeThing'
        value={text}
        textColor='blue'
        onChangeText={text => setText(text)}
      />
      {/* BUTTON COMPONENT PAPER */}
      <Button mode='contained' onPress={() => alert(`Text: ${text}`)}>
        Type SomeThing!
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  }
});

