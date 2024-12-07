import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import formatNum from 'format-num';

function App() {
   const [veri, setVeri] = useState("");
   const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[date]))
    .catch(err=>console.log(err))

  },[date]);


  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className='col-md-8 mx-auto mt-4'>
              <h2 className='text-white display-6 text-center'>Turkiye Covid-19 Search Engine <br /><span className="fs-4"> ( Enter 2021 Date )</span> </h2>
              <input className="form-control mt-3" type="text" placeholder="dd/mm/yyyy" onChange={(e)=>setDate(e.target.value)}/>
              <table class="table table-striped mt-4">
              <thead>
               <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Total Tests</th>
                  <th scope="col">Total Patients</th>
                  <th scope="col">Total Deaths</th>
               </tr>
              </thead>
             <tbody>
                <tr >
                   <th className={veri===undefined ? "bg-danger" : "bg-success"} scope="row">{date}</th>
                      <td className={veri===undefined ? "bg-danger" : "bg-success"}>{veri===undefined ? "Data waiting" : formatNum(veri.totalTests)}</td>
                      <td className={veri===undefined ? "bg-danger" : "bg-success"}>{veri===undefined ? "Data waiting" : formatNum(veri.totalPatients)}</td>
                      <td className={veri===undefined ? "bg-danger" : "bg-success"}>{ veri===undefined ? "Data waiting": formatNum(veri.totalDeaths)}</td>
               </tr>
              </tbody>
          </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
