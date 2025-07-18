import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useContext, useState } from 'react';
import { login } from '../util/http';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authCtx = useContext(AuthContext)

  async function handleLogin({email, password}) {
    setIsAuthenticating(true)
    try {
      const token = login(email, password)
      authCtx.authenticate(token)
    } catch(error) {
      Alert.alert('Authentication failed, Please check your credentials or try again later')
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
