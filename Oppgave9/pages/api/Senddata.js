import axios from "axios"
import { useState } from "react"

const CreateInput = () => {
    const [input, setInput] = useState()

    const handleSubmit = async(event) => {
        event.preventDefault()
        const data = await axios.post('/api/Items', {item} )
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={item}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send tekst</button>
        </form>
    )
}