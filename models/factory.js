const mongoose = require('mongoose');
// schema for factory table
const factorySchema = new mongoose.Schema({
    totalSales: {
        type: String,
    },
    targetSalse: {
        type:String,
    },
    tatasteel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tatasteel'
    }
},{
    timestamps:true
});

const Factory = mongoose.model('Factory', factorySchema);

module.exports = Factory;
