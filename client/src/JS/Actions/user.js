import axios from "axios"
import { LOAD_USER, LOGIN_USER, FAIL_USER, CURRENT_USER, REGISTER_USER, LOGOUT_USER } from '../ActionsTypes/user';


 export const register = (newUser, navigate) => async(dispatch) =>{
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.post("/api/user/register", newUser)
        dispatch({type : REGISTER_USER , payload : result.data })
        navigate('/')
    } 
    catch (error) {
        dispatch({type : FAIL_USER, payload : error.response.data.error})
          }
    }

export const login = ( user, navigate) => async(dispatch) =>{
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.post("/api/user/login", user)
        dispatch({type: LOGIN_USER , payload : result.data })
        navigate('/')
    } 
    catch (error) {
        dispatch({type : FAIL_USER, payload : error.response.data.error})
       
    }
    }
    export const current = () => async(dispatch) =>{
                dispatch({type : LOAD_USER})
try {
   const config = {
    headers : 
    {authorization: localStorage.getItem("token")}
   } 
   let result = await axios.get("/api/user/current" , config )
   dispatch({type : CURRENT_USER, payload : result.data})
} catch (error) {
    dispatch({type : FAIL_USER, payload : error.response.data.error})
          
}

}
export const logout = () => async(dispatch) => {dispatch({LOGOUT_USER})}