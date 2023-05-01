# Step by Step instructions to start the Project

## 1. BACKEND
```
cd marvelMovieApp\backend
```
### Project setup
```
npm install
```
### First start the server (runs on port 8080)
prerequisites: MongoDB and Node.js must be installed
```
node server.js
```
### execute command to send data to DB
```
node initDbData.js
```

## 2. ANGULAR FRONTEND
```
cd marvelMovieApp\angular-frontend
```
### Project setup
```
npm install
```
### Development server
Run for a dev server. Navigate to `http://localhost:4200/`.
```
ng serve
```
### Build
Run to build the project. The build artifacts will be stored in the `frontend/www` directory.
```
ng build
``` 

## 3. FRONTEND 
```
cd marvelMovieApp\frontend
```
### Project setup
```
npm install
```
### 3.1 This method might not work, but give it a try
#### build
```
cordova build android
```
#### Run
```
cordova run android
```
### 3.2 should work - hopefully 
#### open following file in Android Studio 
```
marvelMovieApp\frontend\platforms\android\app\
```
If not automatically updated or empty
+ COPY **content** of folder ```marvelMovieApp\frontend\www```
+ PASTE in ```marvelMovieApp\frontend\platforms\android\app\src\main\assets\www```

#### Navigation Bar: Build -> Clean Project

#### Click Run Button (arrow next to Device Config)
