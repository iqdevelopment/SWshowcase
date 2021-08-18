import axios from 'axios'
import 'regenerator-runtime/runtime'
import { getImageUtil } from './../../../../utils/getImage'



const getNextItems = async (page,url) => {
    const results = []

    const querry = await axios.get(`https://swapi.dev/api/people/?page=${page+1}`)
    results.push(...querry.data.results)



    results.forEach((element) => {
        const personId = element.url.replace('https://swapi.dev/api/people/', '').replace('/', '')
        element.image = getImageUtil(personId)
    });


    return results

}

export default getNextItems
