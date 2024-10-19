import {Character} from "../characterOverview/Character.ts";
// import TagContainer from "./tagContainer/tagContainer.tsx";


interface baseStatContainerProps {
    name: string;
    number: number;
}

const BaseStatContainer = ({name, number} : baseStatContainerProps) => {
    const getModifyer = (number: number) => {
        if(number === 0) {
            return -5;
        }
        if (number === 1) {
            return -5;
        } else if (number === 2 || number === 3) {
            return -4;
        } else if (number === 4 || number === 5) {
            return -3;
        } else if (number === 6 || number === 7) {
            return -2;
        } else if (number === 8 || number === 9) {
            return -1;
        } else if (number === 10 || number === 11) {
            return 0;
        } else if (number === 12 || number === 13) {
            return 1;
        } else if (number === 14 || number === 15) {
            return 2;
        } else if (number === 16 || number === 17) {
            return 3;
        } else if (number === 18 || number === 19) {
            return 4;
        } else if (number === 20 || number === 21) {
            return 5;
        } else if (number === 22 || number === 23) {
            return 6;
        } else if (number === 24 || number === 25) {
            return 7;
        } else if (number === 26 || number === 27) {
            return 8;
        } else if (number === 28 || number === 29) {
            return 9;
        } else if (number === 30) {
            return 10;
        }
    }

    const modifyer = getModifyer(number);
    return (
            <div className={"baseStatContainer"}>
                <div className={"baseStatName"}>{name}</div>
                <div className={"baseStatModifyer"}>{modifyer}</div>
                <div className={"baseStatNumber"}>{number}</div>
            </div>
    )
}
export default BaseStatContainer;