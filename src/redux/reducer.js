import { GET_FIRST_DATA,GET_COUNTRY,CLOSE_BACKDROP,COUNTRY_NAME } from './actions';

const initialState = {
    items:[],
    backdrop:false,
    country:'',
    filter:''
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_DATA:
            const items = action.payload
            return {
                ...state,items: items,
            }
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload.country,
                backdrop:action.payload.backdrop
            }
        case CLOSE_BACKDROP:
            return {
                ...state,
                backdrop:action.payload                
            }
            case COUNTRY_NAME:
            return {
               ...state,
               filter:action.payload
            }
        default:
            return state;
    }
}