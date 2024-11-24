import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import StepOne from "./exercicios/StepOne.tsx"
import ThingsIamExcitedAboutReact from "./exercicios/ThingsExcitedAboutReact.tsx"

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<StepOne />} />
        <Route path="/ThingsIamExcitedAbout" element={<ThingsIamExcitedAboutReact/>}></Route> 
      </Routes>  
    </BrowserRouter>
  )
}

export default App
