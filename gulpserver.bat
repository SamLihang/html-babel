@echo off
for /f %%i in ('npm root -g') do set NODE_PATH=%%i
setx /m NODE_PATH %NODE_PATH%
npm i gulp@3.9.1 gulp-babel@8.0.0 @babel/preset-env@7.1.6 @babel/core@7.1.6 -g