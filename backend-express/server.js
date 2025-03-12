const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결
const mongoURI = process.env.MONGO_URI || 'mongodb://root:rootpw@db-mongo:27017/mern_database?authSource=admin';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB 연결 성공'))
  .catch(err => console.error('MongoDB 연결 실패:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  createdAt: {type: Date, default: Date.now}
});
const User = mongoose.model('users',userSchema);

const getUsers = async ()=>{
  try{
    const users = await User.find();
    return users;
  }catch(err){
    console.error('조회 실패',err);
    throw err;
  }
} 

// 기본 라우트
app.get('/', async (req, res) => {
  try {
    let users = await getUsers();
    console.log(users);
    // res.send('Express 백엔드 동작 중!');
    res.json({message: 'Express 백엔드 동작 중!', users});
  }catch(err){
    console.error('조회 실패', err);
    res.status(500).json({message: 'server error', error:err.message});
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});