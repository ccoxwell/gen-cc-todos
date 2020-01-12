#!/bin/bash

git add .
git commit -m "recent lists"
git push

cp -r public/. ../codecrew-todos
cd ../codecrew-todos
git add .
git commit -m "recent lists"
git push