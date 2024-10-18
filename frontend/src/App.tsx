
import './App.scss'
import Header from "./components/header/Header.tsx";
import CharacterOverview from "./components/characterOverview/CharacterOverview.tsx";
import {Character} from "./components/characterOverview/Character.ts";
import {backendUrl} from "./constants.tsx";
import BiepBupBar from "./components/actionBar/biepBupbar.tsx";
import {useEffect, useState} from "react";

 function App() {

     const [characters, setCharacters] = useState<Character[]>();
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
         const fetchCharacters = async () => {
             try {
                 const response = await fetch(backendUrl);
                 if (!response.ok) {
                     throw new Error('Network response was not ok');
                 }
                 const result = await response.json();
                 setCharacters(result);
             } catch (error) {
                 setError(error.message);
             } finally {
                 setLoading(false);
             }
         };
         fetchCharacters();
     }, []);

     if (loading) return <div>Loading...</div>;
     if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className={"wrapper"}>
        <Header />
          <BiepBupBar />
          <div className={"content"}>
              <h1>Character Overview</h1>
              { characters && <CharacterOverview characters={characters}/> }
          </div>
      </div>
    </>
  )
}

export default App
