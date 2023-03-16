# body-parser: for code API
# dotenv: get tham so khai trong file moi truong
# ejs view engine
# => npm install body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1
# babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 compliler, dich theo chuan cua js 
# nodemon@2.0.7 auto restart for server
# 👉 npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7


# Structure: MVC
  - SRC:
    - server.js => file run server
    - Controllers: => 
    - Services : => connect to DB
    - Config: => setup for project
    - Route: => declare links
    - Views: => file show in browser
    - Public: => img/css

  .env: setup environment: PORT...
  .gitignore
  .babelrc setup config compliler

# start:
  - Config -> viewEngine.js
  - Define Route -> web.js
  - Server.js - >