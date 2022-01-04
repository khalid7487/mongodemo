const mongoose = require('mongoose');

require('dotenv/config')


mongoose.connect(process.env.DB_CONNECTION, {

    useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true

}).then( () => {
    console.log('Connection successful');
}).catch( (error) => {
    console.log('Something wrong', error)
});