import React, { useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";

const SearchCountry = ()=>{
  const dispatch = useDispatch();
const[inputCountry,setInputCountry]= useState('')

  const handlyChange=(e)=> {
    setInputCountry(e.target.value);
    dispatch({
      type:'COUNTRY_NAME',
      payload:e.target.value
    })
  }

  return (
    <div className='formInput'>
      <input 
      type="text" 
      placeholder="Search ...."
      value={inputCountry}
      onChange={handlyChange}
      id="inputField"
      />
        <SearchIcon id='inputIcon' />
    </div>
  );
}


export default SearchCountry;