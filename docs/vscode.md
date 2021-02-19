## VS Code 远程编辑
1. 下载docsfiy,部署在服务器IIS或者Nginx上，如果使用IIS，需要设置MIME类型允许访问.md格式
```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <staticContent>
            <mimeMap fileExtension=".md" mimeType="text/markdown" />
        </staticContent>
    </system.webServer>
</configuration>
```
2. 在服务器上运行PowerShell命令
```
Enable-Psremoting
```
3. 在本机运行PowerShell命令
```
//查看winrm启动状态
Get-Service winrm 
//配置winrm
winrm -qc
//添加服务器的信任
winrm set winrm/config/client '@{TrustedHosts="Server IP"}'
```
4. 打开VS Code, Terminal选项卡打开PowerShell控制台

5. 使用远程到服务器，输入账号密码
```
Enter-PSSession -ComputerName 47.95.206.69 -Credential (Get-Credential)
```
6. 远程连接成功后即可使用PowerShell操作网站文件了，常用命令有：
```
//切换目录
cd Path 
//列出目录
ls path
//创建文件
new-item xxx.md
//编辑文件 https://docs.microsoft.com/zh-cn/powershell/scripting/dev-cross-plat/vscode/using-vscode-for-remote-editing-and-debugging?view=powershell-7
psedit xxx.md
```