import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';
import { login } from '../util/http';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleLogin({email, password}) {
    setIsAuthenticating(true)
    try {
      await login(email, password)
    } catch(error) {
      Alert.alert('Authentication failed, Please check your credentials or try again later')
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
