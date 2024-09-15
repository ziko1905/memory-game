import { useState, useEffect } from "react";
import { getCards } from "../fetchImages";
import placeHolderImg from "../assets/placeholder-image.png"

export function CardGrid() {
    const [selected, setSelected] = useState(new Set())

    return (
        <CardGridLoader />
    )
}

function CardGridLoader () {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards().then(response => {
            setCards(response)
        })
    }, [])

    return (
        <div className="cardGrid">
            {cards.map(card => {
                return <Card key={card.id} url={card.url}/>
                }
            )}
        </div>
    )
}

function Card({url}) {
    const [imgSrc, setImgSrc] = useState(placeHolderImg)

    // useEffect(() => {
    //     url.then(resolve => {
    //             console.log(resolve)
    //             if (resolve.meta.status === 200) setImgSrc(resolve.data.images.original.url)
    //         })
    // }, [url])

    return (<div className="card">
            <img src={imgSrc} alt=""/>
        </div>
    )
}