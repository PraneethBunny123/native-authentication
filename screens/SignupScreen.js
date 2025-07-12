import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleSignup({email, password}) {
    setIsAuthenticating(true)
    try {
      await createUser(email, password)
    } catch(error) {
      Alert.alert('Could not create user, please try again later')
    }
    
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={handleSignup}/>;
}

export default SignupScreen;
