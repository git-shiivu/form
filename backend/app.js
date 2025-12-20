import express, { json } from "express"

import cors from "cors"

const app = express()
const port = 3000;

var corsOptions = {
  origin: 'http://127.0.0.1:5500/form/frontend/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.post('/submit', cors(corsOptions), function (req, res, next) {
  res.send(`Thanks for visit`)
})
app.listen(port, ()=>{
  console.log(`Server is start at port ${port}`);
  
})