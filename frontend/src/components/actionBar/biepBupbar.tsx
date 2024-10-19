
import {Character} from "../characterOverview/Character.ts";
import PrimaryButton from "../basicComponents/button.tsx";
import CreateCharacter from "../createCharacter/createCharacter.tsx";

interface biepBupBarProps {
    characters: Character[];
    addCharacter: (characters: Character) => void;
}

const renderCreateCharacter = (addCharacter: (character: Character) => void) => {
    return (
        <CreateCharacter addCharacter={addCharacter}/>
    )
}

const BiepBupBar = ({characters, addCharacter}: biepBupBarProps) => {
    return (
           <div className={"biepBupBar"}>
               {characters.length !== 0 && <div className={"characterCounter"}>{characters.length} characters found</div>}
               {/*<PrimaryButton text={"Add Character"} onClick={() => {addCharacter({ name: "Olga Stöckli"})}}/>*/}
               <PrimaryButton text={"Add Character"} onClick={() => renderCreateCharacter(addCharacter)}/>
           </div>
    );
};

export default BiepBupBar;