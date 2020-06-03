import { 
    CLEAR_REGISTER_STATE, 
    REGISTER_SUCCESS, 
    REGISTER_ERROR, 
    REGISTER_LOADING 
 } from "../actiontypes/Auth"

const initState = {
    loginState:"",
    registerState:""
}


const AuthReducer = (state=initState, action) =>
{
    switch(action.type){
    

        case CLEAR_REGISTER_STATE:
            return{
                ...state,
                registerState:""
            }
            case REGISTER_LOADING:
                return{
                    ...state,
                    registerState:"loading"
                }
        case REGISTER_SUCCESS:
            return{
            ...state,
            registerState:action.res
        }

        case REGISTER_ERROR:
            return {
           ...state,
           registerState: action.res
            }

        default:
            return state

    }
}


export default AuthReducer;