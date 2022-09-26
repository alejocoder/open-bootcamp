const logger = require("./logger");

logger.info("este es un mensaje informativo");
logger.debug("este es un mensaje de debug");
logger.warn("este es un mensaje de advertencia");
logger.error("este es un mensaje de error");

function error(){
    return logger.error;
}

try{
    error();
} catch(e){
    logger.error(e);
}