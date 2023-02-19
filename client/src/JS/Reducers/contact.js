import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../ActionsTypes/contact"


const initialeState = {
    listContacts : [],
    contactToGet:{msg : "test"},
    errors: null,
    load : false
}

const contactReducers = (state = initialeState, {type,payload}) => {
    switch(type){
    case LOAD_CONTACTS : 
     return{...state, load : true}
    case GET_CONTACTS : 
     return{...state , load: false , listContacts : payload.listContacts} 
    case GET_CONTACT : 
    return{...state , load : false, contactToGet : payload} 
     case FAIL_CONTACTS : 
      return{...state , load: false , errors: payload}
      default :
      return state
}
}


export default contactReducers