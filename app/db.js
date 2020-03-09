//incluimos Mongoose y abrimos una conexión
var mongoose = require('mongoose')
var MONGO_URL = process.env.MONGO_URL || 'mongodb://ec2-34-200-85-201.compute-1.amazonaws.com:27017'
mongoose.connect(MONGO_URL)

mongoose.connection.on('connected', function () {
    console.log('Conectado a la base de datos: ' + MONGO_URL)
})

mongoose.connection.on('error', function (err) {
    console.log('Error al conextar a la base de datos: ' + err)
})

mongoose.connection.on('disconnected', function () {
    console.log('Desconectado de la base de datos')
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Desconectado de la base de datos al terminar la app')
        process.exit(0)
    })
})
