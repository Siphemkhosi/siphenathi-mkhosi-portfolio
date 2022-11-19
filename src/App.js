import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';
import  NavBar  from './Components/NavBar/NavBar';
function App() {
  return (
    <>
      <div id="nav-bar"></div>
      <div className="App">
        <NavBar />
        <LandingPage/>
      </div>
    </>
  );
}

export default App;
