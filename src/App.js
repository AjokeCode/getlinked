import All from "./all";
import { Routes, Route } from "react-router-dom";
import Contact from "./contact/contact";
import Register from "./register/register";
import FAQ from "./faqs/faqs";
import Ann from "./announcement-section/ann";
import Intro from "./intro-section/intro";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<All/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/faqs" element={<FAQ/>}/>
      <Route path="/timeline" element={<Ann/>}/>
      <Route path="/overview" element={<Intro/>}/>
    </Routes>
    </div>
  );
}

export default App;
