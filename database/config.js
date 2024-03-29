const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,            
            // useCreateIndex: true =====no funciona desde mongo 6
        });
        
        console.log('DB Online');        

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el admin');
    }

}

module.exports = {
    dbConnection
}