#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.deepaa.live' > CNAME

git init
git add -A
git commit -m 'deploy'

# git config --global user.name "huanghaiting-allen"
# git config --global user.email "2280455347@qq.com"


# 如果发布到 https://<USERNAME>.github.io
# git push -f https://github.com/huanghaiting-allen/huanghaiting-allen.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#  git push -f  https://github.com/huanghaiting-allen/deepex-api.git master:gh-pages

cd -

