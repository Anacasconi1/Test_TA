const axios = require('axios')
require("dotenv").config();

const people= process.env.DB_PEOPLE
const peopleAlternative = process.env.DB_PEOPLE_RESPALDO

const getPeople = async()=>{
    const response = await axios.get(people)
    return response.data
}

const getPeopleAlternative = async()=>{
    const response = await axios.get(peopleAlternative)
    return response.data
}

module.exports = {
    getPeople, 
    getPeopleAlternative
}