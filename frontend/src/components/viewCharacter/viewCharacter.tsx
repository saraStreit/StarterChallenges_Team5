
import {Character} from "../characterOverview/Character.ts";
import BaseStatContainer from "../baseStatContainer/baseStatContainer.tsx";
import StatDetailContainer from "../statDetailContainer/statDetailContainer.tsx";
import {useEffect, useState} from "react";
import {getCharacterByIdUrl, getCharactersUrl} from "../../constants.tsx";

interface viewCharacterProps {
    isOpen: boolean;
    onClose: () => void;
    character: Character;
}
const ViewCharacter = ({ isOpen, onClose, character }: viewCharacterProps) => {
    const [fixedCharacter, setFixedCharacter] = useState(character);
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(getCharacterByIdUrl + character.id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setFixedCharacter(result as Character);
            } catch (error) {
                // setError(error.message);
            }
        };
        if (character.attributes == undefined)
        {
            console.log("did fetch");
            fetchCharacter().then(r => console.log("fetching character" + fixedCharacter.attributes));
        }
    }, [character, fixedCharacter]);

    if (!isOpen) return null;



    console.log(character)
    return (
        <div className="character-view-dialog-overlay">
            <div className={"character-view-dialog-content"}>
            <button className="character-close-button" onClick={onClose}>x</button>
                <div>
                    <BaseStatContainer name={"Wisdom"} number={fixedCharacter.attributes?.wisdom ?? 2} />
                    <BaseStatContainer name={"Strength"} number={fixedCharacter.attributes?.strength ?? 5} />
                    <BaseStatContainer name={"Dexterity"} number={fixedCharacter.attributes?.dexterity ?? -2} />
                    <BaseStatContainer name={"Intelligence"} number={fixedCharacter.attributes?.intelligence ?? 1} />
                    <BaseStatContainer name={"Charisma"} number={fixedCharacter.attributes?.charisma ?? 3} />
                </div>
                <StatDetailContainer character={fixedCharacter}/>
                <div className={"character-basic-details"}>
                    <div className={"basic-item"}>Class: {fixedCharacter.characterClass}</div>
                    <div className={"basic-item"}>Name: {fixedCharacter.name}</div>
                    <div className={"basic-item"}>Gender: {fixedCharacter.gender}</div>
                    <div className={"basic-item"}>Race: {fixedCharacter.race}</div>
                    <div className={"basic-item"}>Armor Class:{fixedCharacter.armor}</div>
                    <div className={"basic-item"}>Speed: {fixedCharacter.speed}</div>
                </div>
            </div>
        </div>
    );
};

export default ViewCharacter;