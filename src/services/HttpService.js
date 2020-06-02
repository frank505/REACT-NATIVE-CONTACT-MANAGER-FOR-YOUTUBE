class HttpService
{
    url = "http://127.0.0.1:8000";


    postData = async(item ,addedUrl,postType,tokenId="") =>
    {
        const token = await localStorage.getItem(tokenId);

        const requestOptions = this.postRequestOptions(token,item,postType);

        return fetch(this.url+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }


    getData = async(addedUrl,tokenId="") =>
    {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.getRequestOptions(token);

        return fetch(this.url+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }


    deleteData = async(addedUrl,tokenId="") =>
    {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.deleteRequestOptions(token);

        return fetch(this.url+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }

    getRequestOptions = (token) =>
    {
        let requestOptions = {
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token,
                'Content-type':'application/json',
            }
        }

        return requestOptions;
    }


    postRequestOptions = (token,item,postType) =>
    {
        let requestOptions = {
            method:postType,
            headers:{'Authorization':'Bearer '+token,
                'Content-type':'Application/json',
            },

            body:JSON.stringify(item)


        }

        return requestOptions;
    }



    deleteRequestOptions = (token) =>
    {
        let requestOptions = {
            method:'DELETE',
            headers:{
                'Authorization':'Bearer '+token,
                'Content-type':'application/json',
            }
        }

        return requestOptions;
    }



}


export default HttpService;








