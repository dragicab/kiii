const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb/simple-mern';

const connectWithRetry = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();

module.exports = mongoose;
