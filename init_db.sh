#!/bin/sh

docker-compose run users-service knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run users-service knex seed:run --env development --knexfile app/knexfile.js

docker-compose run trips-service knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run trips-service knex seed:run --env development --knexfile app/knexfile.js