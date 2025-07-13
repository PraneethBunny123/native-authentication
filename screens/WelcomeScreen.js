import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
  const [messageNode, setMessageNode] = useState('')

  useEffect(() => {
    axios.get('https://native-authentication-49111-default-rtdb.firebaseio.com/message.json').
    then((response) => {
      setMessageNode(response.data)
    })
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{messageNode}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
