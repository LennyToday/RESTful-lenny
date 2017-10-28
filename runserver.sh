#!/bin/bash


USERNAME="badger"
SERVERPATH="/home/$USERNAME/RESTful-lenny"

LOGFILE="$SERVERPATH/output.log"
ERRORLOGFILE="$SERVERPATH/error.log"
# Used for the screen name. CHANGE THIS IN stopserver.sh TOO!
SERVERNAME="restful-lenny"

#-----------------------------------------------------
# You shouldn't need to change below here

# Stop the server if it's already running
screen -S $SERVERNAME -X quit

screen -dmS $SERVERNAME nodejs "$SERVERPATH/app.js" >> $LOGFILE &> $ERRORLOGFILE

