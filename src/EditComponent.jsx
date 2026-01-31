import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";


function EditComponent() {

    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    const [formData, setFormData] = useState({
        author: "",
        flowerName: "",
        description: ""
    });
    const getFlowers = async () => {

        try {
            const response = await fetch(`http://145.24.237.144:8080/flowers/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
            })
            const data = await response.json()
            setFormData({
                author: data.author || "",
                flowerName: data.flowerName || "",
                description: data.description || ""
            });

        } catch (error) {
            console.error("errrr loading not happening", error)
        }
    }


    useEffect(() => {
        if (id)
            getFlowers()
    }, [id]);


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,


        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        SaveFlower()

    };


    const SaveFlower = async () => {

        try {
            const response = await fetch(`http://145.24.237.144:8080/flowers/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    flowerName: formData.flowerName,
                    author: formData.author,
                    description: formData.description,
                    body: "yes",
                })
            })

            if (response.ok) navigate("/")
        } catch (error) {
            console.error("save failed", error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 justify-center items-center pt-40">
                <h1 className="font-medium text-2xl">Create Entry</h1>
                <div
                    className=" flex flex-col gap-3 justify-center items-center border-6 border-solid border-[#945034] max-w-fit max-h-fit p-3">
                    <div className="flex flex-row gap-2">
                        <label htmlFor="author">Author:</label>
                        <input className="bg-white text-black border-2 border-solid border-black" type="text"
                               id="author"
                               name="author"
                               value={formData.author} onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="flowerName">Flower:</label>
                        <input className="bg-white text-black border-2 border-solid border-black" type="text"
                               id="flowerName" name="flowerName"
                               value={formData.flowerName} onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-row gap-2 pr-8.5">
                        <label htmlFor="description">Description:</label>
                        <input className="bg-white text-black border-2 border-solid border-black" type="text"
                               id="description" name="description"
                               value={formData.description} onChange={handleInputChange}/>
                    </div>
                    <button className="bg-[#FF9A9A] border-2 border-solid border-black p-1 min-w-30"
                            type="submit">Send
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditComponent;