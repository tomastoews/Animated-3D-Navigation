project="3dnavigation"

echo Starting deployment of $project

echo Cleaning dist/ directory...
ssh root@tomastoews.de "rm -r -f -v /containers/$project/dist/*"
echo Cleaning done: ok

echo Uploading dist/ files...
scp -r dist root@tomastoews.de:/containers/$project/;
echo Upload done: ok

echo Uploading dockerfile and nginx files...
scp Dockerfile nginx.conf default.conf root@tomastoews.de:/containers/$project/
echo Upload done: ok

ssh root@tomastoews.de "cd /containers/$project && sh ./build-image.sh && sh ./start.sh"

echo Image build done: ok
echo Container restart done: ok

echo -----------------------
echo \| Deployment done: ok \|
echo -----------------------
