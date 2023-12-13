import axios from "axios"


const api = axios.create({
    baseURL: 'https://unofficial-mobile-legends.p.rapidapi.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://unofficial-mobile-legends.p.rapidapi.com',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS', 
        'X-RapidAPI-Key': '7ea93dbe34msha8b008ef755b0c9p1e2832jsn40dab3c9d2cf',
        'X-RapidAPI-Host': 'unofficial-mobile-legends.p.rapidapi.com',
    }
});

export default api