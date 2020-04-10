#!/bin/bash
set -xe

mkdir -p ./dist/js/web_modules

# preact
cp ./node_modules/preact/dist/preact.module.js ./dist/js/web_modules/preact.js