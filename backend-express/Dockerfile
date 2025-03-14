# Node.js 베이스 이미지
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 파일 복사
COPY . .

# 앱 실행
EXPOSE 5000
# 배포 모드
# CMD ["npm", "start"]
# 개발 모드 실행
CMD ["npm", "run", "dev"]