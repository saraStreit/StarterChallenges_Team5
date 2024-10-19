import NameContainer from "./nameContainer/nameContainer.tsx";
import ImageContainer from "./imageContainer/imageContainer.tsx";
import TagContainer from "./tagContainer/tagContainer.tsx";
import {Character} from "../characterOverview/Character.ts";
// import TagContainer from "./tagContainer/tagContainer.tsx";


interface characterTileProps {
   character: Character;
}

const CharacterTile = ({character} : characterTileProps) => {
    return (
        <div className={"characterTile"}>
            <ImageContainer name={"bupppp"} />
            <TagContainer tags={[`${character.race}`, `${character.class}`, `${character.level}lvl`]} />
            <NameContainer name={character.name} />
        </div>
    )
}
export default CharacterTile;