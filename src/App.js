import All from "./all";
import { Routes, Route } from "react-router-dom";
import Contact from "./contact/contact";
import Register from "./register/register";
import FAQ from "./faqs/faqs";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<All/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/faqs" element={<FAQ/>}/>
    </Routes>
    </div>
  );
}

export default App;
