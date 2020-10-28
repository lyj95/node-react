const express = require('express')  // express 모듈을 가져옴
const app = express()               // 새로운 express app을 만듬
const port = 5000                   // 5000번 port를 백서버로 둠

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeji:1234@boilerplate.f3bqv.mongodb.net/boilerplate?retryWrites=true&w=majority',
{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
.catch(err => console.log(err)) 



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 !~!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 