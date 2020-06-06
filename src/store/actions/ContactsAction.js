import { CREATE_CONTACT_SUCCESS, CREATE_CONTACT_ERROR,CREATE_CONTACT_LOADING, CLEAR_CREATE_CONTACT_STATE, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, GET_CONTACTS_ERROR } from "../actiontypes/Contacts";
import { addNewContactService, loadContactService } from "../../services/ContactService";



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



export const GetContactActions = (id) =>
{

    return (dispatch)=>{

        dispatch({type:GET_CONTACTS_LOADING});
        
        loadContactService(id).then((res)=>{

                console.log(res);

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:GET_CONTACTS_SUCCESS,res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:GET_CONTACTS_ERROR,res});
                }
            },
            error=>{
                console.log(error);
            }
        )
    } 

}



