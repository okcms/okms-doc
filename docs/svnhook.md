## SVN Hook

## 设置钩子bat
post-commit.bat，该程序放置在所创建Repository的hook目录下，如本人的钩子程序放在C:\Repositories\ProjectName\hooks目录下

## 方案一：纯bat脚本
https://blog.csdn.net/sinat_30999181/article/details/48208987  

post-commit.bat
```
@echo off
SET REPOS=%1
SET REV=%2
SET DIR=%REPOS%/hooks
SET WORKING_COPY=C:\Path
SET PATH=%PATH%;
svn update %WORKING_COPY% --username user --password pwd
```

## 方案二：post-commit.bat + PowerShell
https://github.com/jozefizso/svn-pshooks  

post-commit.bat
```
@echo off
set PWSH=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe
%PWSH% -NoProfile -ExecutionPolicy Bypass -command "$input | %1\hooks\post-commit.ps1" "%1" "%2" "%3"
if errorlevel 1 exit /b %errorlevel%
```

post-commit.ps1
```
param(
  $repo,
  $rev,
  $txnName
)

cd C:\Path
svn update
```