var mongoose = require ('mongoose')
var User = mongoose.model('User')

module.exports = {

    index : function (req, res){
        User.find({}).populate({
            path : 'buckets',
            Model : 'Bucket'
        })
        .exec((err, users) => {
            if(err){
                return res.json(err)
            }
            return res.json(users)
        } )

    },

    create : function(req,res){
        User.findOne({ name : req.body.name }, function(err, user){
            if (err){
                return res.json(err)
            }
            else if (!user){
                User.create(req.body, function(err, user){
                    if (err){
                        console.log(err)
                        return res.json(err)
                    }
                    console.log('from creating',user)
                    return res.json(user)
                })
            }
            else{
                console.log('from exising',user)
                return res.json(user)
            }
        })
    },
    show : function(req, res){
        User.findById( req.params.id)
            .populate({
                path : 'buckets',
                Model: 'Bucket'
            })
            .exec((err, user) => {
                if (err){
                    return res.json(err)
                }
                return res.json(user)
            })
        },
            

}