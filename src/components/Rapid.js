import axios from 'axios'


const key = 'b8d9e6f371msh1159755e7e1038fp115742jsn6596bc702d66'
const contentType = "application/octet-stream"
const rapidHost = "kanjialive-api.p.rapidapi.com"


export default axios.create({
    baseURL:'https://kanjialive-api.p.rapidapi.com/api/public',
    headers: {
        'content-type': contentType,
        'x-rapidapi-host': rapidHost,
        "x-rapidapi-key": key
    }
})

