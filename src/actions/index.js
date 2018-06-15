import axios from 'axios'
import { AUTH_USER } from './types'


export const signup = (formProps) => async dispatch => {
    const response = await axios.post('http://localhost:5000/api/users/register', formProps)

    dispatch({ type: AUTH_USER , payload: response.data.token })

}

