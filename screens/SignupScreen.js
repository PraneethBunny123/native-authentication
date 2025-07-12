import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authCtx = useContext(AuthContext)

  async function handleSignup({email, password}) {
    setIsAuthenticating(true)
    try {
      const token = createUser(email, password)
      authCtx.authenticate(token)
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
