# Node.js 공식 이미지를 기반으로 사용 (18버전 추천)
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트 전체 복사
COPY . .

# 포트 노출 (React 기본 포트는 3000)
EXPOSE 3000

# 개발 서버 실행
CMD ["npm", "start"]