var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')
var cors = require('cors')
var routerApi = require('./routes/index')
var routerAuth = require('./routes/auth')
var app = express()
var port = process.env.PORT || 3000 // establecemos nuestro puerto

/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', routerApi)
app.use('/auth', routerAuth)
//arrancamos el servidor
app.listen(port, () => {
    console.log('API escuchando en el puerto ' + port)
});