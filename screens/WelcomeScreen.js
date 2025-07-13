import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [messageNode, setMessageNode] = useState('')

  const authCtx = useContext(AuthContext)
  const token = authCtx.token
  
  useEffect(() => {
    axios.get(`https://native-authentication-49111-default-rtdb.firebaseio.com/message.json?auth=` + token).
    then((response) => {
      setMessageNode(response.data)
      console.log(token)
    })
    console.log(token)
  }, [token])

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
