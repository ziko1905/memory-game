const SPORTS = ['Tennis', 'Football', 'Basketball', 'Skiing', 'Mtb', 'Surfing', 'Boxing', 'Swimming', 'Running', 'Hockey', '8 ball', 'Horse racing']
const API_KEY = 'hQDKrYtq5inxyRKMHrVnMNxxpHaZ01Y6'


async function getImgSrc(s) {
    return await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${s}`, {mode: "cors"})
        .then(resolve => resolve.json())
        .then(resolve => resolve)
}

export async function getCards() {
    const cards = SPORTS.map((value, index) => {
        return {alt: value, id: index, url: getImgSrc(value).then(response => response)}}
    )
    await Promise.all(cards.map(card => card.url))
    return cards
}

// Used for shuffling card grid, 
export function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i]
        const newI = Math.floor(Math.random() * arr.length)
        arr[i] = arr[newI]
        arr[newI] = temp
        
    }
    return arr
}