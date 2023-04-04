#!/usr/bin/env bash

echo "current mode is $1"

if [[ "$1" =~ "production" ]]; then
    npm ci && npm run start
    exit 0
elif [[ "$1" =~ "development" ]]; then
    npm i && husky install
    exit 0
else
    echo "Wrong positional argument was given, exiting..."
    exit 1
fi