const SPORTS = ['tennis', 'football', 'basketball', 'skiing', 'mtb', 'surfing', 'boxing', 'swimming', 'running', 'hockey', '8 ball', 'horse racing']
const API_KEY = 'hQDKrYtq5inxyRKMHrVnMNxxpHaZ01Y6'

console.log(fetch(`api.giphy.com/v1/gifs/search/api_key=${API_KEY}?s=mtb`))