import './App.scss'
import Header from "./components/header/Header.tsx";
import CharacterOverview from "./components/characterOverview/CharacterOverview.tsx";
import { Character } from "./components/characterOverview/Character.ts";
import {createCharacterUrl, getCharactersUrl} from "./constants.tsx";
import BiepBupBar from "./components/actionBar/biepBupbar.tsx";
import { useEffect, useState } from "react";
import CreateCharacterDialog from "./components/createCharacter/createCharacter.tsx";
import ViewCharacter from "./components/viewCharacter/viewCharacter.tsx";

function App() {
    const [characters, setCharacters] = useState<Character[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCreateDialogOpen, setisCreateDialogOpen] = useState(false);
    const openCreateDialog = () => setisCreateDialogOpen(true);
    const closeCreateDialog = () => setisCreateDialogOpen(false);

    const [isViewDialogOpen, setisViewDialogOpen] = useState(false);
    // const openViewDialog = () => setisViewDialogOpen(true);
    const closeViewDialog = ()  =>{
        setCurrentCharacter(undefined);
        setisViewDialogOpen(false);
    }

    const openViewDialog = (characterId: number) => {
        setCurrentCharacter(characters?.find(character => character.id === characterId));
        setisViewDialogOpen(true);
    }
    const [currentCharacter, setCurrentCharacter] = useState<Character>();

    const setCurrentCharacterView = (character: Character) => {
        setCurrentCharacter(character);
        openViewDialog(character.id ?? 0);
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(getCharactersUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log("result", result);
                setCharacters(result as Character[]);
            } catch (error) {
                setError(error.message);
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
        if(currentCharacter && currentCharacter.attributesDto == undefined)
        {
            const tempAttributes = {
                wisdom: 10,
                strength: 15,
                dexterity: 12,
                constitution: 8,
                intelligence: 2,
                charisma: 10,
                initiative: 2
            }
            setCurrentCharacter({...currentCharacter, attributesDto: tempAttributes});
        }

    }, [characters, currentCharacter]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const addCharacter = async (character : Character) => {
        try {
            console.log(JSON.stringify(character));
            const response = await fetch(createCharacterUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(character),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
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
                    {/*<button onClick={() => openViewDialog(1)}>Create Character</button>*/}
                    <div className="centeredContent">
                        {characters && <CharacterOverview characters={characters} setCurrentCharacter={setCurrentCharacterView}/>}
                    </div>
                </div>
            </div>
            {currentCharacter && <ViewCharacter isOpen={isViewDialogOpen} onClose={closeViewDialog} character={currentCharacter} />}
            <CreateCharacterDialog isOpen={isCreateDialogOpen} onClose={closeCreateDialog} createCharacter={addCharacter} />
        </>
    );
}

export default App;