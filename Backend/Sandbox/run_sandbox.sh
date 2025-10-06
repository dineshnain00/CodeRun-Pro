#!/bin/bash
LANGUAGE=$1
CODE_FILE=$2

case $LANGUAGE in
  python)
    python3 $CODE_FILE
    ;;
  java)
    javac $CODE_FILE && java ${CODE_FILE%.java}
    ;;
  node)
    node $CODE_FILE
    ;;
  *)
    echo "Unsupported language"
    ;;
esac
