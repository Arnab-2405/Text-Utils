import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import About from './components/About';
// import Error from './components/Error';

function App() {

  const [mode,setMode]=useState("light");

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor= "black";
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor= "#f2f3f5";
    }

  }
  return (
    <>
    
      <div className="container my-4">
      {/* <BrowserRouter> */}
      <Navbar title="Text Utils" about="AboutUs" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter text to analyse" mode={mode}/>
        {/* <Routes> */}
            {/* <Route path='/' element={<TextForm heading="Enter text to analyse" mode={mode}/>}></Route> */}
            {/* <Route path='/about' element={<About/>}></Route> */}
            {/* <Route path='*' element={<Error/>}></Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
