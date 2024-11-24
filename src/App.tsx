import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import StepOne from "./exercicios/StepOne.tsx"

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<StepOne />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
