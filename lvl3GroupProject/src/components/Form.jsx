export default function Form(props) {
    const { handleChange, meme, getImage } = props

    return (
        <div className="form-container">
            <form onSubmit={getImage}>
                <input
                    type="top-text"
                    placeholder="Top Text"
                    className="top-text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="bottom-text"
                    placeholder="Bottom Text"
                    className="bottom-text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="submit-button" >Submit</button>
            </form>
        </div>
    )
}