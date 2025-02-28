import { useState } from 'react'

import './App.css'
import {Route, Routes} from "react-router-dom"
import ServerDown from './pages/errors/ServerDown'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)
  const [isServerDown, setIsServerDown] = useState<boolean>(false)

  return (
    <>
      {!isServerDown ? (
        <>
          
          <Routes>
            <Route path="/homepage" element= {<Home/>}/>
            
          </Routes>
        </>
      ) : (
        <ServerDown />
      )}
    </>
  );

}
export default App
