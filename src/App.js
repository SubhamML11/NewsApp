//d0d867cbdbf34931ad8d76a3851eb428
import './App.css';

import React,{useState} from 'react';
import NavBar from './Components/NavBar';
import News   from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App=()=> {
  const pageSize=12;

  const [progress,setProgress]=useState(0)
  
    return (
      <div>
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress}   key="business" pageSize={5} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress}   key="science" pageSize={5} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress}   key="sports" pageSize={5} country="in" category="sports"/>}></Route>
          <Route path="/health" element={<News setProgress={setProgress}   key="health" pageSize={5} country="in" category="health"/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress}   key="technology" pageSize={5} country="in" category="technology"/>}></Route>
        </Routes>
        
      </Router>
      </div>
    )
  
}
export default App; 
