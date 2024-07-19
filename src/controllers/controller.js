// import { getPeople, getPeopleAlternative } from "../services/service"
const {getPeople, getPeopleAlternative} = require('../services/service')

const getController = async (res, req)=>{
    try {
        try {
            const response = await getPeople()
            res.status(200).json(response)
        } catch (error) {
            const response = await getPeopleAlternative()
            res.status(200).json({
                message:"Error al obtener informacion, estamos usando la informacion de respaldo",
                response
            })
        }
    } catch (error) {
        res.status(500).json({message: "Algo salio mal"})
    }
}

module.exports = {
    getController
}