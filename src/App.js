import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [allPokemon, setAllPokemon] = useState(null);


  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    // .then(response => console.log(response))
    .then(response =>  {setAllPokemon(response.data.results)})
    .catch((err) => console.log("An error occured", err))
  }, []);

  return (
    <div>
        {
          allPokemon ?
          <ul>{allPokemon.map((item, i) => <li key={i}>{item.name}</li> )}</ul> :
        ''
      }
      
    </div>
  );
}

export default App;
