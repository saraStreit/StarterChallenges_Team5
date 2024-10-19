import NameContainer from "./nameContainer/nameContainer.tsx";
import ImageContainer from "./imageContainer/imageContainer.tsx";
import TagContainer from "./tagContainer/tagContainer.tsx";
import {Character} from "../characterOverview/Character.ts";
// import TagContainer from "./tagContainer/tagContainer.tsx";


interface characterTileProps {
   character: Character;
   setCurrentCharacter: (character: Character) => void;
}

const CharacterTile = ({character, setCurrentCharacter} : characterTileProps) => {
    return (
        <div className={"characterTile"} onClick={() => setCurrentCharacter(character)}>
            <ImageContainer name={"bupppp"} character={character} setCurrentCharacter={setCurrentCharacter} />
            <TagContainer tags={[`${character.race}`, `${character.class}`, `${character.level}lvl`]} />
            <NameContainer name={character.name} />
        </div>
    )
}
export default CharacterTile;