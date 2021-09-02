const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bscottalexander:Zyborn123@cluster0.g0jbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
