import {CHANGENAME, ADDLINK, REMOVELINK, CUSTOMIZEBACKGROUND} from './../action/actionconstants';


const initialState = {
    name: "",
    links: [],
    background: "Default"
};


export const rootreducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGENAME:
            return {
                ...state,
                name: action.payload
            };
        case ADDLINK: 
            return{
                ...state, 
                links: [...state.links, action.payload]
            };
        case REMOVELINK:
            const targetURL = action.payload;
            const newLinks = state.links.filter(link => link.url !== targetURL);
            return {
                ...state,
                links: newLinks
            };
        case CUSTOMIZEBACKGROUND:
            return {
                ...state, 
                background: action.payload
            };
        default:
            return {
                ...state
            };
    }




}