

interface nameContainer {
    name: string;
}

const CharacterTile = ({name} : nameContainer) => {

    return (
        <div className={"nameContainer"}>
            <div className={"nameText"}>{name}</div>
        </div>
    )
}
export default CharacterTile;