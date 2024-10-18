import CharacterTile from "../characterTile/CharacterTile.tsx";
import { Character } from "./Character.ts";

interface CharacterOverviewProps {
    characters: Character[];
}

const CharacterOverview = ({ characters }: CharacterOverviewProps) => {
    return (
        <div className="characterOverview">
            {characters.map((character, index) => (
                <CharacterTile key={index} name={character.name}
                               // tags={character.tags}
                />
            ))}
        </div>
    );
};

export default CharacterOverview;