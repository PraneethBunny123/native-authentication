import axios from "axios";

const api_key = process.env.API_KEY

export async function createUser(email, password) {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
)
}