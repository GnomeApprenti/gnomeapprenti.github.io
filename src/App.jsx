import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar'
import Footer from './components/Footer'


import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className=" font-metal">
      <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
      <NavBar/>
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={ <Home/> } /> 
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}