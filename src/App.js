import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <Intro/>

      <Footer/>
    </div>
  );
}

export default App;
