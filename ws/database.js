const mongoose = require('mongoose');
const URI = 
'mongodb+srv://studioadmin:5Pw06smilErITYQn@clusterdev.8d9f5.mongodb.net/stjuliarebeca?retryWrites=true&w=majority';

const env = process.env.NODE_ENV || 'dev';
let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));

    
