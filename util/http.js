import axios from "axios";
import { API_KEY } from '@env';

// const api_key = process.env.API_KEY
// const api_key="AIzaSyCzVD--M8JjXWC2PACdme2xpmNfoZZIIKE"

export async function createUser(email, password) {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
)
}