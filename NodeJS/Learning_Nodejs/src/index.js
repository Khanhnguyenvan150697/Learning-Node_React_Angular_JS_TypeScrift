const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db')

//connect to DB
db.connect()

app.use(express.static(path.join(__dirname,'public')))

//using middleware to handle html form-data
app.use(express.urlencoded())

//using middleware to handle json data
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//handlebars template engine
app.engine('hbs',engine({extname: '.hbs', defaultLayout: 'main'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources','views'))

//route init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})