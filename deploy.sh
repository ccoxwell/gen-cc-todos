#!/bin/bash

hugo

git add .
git commit -m "recent lists"
git push

cp -r public/. ../codecrew-todos
cd ../codecrew-todos
git pull
git add .
git commit -m "recent lists"
git push