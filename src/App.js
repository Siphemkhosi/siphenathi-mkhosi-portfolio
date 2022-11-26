import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { useRef, useState } from "react";
function App() {
  const ref = useRef(null);
  const [query, setQuery] = useState(ref);
  return (
    <>
      <div id="nav-bar"></div>
      <div className="App">
        <NavBar onQuery={setQuery} />
        <LandingPage query={query} />
      </div>
    </>
  );
}

export default App;
