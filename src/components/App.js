import React from "react";
import '../styles/App.css';
import Table from './table';
import SearchCountry from './searchCountry';


const App = () => {
    const url = 'https://thumbs.dreamstime.com/b/coronavirus-red-vector-icon-ncov-bacteria-isolated-white-background-covid-wuhan-corona-virus-disease-sign-sars-pandemic-concept-175658585.jpg'

    return (
       <div className="app">
            <div className="serch" >
                <img className="covidImg" src={url} alt="covid" alt="covid 19" />
                <h1 id="statistisName"> STATISTIC </h1>
                <SearchCountry />
           </div>
           <div className="statistic">
               <Table />
           </div>
       </div>
    );

}

export default App;