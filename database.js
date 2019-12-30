const mongoose = require('mongoose');
const URI = 'mongodb+srv://pablopoggiog:merecago1512@pp-dkxhb.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI, 
    {useUnifiedTopology: true,
     useNewUrlParser: true, 
    useCreateIndex: true });
    
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})