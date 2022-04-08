import Header from './components/UserInterface/Header';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UserInterface/Search';

function App() {

  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true); //it will update the webpage when data is ready
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`); // get result from the server by using this api and store it into "result" variable
  
    // console.log(result.data); // it will print "data" object which is stored into result variable from "result" 
    // console.log(items);
    
    setitems(result.data); // Here we are initializing the state
    setisLoading(false); // it will not update after that means it will not render because it acts as a "componentwillupdate"
    }

    fetchItems();

  }, [query]) // Here  useEffect will run again and again when user type any keyword and that keyword is set to query

  
  return (
    <div className="container">
      <Header />
      
      <Search getQuery = { (q) => setQuery(q)}/> {/*/ Here we are setting the query by setQuery and whatever value will user enter into search bar which is accessed from ""search"" component, will be the value of setQuery. */}

      <CharacterGrid isLoading = {isLoading} items = {items}/>
      

    </div>
  );
}

export default App;
