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

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: Date
});

const User = mongoose.model('User',userSchema);
const Post = mongoose.model('Post', postSchema);


const getUsers = async ()=>{
  try{
    const users = await User.find();
    return users;
  }catch(err){
    console.error('조회 실패',err);
    throw err;
  }
} 

// 기본 라우트 & 모든 user 가져오기
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

// 모든 포스트 가져오기
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find(); // MongoDB에서 모든 포스트 가져오기
    res.json(posts); // JSON 형식으로 응답
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err });
  }
});

// TODO 스키마 정의
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false }
});
const Todo = mongoose.model('Todo', todoSchema);

// CREATE: TODO 항목 추가
app.post('/todos', async (req, res) => {
  const { title, description, dueDate } = req.body;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  if (due < today) {
    return res.status(400).json({ message: '마감일은 오늘 이전일 수 없습니다.' });
  }
  try {
    const newTodo = new Todo({ title, description, dueDate });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'TODO 생성 오류', error: err });
  }
});

// READ: 모든 TODO 항목 조회
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'TODO 조회 오류', error: err });
  }
});

// UPDATE: TODO 항목 수정
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, dueDate, completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'TODO를 찾을 수 없습니다.' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: 'TODO 수정 오류', error: err });
  }
});

// DELETE: TODO 항목 삭제
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'TODO를 찾을 수 없습니다.' });
    }
    res.json({ message: 'TODO가 삭제되었습니다.' });
  } catch (err) {
    res.status(500).json({ message: 'TODO 삭제 오류', error: err });
  }
});


// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});