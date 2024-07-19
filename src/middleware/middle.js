
const middleware = (req, res, next)=>{
    console.log("todo bien por aca tambien");
    next()
}

module.exports={ middleware }