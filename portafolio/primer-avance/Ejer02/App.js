import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const third_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdW9uIJ765RSMnA0YYOCxZi9xNrLJNOcErQ&s";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Source: Local Image! </Text>
      <Image style={styles.image} source={require('./assets/Hollow Knight.avif')} />
      <Text style={styles.title}> Source: Third Image! </Text>
      <Image style={styles.image} source={{uri: third_image}}/>
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
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  image: {
    width: 200,
    height: 250,
    marginBottom: 20,
    borderRadius: '50%',
  },
  
});
