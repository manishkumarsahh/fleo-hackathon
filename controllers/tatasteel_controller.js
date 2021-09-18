const Tatasteel = require('../models/tatasteel');

////actiion controller
//http://localhost:8000/tatasteel/create
module.exports.create = async function(req, res){
    try{
        const newtatasteel = await Tatasteel.create({ 
            totalSales:req.body.totalSales,
            targetSalse:req.body.targetSalse,
            factory_id:req.body.factory_id,
            
        });
        
        
        return res.status(200).send('ok');

    }catch(err){
        return res.status(400).send('err');
    }
  
}
//http://localhost:8000/tatasteel/getfactory   ---> get request
module.exports.getTatasteel = async function(req, res){
    try{
        const newtatasteel = await Tatasteel.find({});
 
        return res.json({
            data:newtatasteel
        });

    }catch(err){
        return res.status(400).send('err');
    }
  
}