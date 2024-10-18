

interface tagContainerProps {
    tags: string[];
}

const CharacterTile = ({tags} : tagContainerProps) => {

    return (
        <div className={"tagContainer"}>
            {tags.map((tag, index) => (
                <div key={index} className={"tag"}>{tag}</div>
            ))}
        </div>
    )
}
export default CharacterTile;