import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";

function DetailComponent() {
    //take unique id from url
    const params = useParams()
    const id = params.id

    //set states
    const [flowers, setFlowers] = useState(null)
    const [error, setError] = useState(false)
    const getFlowers = async () => {

        try {
            const response = await fetch(`http://145.24.237.144:8080/flowers/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
            })

            //check if there is no data
            if (response.status === 404 || response.status === 500) {
                setError(true)
                return
            }

            const data = await response.json()
            setFlowers(data)
            console.log(data)

        } catch (error) {
            console.error("errrr loading not happening", error)
        }

    }

    //reacts and does the function if there is an id
    useEffect(() => {
        if (id)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            getFlowers()
    }, [id]);

    //show error screen if no data is found with that id
    if (error) {
        return (
            <div className="flex flex-col items-center pt-20">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-xl">FLower is nonexistent</p>
                <Link to="/" className="mt-4 text-amber-800 underline">Go back</Link>
            </div>)
    }

    if (!flowers) {
        return (<p className="text-center pt-20">Loading data.;..</p>)
    }
    return (
        <>
            <div className="flex flex-col gap-3 justify-center items-center pt-40">
                <h1 className="font-medium text-2xl">Details of {flowers.flowerName}</h1>
                <div
                    className="bg-amber-50  flex-col border-2 max-w-120 max-h-100 min-w-50 min-h-20 border-solid rounded-xl border-[#945034] p-2 justify-between w-fit h-fit">
                    <div className="flex flex-row gap-2">
                        <h2>From: {flowers.author}</h2>
                    </div>
                    <div className="flex flex-row gap-2 pr-8.5">
                        <h2>Description: {flowers.description}</h2>
                    </div>
                    <Link
                        className="bg-[#FF9A9A] border-2 border-solid border-[#945034] p-1 hover:cursor-pointer flex justify-center items-center"
                        to="/">Go
                        back</Link>
                </div>
            </div>

        </>
    )
        ;
}

export default DetailComponent;