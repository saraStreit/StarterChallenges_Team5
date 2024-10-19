import './App.scss';
import Header from "./components/header/Header.tsx";
import CharacterOverview from "./components/characterOverview/CharacterOverview.tsx";
import { Character } from "./components/characterOverview/Character.ts";
import {createCharacterUrl, getCharactersUrl} from "./constants.tsx";
import BiepBupBar from "./components/actionBar/biepBupbar.tsx";
import { useEffect, useState } from "react";

function App() {
    const [characters, setCharacters] = useState<Character[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(getCharactersUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCharacters(result);
            } catch (error) {
                // setError(error.message);
            } finally {
                setLoading(false);
            }
        };
            fetchCharacters().then(r => console.log(r));
    }, [characters]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    const addCharacter = async (character : Character) => {
        try {
            const response = await fetch(createCharacterUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(character),
            });
            setCharacters([character]);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            console.log(result);
            // setData([...data, result]);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    return (
        <>
            <div className={"wrapper"}>
                <Header />
                <div className={"content"}>
                    <div className={"startOfContent"}>
                        <h1>My Characters</h1>
                        { characters && <BiepBupBar characters={characters} addCharacter={addCharacter} />}
                    </div>
                    <div className={"centeredContent"}>
                        {characters && <CharacterOverview characters={characters} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;