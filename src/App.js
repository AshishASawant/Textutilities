import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea"
import Contact from "./Components/Contact"
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState(null)

  function toogleswitch() {
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#00093c"
      document.body.style.color="white"
      showalert('Dark Mode has been enabled')
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert('Light Mode has been enabled')
    }
  }

  function showalert(msg){
      setalert(msg)

      setTimeout(() => {
        showalert(null)
      }, 2000);
  }
  
  return (
    <>
    <Router>
      <Navbar title="Text Utilities" mode={mode}  toogleswitch={toogleswitch}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Textarea mode={mode} showalert={showalert}/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
