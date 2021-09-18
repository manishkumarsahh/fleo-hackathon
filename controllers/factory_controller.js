const Factory = require('../models/factory');


module.exports.create = async function(req, res){
    try{
        const newtatasteel = await Factory.create({
            totalSales:req.body.totalsales,
            targetsales:req.body.targetsales,
            tatasteel_id:req.body.tatasteel_id
        });
        return res.status(200).send('ok');

    }catch(err){
        return res.status(400).send("err");
    }
  
}


module.exports.getfactory = async function(req, res){
    try{
        const newfactory = await Factory.find({});
 
        return res.json({
            data:newfactory
        });

    }catch(err){
        return res.status(400).send('err');
    }
  
}

