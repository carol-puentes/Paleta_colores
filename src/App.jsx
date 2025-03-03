import { useState } from 'react'
import Values from 'values.js';
import './App.css'
import FormColor from './Components/FormColor';
import DisplayColor from './Components/DisplayColor';

function App() {
  const [list, setList] = useState(new Values('#802FDE').all(5));// Crea una lista de colores cercanos al negro y al blanco en esa tonalidad 
  console.log(list);

  return (
      <div className="App"> 
        <FormColor setList={setList} />
        <DisplayColor list={list}/>

    </div>
  )
}

export default App
