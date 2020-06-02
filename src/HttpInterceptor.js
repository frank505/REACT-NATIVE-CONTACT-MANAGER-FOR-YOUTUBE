import fetchIntercept from 'fetch-intercept';




export const HttpInterceptor = (store) =>fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        // config.headers.Authorization = "Bearer "+localStorage.getItem("crud_app");
        return [url, config];
    },

    requestError: function (error) {

        console.log(error);
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        console.log(response.status);
        // if(response.status==401)
        // {
        //     store.dispatch({type:SHOW_MODAL_LOGIN});
        // }
        return response;
    },

    responseError: function (error) {
        console.log('error here oooo take note');
        // if(error.status==undefined || error.status==401)
        // {
        //    store.dispatch({type:SHOW_MODAL_LOGIN});
        // }
        // Handle an fetch error
        return Promise.reject(error);
    }
});