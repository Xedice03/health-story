 import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css"; 
import { Routes, Route } from "react-router-dom"; 
 
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Home from "./pages/HOME"; 
import Shop from "./pages/SHOP"; 
import Blog from "./pages/BLOG"; 
import FAQ from "./pages/FAQ"; 
 
function App() { 
  return ( 
    <> 
     <Header /> 
      <main> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/faq" element={<FAQ />} /> 
        </Routes> 
      </main> 
      <Footer /> 
      </> 
  ); 
} 
export default App;