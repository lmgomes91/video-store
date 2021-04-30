# video-store
This projetct simulate a basic video store system using Node.js and Postgres, an reduced DDD pattern to atend the simplification of the problem

## Routes
    
    Path:  http://localhost:3333
    

All routes are detailed with success calls at docs folder, and there is, also, a json file exported from [Insomnia Rest](https://insomnia.rest/) with the routes

## Initialize Project

    Install packages: npm i
    Run application: npm start

## Database

**Configuration**

All configuration can be found at ormconfig.json

**Tables**
    
All table schemas are available at migrations folder: _src/shared/database/migrations_

    To create the tables at SQL DataBase, run:
      npm run typeorm migration:run

#### Developed By

    Lucas M Gomes
    lgomes@post.com