import NameContainer from "./nameContainer/nameContainer.tsx";
import ImageContainer from "./imageContainer/imageContainer.tsx";
import TagContainer from "./tagContainer/tagContainer.tsx";


interface characterTileProps {
    name: string;
    // tags: string[];
}

const CharacterTile = ({name, tags} : characterTileProps) => {

    return (
        <div className={"characterTile"}>
            <ImageContainer name={"bupppp"} />
            {/*<TagContainer tags={tags} />*/}
            <NameContainer name={name} />
        </div>
    )
}
export default CharacterTile;