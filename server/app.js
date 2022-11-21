const express = require ('express');
const cors=require('cors')
const routing1 = require('./route/Blogdata')

const app =express();
app.use(cors());

app.use('/api',routing1)


app.listen(process.env.PORT||8000,()=>{
    console.log("app is running ");
}
)