const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
