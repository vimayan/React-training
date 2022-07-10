import './App.css';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <div className = 'blur' style = {{top:'18%',right:'0px'}}></div>
      <div className = 'blur' style = {{top:'36%',left:'-100px'}}></div>
       <Home/>
    </div>
  );
}

export default App;
