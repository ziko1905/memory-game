const SPORTS = ['tennis', 'football', 'basketball', 'skiing', 'mtb', 'surfing', 'boxing', 'swimming', 'running', 'hockey', '8 ball', 'horse racing']
const API_KEY = 'hQDKrYtq5inxyRKMHrVnMNxxpHaZ01Y6'


async function getImgSrc(s) {
    return await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${s}`, {mode: "cors"})
        .then(resolve => resolve.json())
        .then(resolve => resolve)
}

export async function getCards() {
    const cards = SPORTS.map((value, index) => {
        return {id: index, url: getImgSrc(value).then(response => response)}}
    )
    await Promise.all(cards.map(card => card.url))
    return cards
}