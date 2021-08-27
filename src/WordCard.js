import {useEffect, useState} from 'react'

function WordCard({ word }){

    const [imgUrl, setImgURL] = useState('init')
    // const fetchURL = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`
    // const fetchURL = `http://api.giphy.com/v1/gifs/random?tag=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`

    useEffect( () => {
    
        fetch(`http://api.giphy.com/v1/stickers/random?tag=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`)
        .then(r => r.json())
        .then(obj => {
            // console.log(word, obj.data)
            setImgURL(obj.data)
        })
        .catch(er => `nope because ${er}`)
    }, [])


    // console.log(imgUrl)

    // const theImage = imgUrl.images.fixed_width.url

    return(
<>
<br></br>
<br></br>
<br></br>
<p>{word}</p>
{imgUrl !== 'init' ? <img src= {imgUrl.images.fixed_width.url} alt = {imgUrl.title} /> : null}
<br></br>
<br></br>
<br></br>
</>
    )
}


export default WordCard