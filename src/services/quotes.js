import axios from 'axios'

const baseUrl = "https://type.fit/api/quotes"

const getAllQuotes = () => {
    const response = axios.get(baseUrl)
    
    return response.then(response => response.data)
}

export default {getAllQuotes}