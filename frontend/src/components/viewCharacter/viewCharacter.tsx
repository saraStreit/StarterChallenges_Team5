
import {useState} from "react";
import {Character} from "../characterOverview/Character.ts";

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
            biepBupHä
            </div>
        </div>
    );
};

export default ViewCharacterProps;