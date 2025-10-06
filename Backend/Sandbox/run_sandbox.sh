#!/bin/bash
# Runs code safely in Docker sandbox

LANGUAGE=$1
CODE_FILE=$2

docker run --rm -v "$(pwd)/sandbox:/app" sandbox-image \
    bash -c "node /app/run_code.js $LANGUAGE $CODE_FILE"
