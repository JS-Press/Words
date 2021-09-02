import {useEffect, useState} from 'react'

function WordCard({ word, handleDelete, feeling, id }){

    const [imgUrl, setImgURL] = useState('init')
    // const fetchURL = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`
    // const fetchURL = `http://api.giphy.com/v1/gifs/random?tag=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`

    const [successful, setSuccessful] = useState(true)

    useEffect( () => {
    

        fetch(`http://api.giphy.com/v1/stickers/random?tag=${word}&api_key=nDPzADnKsqOAxpZ6yZcvFq0NUWv5oVVY&limit=1`)
        .then(r => r.json())
        .then(obj => { setImgURL(obj.data) })
        .catch(er => {
            console.log(`nope because ${er}`)
            setSuccessful(false)
            console.log('afterwards!')
        })
    }, [])


    // console.log(imgUrl)
    // const theImage = imgUrl.images.fixed_width.url

    // if(word === "pumpernickle"){
    //     imgUrl.images.fixed_width.url = "https://media.giphy.com/media/KeseIQWwb0q1G/200.gif"
    // }

    return(

<div id = "stack" >
{word !== "pumpernickle" ? imgUrl !== 'init' && successful === true && imgUrl.images !== undefined ? <img src= {imgUrl.images.fixed_height.url} alt = {imgUrl.title} /> : <img src="https://media0.giphy.com/media/vnFB72LzHtO4o/giphy.gif?cid=ecf05e47a2z4xt6bkd4pihc7x12iedeitbhucqhnscrr56q4&rid=giphy.gif&ct=g" alt = 'oops nothing here' /> : null }
{word === "pumpernickle" ? <img src= "https://media.giphy.com/media/KeseIQWwb0q1G/200.gif" alt = {imgUrl.title} /> : null}
<p id = "caption" >{word}</p>
<p onClick={() => handleDelete(word, feeling, id)} id = "del" >❌</p>
</div>

    )
}


export default WordCard