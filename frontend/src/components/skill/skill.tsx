
interface statDetailContainerProps {
    name: string,
    modifier: number,
}

const Skill = ({ name, modifier }: statDetailContainerProps) => {
    return (
        <div className={"skill"}>
            <div>{name}</div>
            <div className={"skillModifyerContainer"}>{modifier}</div>
        </div>
    );
};

export default Skill;