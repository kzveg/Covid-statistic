import React from "react";
import '../styles/App.css';
import Table from './table';
import SearchCountry from './searchCountry';


const App = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/SARS-CoV-2_%28CDC-23312%29.png/1200px-SARS-CoV-2_%28CDC-23312%29.png'

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