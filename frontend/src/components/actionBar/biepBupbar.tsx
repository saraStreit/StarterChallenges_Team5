
import {Character} from "../characterOverview/Character.ts";
import PrimaryButton from "../basicComponents/button.tsx";

interface biepBupBarProps {
    characters: Character[];
    addCharacter: (characters: Character) => void;
}

const BiepBupBar = ({characters, addCharacter}: biepBupBarProps) => {
    return (
           <div className={"biepBupBar"}>
               {characters.length !== 0 && <div className={"characterCounter"}>{characters.length} characters found</div>}
               <PrimaryButton text={"Add Character"} onClick={() => {addCharacter({ name: "Olga Stöckli"})}}/>
           </div>
    );
};

export default BiepBupBar;