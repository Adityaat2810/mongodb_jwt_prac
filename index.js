const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouter=require("./routes/admin");
const userRoute = require('./routes/user');

const JWT_SECRET ="aditya_server";

app.use(bodyParser.json());
// app.use('/admin',adminRouter);
// app.use('/user',userRoute);

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('hi there')
})

app.listen(PORT,()=>{
    console.log(`Server is started on port ${PORT}`);
})

module.exports =JWT_SECRET;
