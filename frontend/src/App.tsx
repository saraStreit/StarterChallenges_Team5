
import './App.scss'
import Header from "./components/header/Header.tsx";
import CharacterOverview from "./components/characterOverview/CharacterOverview.tsx";
import {Character} from "./components/characterOverview/Character.ts";

function App() {
    const characterA: Character = {
        name: "Minta Bonbon",
        tags: ["Barbarian", "Tiefling", "Lvl4"]
    }
    const characterB: Character = {
        name: "Heribert Hohenheim",
        tags: ["Dwarf", "Druid", "Lvl900"]
    }
    const characterc: Character = {
        name: "Crazy Chicken",
        tags: ["Chicken", "Fighter", "Lvl1"]
    }
    const characterd: Character = {
        name: "Hieronimus",
        tags: ["En", "astrengends", "Chind"]
    }
    const characters: Character[] = [characterA, characterB, characterc, characterd];

  return (
    <>
      <div className={"wrapper"}>
        <Header />
          <div className={"content"}>
              <h1>Character Overview</h1>
              <CharacterOverview characters={characters}/>
          </div>
      </div>
    </>
  )
}

export default App
