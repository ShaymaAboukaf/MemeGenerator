import React, { useState, useEffect } from 'react';

export default function Meme() {
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })
    const [allMemeImages, setallMemeImages] = useState({})

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setallMemeImages(data)
        }
        getMemes()
    }, [])

    function generateImage() {
        const memesArray = allMemeImages.data.memes
        let random = Math.floor(Math.random() * memesArray.length)
        let imageURL = memesArray[random].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: imageURL,
            }
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="meme--form">
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="meme--btn" onClick={generateImage}>Get a new meme image</button>
            </div>
            <div className="img-container">
                <h2 className="meme--toptext">{meme.topText}</h2>
                {meme.randomImage &&
                    <img src={`${meme.randomImage}`} className="img-meme" />
                }
                <h2 className="meme--bottomtext">{meme.bottomText}</h2>
            </div>
        </main >
    )
}

