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

interface createCharacterDialogProps {
    isOpen: boolean;
    onClose: () => void;
    createCharacter: (character : Character) => void;
}
const CreateCharacterDialog = ({ isOpen, onClose, createCharacter }: createCharacterDialogProps) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <button className="dialog-close" onClick={onClose}>X</button>
                <div>some content</div>
                <PrimaryButton text={"createCharacter"} onClick={() => createCharacter({name: "biebediBabedi"})}/>
            </div>
        </div>
    );
};

export default CreateCharacterDialog;