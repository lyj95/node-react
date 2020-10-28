const express = require('express')  // express 모듈을 가져옴
const app = express()               // 새로운 express app을 만듬
const port = 5000                   // 5000번 port를 백서버로 둠

const {User} = require("./models/User");

const bodyParser = require("body-parser");

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); 

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
.catch(err => console.log(err)) 



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 !~! 노드어렵다잉')
})

//회원가입을 위한 라우트
app.post('/register', (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) =>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success:true
    })
  })   //몽고디비에서 오는 메서드

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 