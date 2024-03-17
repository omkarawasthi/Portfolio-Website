import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar/NavBar";
import DataProvider from './context/DataProvider';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <DataProvider>
      <div className="App" style={{ background: "black", width: "100%" }}>
        <Router>
          <NavBar />
          <AnimatePresence>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;