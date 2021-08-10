import axios from "axios"
const baseUrl="https://www.breakingbadapi.com/api";

const characterEndpoint="/characters"
const quotesEndpoint="/quote"
export const getAllCharacters=()=>{
    return axios.get(baseUrl+characterEndpoint)
}

export const getCharacterbyId=(char_id)=>{
    return axios.get(`${baseUrl}${characterEndpoint}/${char_id}`)
}

export const getQuoteByAuthor=(author)=>{
    const decorizedAuthor= author.replace(/ /g,"+");
    return axios.get(`${baseUrl}${quotesEndpoint}/?author=${decorizedAuthor}`)
}

export const getCharactersWithPagination=({
    limit=10,
    offset=0
})=>{
    return axios.get(`${baseUrl}${characterEndpoint}/?limit=${limit}&offset=${offset}`)
}

export const getCharactersBySearch=(searchTerm)=>{
    const decorizedSearchTerm= searchTerm.replace(/ /g,"+");
    return axios.get(`${baseUrl}${characterEndpoint}?name=${decorizedSearchTerm}`)
}