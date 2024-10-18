



import {useEffect, useState} from "react";
import {backendUrl} from "../../constants.tsx";
import {Character} from "../characterOverview/Character.ts";
import PrimaryButton from "../basicComponents/button.tsx";

const BiepBupBar = () => {
    const [data, setData] = useState<Character[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(backendUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const createCharacter = () => {
        try {
            const response = fetch();
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
           <div className={"biepBupBar"}>
               {data?.length !== 0 && <div className={"characterCounter"}>{data?.length} characters found</div>}
               <PrimaryButton text={"Add Character"} onClick={() => {}} />
           </div>
    );
};

export default BiepBupBar;