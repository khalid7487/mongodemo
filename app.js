const express = require('express');
require('./db/mongoose');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

//Middlewares
app.use(cors())
app.use(bodyParser.json())


//import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);


//Routes
app.get('/', async (req, res) => {
    res.send('we are on home')
})




app.listen(3000);