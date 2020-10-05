#!/bin/bash

npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all

if [ "$NODE_ENV" == "test" ];then
        npm run test   
elif [ "$NODE_ENV" == "development" ];then
        npm run dev 
else
        npm run build;npm start
fi