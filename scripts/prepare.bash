#!/usr/bin/env bash

echo "current mode is $1"

if [[ "$1" =~ "production" ]]; then
    npm i --omit=dev && npm i -g typescript && npm run build
elif [[ "$1" =~ "development" ]]; then
    npm i && husky install
else
    echo "Wrong positional argument was given, exiting..."
    exit 1
fi

exit 0