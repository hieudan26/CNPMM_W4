const express = require('express');
const app = express();
const PORT = 5000;

const getAllRouter = require('./routers/Routers');
const  messageRouter = require('./routers/MessageRouter')
const router19110345 = require('./routers/19110345Router')

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', getAllRouter)

app.use('/message', messageRouter)

app.use('/19110345', router19110345)

app.listen(PORT);