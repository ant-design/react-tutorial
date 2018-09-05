# 将 umi 的代码转换为 bigfish(蚂蚁金服基于 umi 封装的内部框架)

rm -rf dist
node tool/bigfish.js

## sync to git http://gitlab.alipay-inc.com/bigfish/course-demo-bigfish
git clone git@gitlab.alipay-inc.com:bigfish/course-demo-bigfish.git
cd course-demo-bigfish
rm -rf ./*
rm .editorconfig .eslintrc .gitignore
cp -r ../dist/* ./
cp ../dist/.* ./
git add -A
git commit -m 'commit for bigfish'
git push
