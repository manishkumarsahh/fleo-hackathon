const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb+srv://manishauth:mksauth@cluster0.pc3wj.mongodb.net/authapp?retryWrites=true&w=majority';

mongoose.connect(db, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log(`connection seccessfull`);
}).catch((err)=> console.log(`no connection`));