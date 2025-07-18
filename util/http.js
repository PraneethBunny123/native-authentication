import axios from "axios";
import { API_KEY } from '@env';

// const api_key = process.env.API_KEY
// const api_key="AIzaSyCzVD--M8JjXWC2PACdme2xpmNfoZZIIKE"

export async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    })

    const token = response.data.idToken    
    return token
}

export function createUser(email, password) {
    return authenticate('signUp', email, password)
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password)
}