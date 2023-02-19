import { LOAD_USER, LOGIN_USER , FAIL_USER, REGISTER_USER ,LOGOUT_USER, CURRENT_USER } from '../ActionsTypes/user';
const initialeState = {
    user : null,
    load : false,
    isAuth : false,
    error : null,
    newUser : null
}
const userReducer = (state = initialeState, {type, payload} ) => {
switch (type){
    case LOAD_USER :
        return {...state , load : true}
    case REGISTER_USER : 
    localStorage.setItem("token", payload.token)
    return {...state, load: false , newUser : payload.newUser, isAuth : true}
  case LOGIN_USER :
    localStorage.setItem("token", payload.token)
    return {...state, load:false , user : payload.user , isAuth: true}
    case CURRENT_USER : 
    return {...state, user : payload , isAuth : true}
    case LOGOUT_USER :
        localStorage.removeItem("token")
        return {
            findUser : null,
            load : false,
            isAuth : false,
            error: null,
            user : null
        }
  case FAIL_USER : 
  return {...state, load:false, error: payload}
  default:
    return state
}

}
export default userReducer