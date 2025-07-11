import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleSignup({email, password}) {
    setIsAuthenticating(true)
    await createUser(email, password)
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={handleSignup}/>;
}

export default SignupScreen;
