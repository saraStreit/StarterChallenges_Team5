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
import {Character} from "../characterOverview/Character.ts";
import {useState} from "react";

interface createCharacterDialogProps {
    isOpen: boolean;
    onClose: () => void;
    createCharacter: (character : Character) => void;
}
const CreateCharacterDialog = ({ isOpen, onClose, createCharacter }: createCharacterDialogProps) => {
    const [inputValue, setInputValue] = useState('');
    if (!isOpen) return null;
    const handleInputChange = (event) => {
        if (event.target.value)
        {
            setInputValue(event.target.value);
        }
    }


    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <button className="dialog-close" onClick={onClose}>X</button>
                <div className={"dialog-content-content"}>
                <div className="dialog-title">Create Character</div>
                    <div className={"dialog-input"}>
                <div>Name:</div>  <input className={"dialog-input-box"} type="text" onChange={handleInputChange} value={inputValue} defaultValue={"Helga"}/>
                    </div>
                <select className={"classSelect"}>
                    <option value="1">Barbarian</option>
                    <option value="2">Mage</option>
                    <option value="3">Rouge</option>
                    <option value="4">Warrior</option>
                    <option value="5">Paladin</option>
                    <option value="6">Priest</option>
                    <option value="7">Druid</option>
                    <option value="8">Bard</option>
                </select>
                </div>

                <PrimaryButton text={"createCharacter"} onClick={() => createCharacter({name: inputValue})}/>
            </div>
        </div>
    );
};

export default CreateCharacterDialog;