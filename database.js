const mongoose = require('mongoose');
const URI = 'mongodb+srv://pablopoggiog:merecago1512@pp-dkxhb.gcp.mongodb.net/test?retryWrites=true&w=majority'

async function connect() {        
    await mongoose.connect(URI, 
        {useUnifiedTopology: true,
        useNewUrlParser: true, 
        useCreateIndex: true });
        
    console.log('DB is connected');
}

module.exports = connect;