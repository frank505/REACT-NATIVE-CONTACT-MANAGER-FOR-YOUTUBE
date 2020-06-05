import { CREATE_CONTACT_SUCCESS, CREATE_CONTACT_ERROR,CREATE_CONTACT_LOADING, CLEAR_CREATE_CONTACT_STATE } from "../actiontypes/Contacts";
import { addNewContactService } from "../../services/ContactService";



export const CreateContactAction = (credentials) =>
{
    return (dispatch)=>{

        dispatch({type:CREATE_CONTACT_LOADING});

        addNewContactService(credentials).then((res)=>{

                console.log(res);

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:CREATE_CONTACT_SUCCESS,res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:CREATE_CONTACT_ERROR,res});
                }
            },
            error=>{
                console.log(error);
            }
        )
    } 

}




export const clearCreateContactState = () =>
{
    return (dispatch)=>{

        dispatch({type:CLEAR_CREATE_CONTACT_STATE});
    }

}