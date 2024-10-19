
import {useState} from "react";
import {Character} from "../characterOverview/Character.ts";

interface viewCharacterProps {
    isOpen: boolean;
    onClose: () => void;
    createCharacter: (character : Character) => void;
}
const ViewCharacterProps = ({ isOpen, onClose, createCharacter }: viewCharacterProps) => {
    if (!isOpen) return null;
    return (
        <div className="character-view-dialog-overlay">
            <div className={"character-view-dialog-content"}>
            <button className="character-close-button" onClick={onClose}>CLOSE HERE</button>
            biepBupHä
            </div>
            {/*// close*/}
        </div>
    );
};

export default ViewCharacterProps;