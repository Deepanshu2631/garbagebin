

import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import SimpleMap from "./SimpleMap";

import "./comp/App.css"

function FApp() {

  const history = useHistory();
  const [data, set_data] = useState();

  useEffect(() => {
    fetch("https://nodemcudeep-default-rtdb.firebaseio.com/.json")
    .then(response => response.json())
    .then(data => set_data(data))
  },[data])
if(!data){
  return(
<h1>Loading</h1>

  );
}
  return (
    <div className="App">
{Object.values(data.Bins).map((e,index=0)=>{
       return (
       <div className={(e.BinLevel > 74)||(e.GasData>401) ? "comp color_red" : "comp color_green"} key={index+1} onClick={()=>history.push("/map/"+e.Latt+"a"+e.Longg+"a"+e.BinNo)}>
          {console.log(e)}
          <h4>Bin:- {e.BinNo} </h4>
        <h1>Gas Status:- {e.GasLevel} </h1>
       
        {/* <h1>Gas Sensor data {e.GasData} </h1> */}
        
        <h1>Garbage level {e.BinLevel} % fill</h1>
        
        


        <div className="box"></div>


         </div>
     );})}



    </div>
  );
}

export default FApp;