import { CLEAR_CREATE_CONTACT_STATE, 
    CREATE_CONTACT_LOADING, 
    CREATE_CONTACT_SUCCESS, 
    CREATE_CONTACT_ERROR, 
    CLEAR_GET_CONTACT_STATE,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR } from "../actiontypes/Contacts"


const initState = {
    createContactState:"",
    getContactState:""
}


const ContactReducer = (state=initState, action) =>
{
    switch(action.type){
    

        case CLEAR_CREATE_CONTACT_STATE:
            return{
                ...state,
                createContactState:""
            }
            case CREATE_CONTACT_LOADING:
                return{
                    ...state,
                createContactState:"loading"
                }
        case CREATE_CONTACT_SUCCESS:
            return{
            ...state,
            createContactState:action.res
        }

        case CREATE_CONTACT_ERROR:
            return {
           ...state,
           getContactState:action.res
            }

        
        case CLEAR_GET_CONTACT_STATE:
            return{
                ...state,
                getContactState:""
            }
            case GET_CONTACTS_LOADING:
                return{
                    ...state,
                getContactState:"loading"
                }
        case GET_CONTACTS_SUCCESS:
            return{
            ...state,
            getContactState:action.res
        }

        case GET_CONTACTS_ERROR:
            return {
           ...state,
           getContactState:action.res
            }


        default:
            return state

    }
}


export default ContactReducer;