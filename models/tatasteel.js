const mongoose = require('mongoose');


//schema for tatasteel table
const tatasteelSchema = new mongoose.Schema({
    totalSales:{
        type: String,
    },
    targetSalse:{
        type:String,
    },
    factory_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Factory'
        }
    ]
},{
    timestamps:true
})

const Tatasteel = mongoose.model('Tatasteel', tatasteelSchema);//before exporting we are going to tell that tgis is going to be  a model
module.exports = Tatasteel;