
interface imageContainerProps {
    name: string;
}

const ImageContainer = ({name} : imageContainerProps) => {

    return (
        <div className={"imageContainer"}>
            <div className={"imagePlaceholder"}>
                <img src="/CharacterSampleimage.png" alt="image" className={"imagePlaceholder"}/>
            </div>
        </div>
    )
}
export default ImageContainer;