mkdir deploy
cd deploy
git init
echo `date` > 1.txt
git add .
git commit -m "autocommit"
git push -u https://github.com/loki2302/git-force-push-experiment.git master:deployed --force
cd ..
rm -rf ./deploy
echo DONE
