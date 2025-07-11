import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';
import { login } from '../util/http';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleLogin({email, password}) {
    setIsAuthenticating(true)
    await login(email, password)
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
