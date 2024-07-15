import logo from './logo.svg';
import './App.css';
import FCCounter from './components/FCCounter';
import { useState } from 'react';
import CCCounter from './components/CCCounter';

function App() {

  let [show,setShow]=useState()
  return (
    <div className="App">
      <button onClick={()=>{
        if(show==true){
          setShow(false);
        }else{
          setShow(true);
        }
      }}>Show/Hide</button>
      <br></br>
      <br></br>
     {show==true?<FCCounter></FCCounter>:null}
     {show==true?<CCCounter></CCCounter>:null}
    </div>
  );
}
export default App;
