const Factory = require('../models/factory');

//controller to execute actiona

//http://localhost:8000/factory/create    
//post request
//   form-data are- totalSales,targetSalse,tatasteel_id

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


// http://localhost:8000/factory/getfactory    ---->   get request
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

