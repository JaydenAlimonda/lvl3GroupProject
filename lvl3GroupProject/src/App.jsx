import { useEffect, useState } from 'react'
import Form from './components/Form'
import Image from './components/Image' 
import axios from 'axios'

export default function App() {
    const randomNumber = Math.floor(Math.random() * 100)

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(res => setMeme({
                img: res.data.data.memes[randomNumber].url
            }))


    }, [])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        img: '',
    })

    const [memeImages, setMemeImages] = useState([])

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(res => setMemeImages(res.data.data.memes))
    }, [])

    const getImage = (e) => {
        e.preventDefault()

        const randomNumber = Math.floor(Math.random() * memeImages.length)
        const url = memeImages[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            img: url
        }))
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className='app-container'>
            <h1 className='title'>Meme Generator</h1>
            <Form
                handleChange={handleChange}
                meme={meme}
                getImage={getImage}
            />
            <Image meme={meme} />
        </div>
    )

}

