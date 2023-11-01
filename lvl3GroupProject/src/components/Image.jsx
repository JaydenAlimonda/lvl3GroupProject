export default function Images(props) {
    const { meme } = props

    return (
        <div>
            <img alt="image should be here" src={`${meme.img}`} />
        </div>
    )
}