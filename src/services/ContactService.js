import HttpService from './HttpService';
import AsyncStorage from '@react-native-community/async-storage';



 export const addNewContactService = async(credentials) =>
 {  
    const http = new HttpService();
  let Url = "user/contact/add";
  let tokenId = "user";

  const token = await AsyncStorage.getItem(tokenId);
/**
 * token field is required
 */  
  credentials["token"] = token;

return http.postData(credentials,Url,"POST",tokenId).then((data)=>{
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
 }

//load contacts for the first time
 export  const loadContactService = (creds) =>
 {
    const http = new HttpService();
  let tokenId="user";
  let pager =20;
  let  Url = "user/contact/get-all/"+pager+"?page="+1;
  return http.getData( Url,tokenId).then((data)=>{
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
 }

 export const loadSingleContactService = (id) =>
 {
    const http = new HttpService();
   let tokenId = "user";
    let Url = "user/contact/get-single/"+id;
    return http.getData( Url,tokenId).then((data)=>
    {
      return data;
  }).catch((error)=> {console.log(error)
    return error; 
     });
 }