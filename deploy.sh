git add --all
git commit -m $0
git push
npm version patch
npm run deploy
