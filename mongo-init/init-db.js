// mern_database 데이터베이스 선택
db = db.getSiblingDB('mern_database');

// users 컬렉션 생성 및 초기 데이터 삽입
db.users.drop(); // 기존 데이터 삭제 (선택 사항)
db.users.insertMany([
  {
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date()
  },
  {
    name: "Bob",
    email: "bob@example.com",
    createdAt: new Date()
  }
]);

// posts 컬렉션 생성 및 초기 데이터 삽입
db.posts.drop(); // 기존 데이터 삭제 (선택 사항)
db.posts.insertMany([
  {
    title: "First Post",
    content: "This is the first post.",
    author: "Alice",
    createdAt: new Date()
  },
  {
    title: "Second Post",
    content: "This is the second post.",
    author: "Bob",
    createdAt: new Date()
  }
]);