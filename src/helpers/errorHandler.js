import {store} from '../store/Store';
import { userActions} from '../actions/UserActions';
export const handledError = (error) => {
    // Error
    if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status == 401)
        {
            store.dispatch(userActions.logoutNotAuthorized())
        }

        if (error.response.data)
        {
            return error.response.data.message
        }
        return error.response.statusText + " " + error.response.status;
        // console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the 
        // browser and an instance of
        // http.ClientRequest in node.js
        return "The request was made but no response was received";
    } else {
        // Something happened in setting up the request that triggered an Error
        return error.message;
    }
};


