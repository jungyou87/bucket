var mongoose = require('mongoose')
//Schemas
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    buckets : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Bucket'
    }]

});

// Register
mongoose.model('User', UserSchema);