import {useState} from "react";
import {useNavigate} from "react-router";

function FormComponent() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        note: "",
    });

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,


        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        createNote()

    };


    const createNote = async () => {

        try {
            const response = await fetch("https://notes.basboot.nl/notes", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: formData.note,
                    author: formData.name,
                    body: "yes",
                })
            })
            const data = await response.json()
            navigate('/')
            console.log(data)
        } catch (error) {
            console.error("fout bij inladen", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Naam:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="note">Flower:</label>
                <input type="note" id="note" name="note" value={formData.flower} onChange={handleInputChange}/>
            </div>
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default FormComponent;