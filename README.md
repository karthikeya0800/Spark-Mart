root - npm install
cd backend - npm install
cd frontend - npm install
To Start the project type "npm run start" in command line
Include PORT = XXXX and MONGO_URI = "abcd" in backend/config/.env

Deploy changes in backend
cd root
=> git add -A
=> git commit -m "commit message"
=> git push origin master

Deploy changes in frontend
cd frontend
=> npm run build
=> firebase deploy
