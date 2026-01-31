import {useEffect, useState} from 'react'
import Flower from "./Flower.jsx";
import { GrUpdate } from "react-icons/gr";

function ShowFlower() {
    const [flowers, setFlowers] = useState([])

    // const params = useParams()
    /* const navigate = useNavigate()
 */
    const getFlowers = async () => {

        try {
            const response = await fetch("http://145.24.237.144:8080/flowers", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
            })
            const data = await response.json()
            setFlowers(data.items)
            console.log(data)

        } catch (error) {
            console.error("errrr loading not happening", error)
        }

    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getFlowers()

        //if you put getFlowers() inside the dependency then its gonna loop forever
    }, [])


    const deleteFlower = async (id) => {

        try {
            const response = await fetch(`http://145.24.237.144:8080/flowers/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                },
            })

            if (response.status === 204 || response.ok) {
                console.log("Deleted")

                getFlowers()
            }

        } catch (error) {
            console.error("error deleting", error)
        }

    }

    return (
        <>
            <div className="flex flex-col  justify-center items-center ">

                <h1 className="font-bold text-2xl pb-2">Flower Entry</h1>
                <button aria-label="Reload flowers" className="bg-[#FF9A9A] border-2 border-solid border-black p-1" onClick={getFlowers}><GrUpdate />
                </button>


                <ul className="flex flex-row flex-wrap gap-3 mt-3 justify-center">
                    {flowers.map((flower) =>
                        <Flower key={flower.id}
                                flower={flower}
                                onDelete={deleteFlower}/>)
                    }
                </ul>
            </div>
        </>
    )
}

export default ShowFlower
