import React,{useState,useEffect} from "react";
import DataTable,{createTheme} from 'react-data-table-component';
import { useSelector,useDispatch } from "react-redux";
import {getFirstData} from '../redux/actions';

createTheme('solarized', {
    text: {
      primary: '#000',
      secondary: '#2aa198',
    },
    background: {
      default: '#fff',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
      solid: 3
    },   
  }, 'dark');

const columns = [
    {
        name: '№',
        cell: (row, index) => index,
    },
    {
        name: 'Country',
        selector: row => row.Country,
        sortable: true,
    },
    {
        name: 'Total Confirmed',
        selector: row => row.TotalConfirmed,
        sortable: true,
    },
];

const Statistic = ()=>{
    const dispatch = useDispatch();
    const data = useSelector(state=>state.data.items)
    const filterCountry = useSelector(state=>state.data.filter)
    const [items,setItems]=useState(data);

    useEffect(() => {
        dispatch(getFirstData())
    }, [dispatch])

    useEffect(()=>{
        setItems(data);
    },[data])

    useEffect(()=>{
      setItems(data.filter(el=>el.Country.includes(filterCountry)));
  },[filterCountry])
  
    const showСountryStatistics=(e)=>{
      const country  ={
          name:e.Country,
          total:e.TotalConfirmed,
          deth:e.TotalDeaths,
          recovered: e.TotalRecovered
      }
      dispatch({
          type:'GET_COUNTRY',
          payload:{
              country:country,
              backdrop:true
            }
      })
     }

    return(
            <DataTable
            columns={columns}
            data={items}
            theme="solarized"
            onRowClicked={showСountryStatistics}/>
    )
}

export default Statistic;