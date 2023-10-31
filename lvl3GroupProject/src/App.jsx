import { useState } from 'react'
import Form from './components/Form'

export default function App() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        img: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div>
            <h1>hello</h1>
            <Form handleChange={handleChange} meme={meme}/>
        </div>
    )

}