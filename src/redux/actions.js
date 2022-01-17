
export const GET_FIRST_DATA = 'GET_FIRST_DATA';
export const GET_COUNTRY = 'GET_COUNTRY';
export const CLOSE_BACKDROP = 'CLOSE_BACKDROP';
export const COUNTRY_NAME = 'COUNTRY_NAME';


export const getFirstData = () => dispatch => {
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'GET_FIRST_DATA',
            payload: data.Countries
        }))
};