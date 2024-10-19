import {Character} from "../../characterOverview/Character.ts";

interface imageContainerProps {
    name: string;
    character: Character;
    setCurrentCharacter: (character: Character) => void;
}

const ImageContainer = ({name, character, setCurrentCharacter} : imageContainerProps) => {
console.log(character);
console.log("smth");
    return (
        <div className={"imageContainer"} onClick={() => setCurrentCharacter(character)}>
            <div className={"imagePlaceholder"}>
                <img src="/CharacterSampleimage.png" alt="image" className={"imagePlaceholder"}/>
            </div>
        </div>
    )
}
export default ImageContainer;