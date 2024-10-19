import './App.scss'
import Header from "./components/header/Header.tsx";
import CharacterOverview from "./components/characterOverview/CharacterOverview.tsx";
import { Character } from "./components/characterOverview/Character.ts";
import {createCharacterUrl, getCharactersUrl} from "./constants.tsx";
import BiepBupBar from "./components/actionBar/biepBupbar.tsx";
import { useEffect, useState } from "react";
import CreateCharacterDialog from "./components/createCharacter/createCharacter.tsx";
import ViewCharacter from "./components/viewCharacter/viewCharacter.tsx";
import createCharacter from "./components/createCharacter/createCharacter.tsx";

function App() {
    const [characters, setCharacters] = useState<Character[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCreateDialogOpen, setisCreateDialogOpen] = useState(false);
    const openCreateDialog = () => setisCreateDialogOpen(true);
    const closeCreateDialog = () => setisCreateDialogOpen(false);

    const [isViewDialogOpen, setisViewDialogOpen] = useState(false);
    // const openViewDialog = () => setisViewDialogOpen(true);
    const closeViewDialog = () => setisViewDialogOpen(false);

    const openViewDialog = (characterId: number) => {
        setCurrentCharacter(characters?.find(character => character.id === characterId));
        setisViewDialogOpen(true);
    }
    const [currentCharacter, setCurrentCharacter] = useState<Character>();

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
        if (!characters)
        {
            fetchCharacters().then(r => console.log(r));
        }
        if (characters && characters.length == 0)
        {
            fetchCharacters().then(r => console.log(r));
        }
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
            setCharacters([]);

        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="startOfContent">
                        <h1>My Characters</h1>
                        {characters && <BiepBupBar characters={characters} addCharacter={openCreateDialog} />}
                    </div>
                    <button onClick={() => openViewDialog(2)}>Create Character</button>
                    <div className="centeredContent">
                        {characters && <CharacterOverview characters={characters} />}
                    </div>
                </div>
            </div>
            <ViewCharacter isOpen={isViewDialogOpen} onClose={closeViewDialog} createCharacter={addCharacter} />
            <CreateCharacterDialog isOpen={isCreateDialogOpen} onClose={closeCreateDialog} createCharacter={addCharacter} />
        </>
    );
}

export default App;