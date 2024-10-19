import { useRef, useEffect, useState } from 'react';
import CharacterTile from "../characterTile/CharacterTile.tsx";
import { Character } from "./Character.ts";

interface CharacterOverviewProps {
    characters: Character[];
    setCurrentCharacter: (character: Character) => void;
}

const CharacterOverview = ({ characters, setCurrentCharacter }: CharacterOverviewProps) => {
    const overviewRef = useRef<HTMLDivElement | null>(null);
    const [overviewWidth, setOverviewWidth] = useState<number>(0);

    useEffect(() => {
        if (overviewRef.current) {
            const { width } = overviewRef.current.getBoundingClientRect();
            setOverviewWidth(width);
            overviewRef.current.style.setProperty('--overview-width', `${width}px`);

            const startOfContentPosition = width // Example: 10% of the overview width
            overviewRef.current.style.setProperty('--start-of-content', `${startOfContentPosition}px`);
        }
    }, [characters]);

    return (
        <div className="characterOverview" ref={overviewRef}>
            {characters.map((character, index) => (
                <CharacterTile key={index} character={character} setCurrentCharacter={setCurrentCharacter} />
            ))}
        </div>
    );
};

export default CharacterOverview;