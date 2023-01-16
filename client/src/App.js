import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/loginregister" element={<LoginRegister/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
