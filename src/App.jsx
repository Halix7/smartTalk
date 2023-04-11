import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Company from "./Components/company";
import Test from "./Components/standardizedtest";
import { BrowserRouter , Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route exact default path="/" element={<Home/>} />
        <Route exact default path="/about" element={<Company/>} />
        <Route exact default path="/test" element={<Test/>} />
        <Route exact default path="*" element={<Home/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
