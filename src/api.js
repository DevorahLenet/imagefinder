import axios from 'axios'

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID hEDLTsaAVhqimbwsCU6wr59F_c5no0FUmZ8LFLwv9Jo'
        },
        params: {
            query: searchTerm
        }
    })

    return response.data.results
}

export default searchImages