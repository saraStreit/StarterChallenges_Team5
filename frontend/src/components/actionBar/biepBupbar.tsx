



import {useEffect, useState} from "react";
import {backendUrl} from "../../constants.tsx";
import {Character} from "../characterOverview/Character.ts";

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

    return (
           <div>
                {data?.map((character, index) => (
                     <div key={index}>{character.name}</div>
                ))}
           </div>
    );
};

export default BiepBupBar;