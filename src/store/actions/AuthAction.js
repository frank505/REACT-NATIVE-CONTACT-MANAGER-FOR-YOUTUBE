import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, 
    CLEAR_REGISTER_STATE } from "../actiontypes/Auth";
import { RegisterService } from "../../services/AuthService";
import AsyncStorage from '@react-native-community/async-storage'



export const RegisterAction = (credentials) =>
{
    return (dispatch)=>{

        dispatch({type:REGISTER_LOADING});

        RegisterService(credentials).then((res)=>{

                console.log(res);

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:REGISTER_SUCCESS,res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:REGISTER_ERROR,res});
                }
            },
            error=>{
                console.log(error);
            }
        )
    } 

}

export const clearRegisterAuthState = ()=>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_REGISTER_STATE});
    }
}

