export default function Images(props) {
    const { meme } = props

    return (
        <div className="meme-image-container">
            <img alt="meme" src={`${meme.img}`} />
        </div>
    )
}