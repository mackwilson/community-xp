#!/bin/bash
DIR1="$(pwd | grep 'server')"
if [[ "$DIR1" == "" ]]; then  
  echo "Current directory: "
  pwd
  echo "Please re-run from the ~/community-xp/server directory. Exiting."
  exit 0
else
  DIR2="$(pwd | grep 'scripts')"
  if [[ "$DIR2" == "" ]]; then  
    APP_FILE=./app.js
    LOCAL_FILE=./app.local.js

    echo "Preparing app for serverless deploy..."
    FILE_LEN=$(cat $LOCAL_FILE | wc -l)
    LINES_TO_REMOVE=6
    NUM="$(($FILE_LEN-$LINES_TO_REMOVE))"
    sed -n "1,$NUM p" $LOCAL_FILE > $APP_FILE # remove the app.listen before deploy
    echo "module.exports.server = sls(app);" >> $APP_FILE

    echo "Deploying..."
    serverless deploy
    
  else
    echo "Current directory: "
    pwd
    echo "Please re-run from the ~/community-xp/server directory. Exiting."
    exit 0
  fi 
fi

echo "Success!"