import { useState } from 'react'

import axios from 'axios'

const Senddata = () => {
  const [input, setInput] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await axios.post('/api/inputs', { input })

    console.log(data.data)
  }

  return (
    <><form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    <p>Dataene som sendes inn vises i Consollen</p></>
  )
}

export default Senddata
