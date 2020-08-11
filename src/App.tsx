import {Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/store' element={<Store />}/>
        
      </Routes>
    </div>
  );
}

export default App;
