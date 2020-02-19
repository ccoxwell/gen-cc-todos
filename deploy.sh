#!/bin/bash

hugo

git add .
git commit -m "recent lists"
git push

cd ../codecrew-todos
git pull 

cd -

cp -r public/. ../codecrew-todos
git add .
git commit -m "recent lists"
git push