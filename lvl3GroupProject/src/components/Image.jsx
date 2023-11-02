export default function Images(props) {
    const { meme } = props

    return (
        <div className="meme-image-container">
            <img alt="meme" className='meme-image' src={`${meme.img}`} />
        </div>
    )
}