 import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css"; 
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home"; 
import Shop from "./pages/Shop"; 
import Blog from "./pages/Blog"; 
import FAQ from "./pages/Faq"; 

 
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