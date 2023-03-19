import { useState, useEffect } from "react";

function Input({topPlaceholder, bottomPlaceholder, onInputChange, onGetNewMeme}) {
    return <div className="meme-input">
        <div className="meme-txt">
            <input type="text" className="top-input" placeholder={topPlaceholder} onChange={(event) => onInputChange('top', event.target.value)} />
            <input type="text" className="bottom-input" placeholder={bottomPlaceholder} onChange={(event) => onInputChange('bottom', event.target.value)} />
        </div>
        <button className="purple-gradient" onClick={onGetNewMeme} >Get a new meme image  🖼</button>
    </div>
}

function MemeImg({top_text, bottom_text, meme}) {
    return <div className="meme">
        <img id="meme-img" src={meme.url} alt="meme" />
        <h1 className="top-text">{top_text}</h1>
        <h1 className="bottom-text">{bottom_text}</h1>
    </div>
}

export default function Body() {

    const [topText, settopText] = useState("Top Text");
    const [bottomText, setbottomText] = useState("Bottom Text");
    const [allMemes, setAllMemes] = useState([
        {
           "id": "61579",
           "name": "One Does Not Simply",
           "url": "https://i.imgflip.com/1bij.jpg",
           "width": 568,
           "height": 335,
           "box_count": 2
        }
    ]);
    const [memePtr, setMemePtr] = useState(0);

    function HandleInputChange(inpType, currVal) {
        if(inpType === 'top') {
            settopText(currVal);
        } else setbottomText(currVal);
    }

    function HandleNewMeme() {
        setMemePtr(Math.floor(Math.random() * allMemes.length));
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(x => x.json())
            .then(x => setAllMemes(x.data.memes))
    }, []);

    return <main>
        <Input topPlaceholder={topText} bottomPlaceholder={bottomText} onInputChange={HandleInputChange} onGetNewMeme={HandleNewMeme}/>
        <MemeImg top_text={topText} bottom_text={bottomText} meme={allMemes[memePtr]}/>
    </main>
}