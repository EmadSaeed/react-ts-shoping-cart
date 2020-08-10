import {Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/store'><Store /></Route>
      </Routes>
    </div>
  );
}

export default App;
