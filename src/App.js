import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
function App() {
  
  return (
    <>
      <div id="nav-bar"></div>
      <div className="App">
        <NavBar />
        <LandingPage  />
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
