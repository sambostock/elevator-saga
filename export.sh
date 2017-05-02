#! /bin/sh -e
FILE=elevator.js
cat "$FILE" | pbcopy
echo "Piped $FILE to pbcopy"
