# fleo-hackathon

1. Following are the apis  to get data

http://localhost:8000/factory/getfactory    ---->   get request
http://localhost:8000/tatasteel/getfactory   ---> get request

2. apis to create data in factory table

->http://localhost:8000/factory/create    
->post request
->form-data are- totalSales,targetSalse,tatasteel_id

2. apis to create data in tatasteel table

->http://localhost:8000/tatasteel/create
-> form-data are- totalSales,targetSalse,factory_id           
->post request
