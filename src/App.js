import './App.css';
import CatCreator from './components/catCreator';
import CatDisplay from './components/catDisplay';
import {useState} from 'react';

function App() {

  const [cats, setCats] = useState([]);

  return (
    <div className="App">
      <h1>Cool Cat Creator!</h1>
        <CatCreator cats={cats} setCats={setCats}/>
        <CatDisplay cats={cats} setCats={setCats}/>
    </div>
  );
}

export default App;
