// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Cards from './Components/card'
import Footer from './Components/footer'
import { useState } from 'react'
import Alart from './Components/alart';

function App() {



  const [alart, setAlart] = useState("");


  function showAlart(massage, type) {

    setAlart({
      msg: massage,
      type: type
    })

    setTimeout(() => {
      setAlart(null)
    }, 1500);
  }

  let [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlart("Dark Mode", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlart("Light Mode", "success")

    }
  }





  return (
    <>
      <Navbar Mode={mode} ToggleMode={toggleMode}></Navbar>
      <Cards Mode={mode} Alart={showAlart}></Cards>
      <Alart Alart={alart}></Alart>
      <Footer Mode={mode}></Footer>

    </>

  )
}

export default App
