// import PrimaryButton from "../basicComponents/button.tsx";
// import {Character} from "../characterOverview/Character.ts";
// import {useState} from "react";
//
// interface createCharacterProps {
//     addCharacter: (character: Character) => void;
// }
// const CreateCharacter = ({addCharacter} : createCharacterProps) => {
//     const [inputValue, setInputValue] = useState('');
//
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };
//
//     return (
//         <div className={"createCharacter"}>
//             <div className={"createCharacterTitle"}>Create Character</div>
//             <div className={"createCharacterForm"}>
//                 <input type="text" value={inputValue} onChange={handleInputChange}/>
//             </div>
//             <div className={"createCharacterButton"}>
//                 <PrimaryButton text={"Create Character"} onClick={() => {addCharacter({name: inputValue})}}/>
//             </div>
//         </div>
//     );
// };
//
// export default CreateCharacter;

// Dialog.tsx

import PrimaryButton from "../basicComponents/button.tsx";
import {Character, CharacterClass, CharacterRace} from "../characterOverview/Character.ts";
import {useState} from "react";

interface createCharacterDialogProps {
    isOpen: boolean;
    onClose: () => void;
    createCharacter: (character : Character) => void;
}
const CreateCharacterDialog = ({ isOpen, onClose, createCharacter }: createCharacterDialogProps) => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [classInputValue, setClassInputValue] = useState(CharacterClass.Barbarian);
    const [raceInputValue, setRaceInputValue] = useState(CharacterRace.Dwarf);
    const [genderInput, setGenderInput] = useState('');

    const [wisdom, setWisdom] = useState(10);
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [charisma, setCharisma] = useState(10);


    if (!isOpen) return null;
    const handleInputChange = (event) => {
        if (event.target.value)
        {
            setNameInputValue(event.target.value);
        }
    }

    const handleGenderInputChange = (event) => {
        if (event.target.value)
        {
            setGenderInput(event.target.value);
        }
    }

    const handleClassChange = (event) => {
        if (event.target.value)
        {
            setClassInputValue(event.target.value);
        }
    }

    const handleRaceChange = (event) => {
        if (event.target.value)
        {
            setRaceInputValue(event.target.value);
        }
    }

    const getAttributes = () => {
        return {
            wisdom: wisdom,
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            charisma: charisma,
            initiative: 1
        }
    }

    const attributes = getAttributes();

    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <button className="dialog-close" onClick={onClose}>X</button>
                <div className={"dialog-content-content"}>
                    <div className="dialog-title">Add Character</div>
                    <div className={"dialog-input"}>
                        <div>Name:</div>
                        <input className={"dialog-input-box"} type="text" onChange={handleInputChange}
                               value={nameInputValue}/>
                    </div>
                    <div className={"dialog-input"}>
                        <div>Gender:</div>
                        <input className={"dialog-input-box"} type="text" onChange={handleGenderInputChange}
                               value={genderInput}/>
                    </div>
                    <select className={"classSelect"} value={classInputValue} onChange={handleClassChange}>
                        {Object.values(CharacterClass).map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                    <select className={"classSelect"} value={raceInputValue} onChange={handleRaceChange}>
                        {Object.values(CharacterRace).map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
                <div className={"stats-input"}>
                    <div>Wisdom:</div>
                    <input type="number" value={wisdom} onChange={(event) => setWisdom(parseInt(event.target.value))}/>
                    <div>Strength:</div>
                    <input type="number" value={strength} onChange={(event) => setStrength(parseInt(event.target.value))}/>
                    <div>Dexterity:</div> <input type="number" value={dexterity} onChange={(event) => setDexterity(parseInt(event.target.value))}/>
                    <div>Constitution:</div> <input type="number" value={constitution} onChange={(event) => setConstitution(parseInt(event.target.value))}/>
                    <div>Intelligence:</div> <input type="number" value={intelligence} onChange={(event) => setIntelligence(parseInt(event.target.value))}/>
                    <div>Charisma:</div> <input type="number" value={charisma} onChange={(event) => setCharisma(parseInt(event.target.value))}/>
                </div>
                <PrimaryButton text={"createCharacter"} onClick={() => createCharacter({name: nameInputValue, characterClass: classInputValue, gender: genderInput, level: 1, race: raceInputValue, attributesDto: attributes, armor: 12, speed: 10})}/>
            </div>
        </div>
    );
};

export default CreateCharacterDialog;