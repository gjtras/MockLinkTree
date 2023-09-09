import {CHANGENAME, ADDLINK, REMOVELINK, CUSTOMIZEBACKGROUND} from './actionconstants';

export const changeName = (name) =>{
    return {
        type: CHANGENAME,
        payload: name
    }
};

export const addLink = (info) => {
    return {
        type: ADDLINK,
        payload: {
            url: info.url,
            description: info.desc
        }
    }
};

export const removeLink = (url) => {
    return {
        type: REMOVELINK,
        payload: url
    }
};

export const customizeBackground = (theme) => {
    return{
        type: CUSTOMIZEBACKGROUND,
        payload: theme
    }
};