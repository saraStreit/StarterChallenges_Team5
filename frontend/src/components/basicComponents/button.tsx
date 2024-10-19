
interface primaryButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryButton = ({ text, onClick }: primaryButtonProps) => {
    return (
        <button className={"primaryButton"} onClick={onClick}>
            <div className={"plus"}>+</div>
            {text}
        </button>
    );
};

export default PrimaryButton;