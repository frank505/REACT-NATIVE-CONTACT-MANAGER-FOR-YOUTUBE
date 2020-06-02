import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';


const RootReducer = combineReducers({
authReducer:AuthReducer
});





export default RootReducer