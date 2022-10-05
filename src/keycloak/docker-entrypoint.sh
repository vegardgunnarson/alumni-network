#!/bin/bash

# Set database config from heroku DATABASE_URL
if ["$DATA_URL" != ""]; then
#ech "Found database configuration in DATABASE_URL=$DATABASE_URL"

        regex= '^postgres://([a-zA-Z0-9_-]+):([a-zA-Z0-9.-]+):([[:digit:]]+)/([a-zA-Z0-9_-]+)$'
        if [[$DATABASE_URL=~ $regex]]; then
        export DB_ADDR=${BASH_REMATCH[3]}
        export DB_PORT=${BASH_REMATCH[4]}
        export DB_DATABASE=${BASH_REMATCH[5]}
        export DB_USER=${BASH_REMATCH[1]}

        export DB-VENDOR=postgres

    fi
fi