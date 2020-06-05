import { CLEAR_CREATE_CONTACT_STATE, 
    CREATE_CONTACT_LOADING, 
    CREATE_CONTACT_SUCCESS, 
    CREATE_CONTACT_ERROR } from "../actiontypes/Contacts"


const initState = {
    createContactState:"",
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
           createContactState:action.res
            }


        default:
            return state

    }
}


export default ContactReducer;