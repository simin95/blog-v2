:: @echo off
:: 删除文件（不删除文件夹）
:: del docs/.vuepress/dist\* /q /f /s
:: 删除文件夹里所有内容(而不是文件)
:: RD /q /s "docs/.vuepress/dist" 

:: 构建
:: call npm run docs:build

:: 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

:: 推到你仓库的的 gh-page 分支
git push -f git@github.com:simin95/vuepress-blog.git master:gh-pages