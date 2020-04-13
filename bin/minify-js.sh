#!/bin/bash
function minify-js() {
  FILE=$1
  FILE_SOURCE_MAP=$(basename $FILE).map
  echo "+ minfiying $FILE"
  npx terser $FILE -m -c --source-map "content='$FILE.map',url='$FILE_SOURCE_MAP'" -o $FILE	
}

if [[ "$1" == "--help" || $1 == "" ]]; then
  echo "hallo"
else
  minify-js $@
fi