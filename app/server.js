var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')
var cors = require('cors')
var routerApi = require('./routes/index')
var routerAuth = require('./routes/auth')
var routerFront = require('./routes/front')
var app = express()
var port = process.env.PORT || 3000 // establecemos nuestro puerto

require('./db') // configuración de base de datos

app.set('views','./views/'); // establecemos la ruta de las plantillas de las vistas
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', routerApi)
app.use('/auth', routerAuth)
app.use('/', routerFront)
app.use(express.static('./public')); // asignamos la carperta que contendra los ficheros estaticos js css img

//arrancamos el servidor
app.listen(port, () => {
    console.log('API escuchando en el puerto ' + port)
});