import axios from 'axios'

const fetchPortfolio = async (path) => {
   // const url = `http://localhost:1337/${path}`
    const url = `https://blooming-plains-78552.herokuapp.com/${path}`
    const res = await axios.get(url)
    return res.data
}

export default fetchPortfolio