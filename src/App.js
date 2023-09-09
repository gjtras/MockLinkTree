import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Add as Add} from './components/add/add';
import { Links as Links} from './components/links/links';
import { Navbar as Navbar} from "./components/navbar/navbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<Links />} />
          <Route path="/add" element={ <Add /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
