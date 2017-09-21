var mongoose = require('mongoose')
//Schemas

var BucketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be blank'],
        minlength: 5
    },
    description : {
        type : String,
        required : [true , 'Description cannot be blank'],
        minlength: 10
    },
    status : {
        type : Boolean,
        default: false,
    },
    _user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: [true, 'Owner must be present']
    }

});


// Register
mongoose.model('Bucket', BucketSchema);