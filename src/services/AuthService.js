import HttpService from './HttpService';



export const RegisterService = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl,"POST").then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const LoginUser = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "user/login";
    return http.postData(credentials,signUpUrl,"POST").then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error; 
    });
}