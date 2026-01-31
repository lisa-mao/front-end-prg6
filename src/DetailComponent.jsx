import {useEffect, useState} from "react";
import { useParams} from "react-router";
import Flower from "./Flower.jsx";


function DetailComponent() {
    const params = useParams()
    const id = params.id
    const [flowers, setFlowers] = useState(null)
    const getFlowers = async () => {

        try {
            const response = await fetch(`http://145.24.237.144:8080/flowers/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
            })
            const data = await response.json()
            setFlowers(data)
            console.log(data)

        } catch (error) {
            console.error("errrr loading not happening", error)
        }

    }


    useEffect(() => {
        if (id)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            getFlowers()
    }, [id]);

    if (!flowers) {
        return <p className="text-center pt-10">Laden...</p>;
    }

    return (
        <>
            <p>{flowers.flowerName}</p>
            <p>{flowers.author}</p>
            <p>{flowers.description}</p>
</>
);
}

export default DetailComponent;