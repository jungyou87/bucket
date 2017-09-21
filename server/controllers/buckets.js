var mongoose = require ('mongoose')
var Bucket = mongoose.model('Bucket')
var User = mongoose.model('User')

module.exports = {
    index : function (req, res){
        Bucket.find({}).populate({
            path : '_user',
            Model : 'User'
        })
        .exec((err, buckets) => {
            if (err){
                return res.json(err)
            }
            return res.json(buckets)
        } )

    },
    create : function (req,res){
        Bucket.create(req.body, function(err, bucket){
            if(err){
                return res.json(err)
            }
            return res.json(bucket)
        })
    },
    update : function (req, res) {
        Bucket.findByIdAndUpdate(
            req.params.id, function(err, bucket) {
                if(err){
                    return res.json(err)
                }
                bucket.status = !bucket.status
                return res.json(bucket)
            })
    }

}