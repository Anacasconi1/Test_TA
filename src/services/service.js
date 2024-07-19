// import axios from 'axios'
const axios = require('axios')
require("dotenv").config();

const people= process.env.DB_PEOPLE
const peopleAlternative = process.env.DB_PEOPLE_RESPALDO

const getPeople = async()=>{
    const response = await axios.get(people)
    .done(response.data)
    .fail({message: "error en la peticion"})
}

const getPeopleAlternative = async()=>{
    const response = await axios.get(peopleAlternative)
    .done(response.data)
    .fail({message: "error en la peticion"})
}

module.exports = {
    getPeople, 
    getPeopleAlternative
}