
import {Character} from "../characterOverview/Character.ts";
import BaseStatContainer from "../baseStatContainer/baseStatContainer.tsx";
import StatDetailContainer from "../statDetailContainer/statDetailContainer.tsx";

interface viewCharacterProps {
    isOpen: boolean;
    onClose: () => void;
    character: Character;
}
const ViewCharacterProps = ({ isOpen, onClose, character }: viewCharacterProps) => {
    if (!isOpen) return null;
    return (
        <div className="character-view-dialog-overlay">
            <div className={"character-view-dialog-content"}>
            <button className="character-close-button" onClick={onClose}>CLOSE HERE</button>
                <div>
                    <BaseStatContainer name={"Wisdom"} number={character.characterBaseStats?.wisdom ?? 0} />
                    <BaseStatContainer name={"Strength"} number={character.characterBaseStats?.strength ?? 0} />
                    <BaseStatContainer name={"Dexterity"} number={character.characterBaseStats?.dexterity ?? 0} />
                    <BaseStatContainer name={"Intelligence"} number={character.characterBaseStats?.intelligence ?? 0} />
                    <BaseStatContainer name={"Charisma"} number={character.characterBaseStats?.charisma ?? 0} />
                </div>
                <StatDetailContainer character={character}/>
            </div>
        </div>
    );
};

export default ViewCharacterProps;