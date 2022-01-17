import React,{useState,useEffect} from "react";
import Statistic from "./statistic";
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from "react-redux";

const Table = ()=>{
    const useStyles = makeStyles((theme) => ({
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }));
    
    const dispatch= useDispatch();
      const classes = useStyles();
      const backdropOpen = useSelector(state=>state.data.backdrop)
      const countryItems = useSelector(state=>state.data.country)
      const [open, setOpen] = useState(false);
      const closeBackdrop = () => {
        dispatch({
            type:"CLOSE_BACKDROP",
            payload:false
        })
      };
 
    useEffect(()=>{
        setOpen(backdropOpen);
    },[backdropOpen])    

    return(
        <div>
            <div>
            <Statistic />
            <Backdrop className={classes.backdrop} open={open} >
               <div className="countryData">
                 <div className="formInformation"  >
                <div id="t1">
                <h1>{countryItems.name}</h1> 
                </div>
                <br />
                <div className="countryText">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko_OsMVPkExZAvGVmDo9Xvb56o5e5cuvAhw&usqp=CAU' alt="born"></img>
                <h4>Total Confirmed </h4>
                <h4>{countryItems.total}</h4>
                </div>
                <br />
                <div className="countryText">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThODvSAAW2MBw_bC-tQqdhjPb3zk8yqtVcIMRaHhEz5J_LWao-AivagRaWEGzIhIfl5c0&usqp=CAU' alt="death"></img>
                <h4>Total Death </h4>
                <h4>{countryItems.deth}</h4>
                </div>
                <br />
                <div className="countryText">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iLspNLA6D0HHt7KZoMYjb0GezDG1Q9z9Yg&usqp=CAU' alt="recovered"></img>
                <h4>Total Recovered </h4>
                <h4>{countryItems.recovered}</h4>
                </div>
                <button onClick={closeBackdrop}> ok </button>
                 </div>
               </div>
            </Backdrop>
            </div>
        </div>
    )
            }


export default Table;