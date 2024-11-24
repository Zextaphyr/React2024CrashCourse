import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";

import StepOne from "./exercicios/StepOne.tsx"
import ThingsIamExcitedAboutReact from "./exercicios/ThingsExcitedAboutReact.tsx"
import ReactFunFacts from "./challenges/ReactFunFacts.tsx"
import TravelJournal from "./challenges/TravelJournal.tsx"

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<StepOne />} />
        <Route path="/ThingsIamExcitedAbout" element={<ThingsIamExcitedAboutReact/>}></Route> 
        <Route path="/ReactFunFacts" element={<ReactFunFacts/>}/>
        <Route path="/TravelJournal" element={<TravelJournal/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
