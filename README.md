# Practical Task Project Build with TypeORM and Mysql Database 

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm run watch` command and run any one step according to environment
4. Run `npm run dev` command for local development Environment 
4. Run `npm run start:qa` command for QA Environment 
4. Run `npm run start` command for production Environment  you need to create .env file in root folder for production Environment


## code snippet of configuration of database  
you can add in ormconfig.json file in your root folder 
```
{   
    "type": "mysql",
    "host": "",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "practical",
    "synchronize": false,
    "logging": true,
    "entities": ["dist/entity/**/*.js"],
    "cli": {
        "entitiesDir": "./src/entity"
    },
    "useUnifiedTopology": true

 }

# task-backend
