const { constants } = require("../routes/constants");


const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                titile:"Validation Failed ",
                message: err.message,
                stackTrace:err.stack
            });
            break;
         case constants.UNAUTHORIZED:
            res.json({
                titile:"un authorized",
                message: err.message,
                stackTrace:err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                titile:"forbidden",
                message: err.message,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                titile:"Not Found",
                message: err.message,
                stackTrace:err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                titile:"server error",
                message: err.message,
                stackTrace:err.stack
            });
            break;
        default:
                console.log("No error all good !");
                break;

    }
    
};

module.exports = errorHandler;