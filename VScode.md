常用快捷键
•Ctrl + P：文件搜索。
•Ctrl + Shift + P / F1：执行命令。
•Ctrl + B：打开关闭侧边栏。
•Ctrl + `：打开关闭终端。
•Ctrl + Shift + `：打开新的终端。
•F12：跳到定义处。
•Alt + F12：显示定义代码。
•Shift + F12：显示所有引用。
•Ctrl + G：跳到指定行。
•Ctrl + Shift + O：快速跳转到 ==当前文件== 中的方法、类或者是属性。
•Ctrl + T：快速跳转到 ==当前项目== 中的方法、类或者是属性。
•Ctrl + X：快速删除当前整行代码。
•Shift + Alt + ↑ / ↓：上/下 复制行。
•Alt + ↑ / ↓：上/下 移动行。
•Alt + ← / →：向前，向后。
•Ctrl + Shift + [ / ]：折叠/展开 当前代码块。
•Ctrl + Shift + ← / →：快速按单词选中代码。
•Shift + ← / →：按单个元素选中代码。
•Ctrl + Enter：快速在当前行下插入新的一行，不需要光标在末尾
•Ctrl + /：添加行注释
•Shift + Alt + A：添加块注释

同时选中，修改：

•F2：修改选中的 方法名、类名和属性名等符号，引用的地方会被同时修改。
•Ctrl + D：依次找到 ==下一个== 和 选中的单词 相同的 单词，并同时选中，可以进行同时修改。
•Ctrl + Shift + L：找到 ==全部== 和 选中的单词 相同的 单词，并同时选中，可以进行同时修改。
•Ctrl + Alt + ↑ / ↓：上下同时选中光标（网易云音乐声音调节会发生快捷键冲突）。
•Alt + 鼠标左键点击：同时选中多处光标。
•Shift + Alt + 鼠标左键选中代码块：同时选中一块代码。

调试：

•F5：启动调试。
•F9：添加解除 断点。
•F10：单步跳过。
•F11：单步进入。
•Shift + F11：单步跳出。

其他：

•Ctrl + F：当前文件 查询。
•Ctrl + H：当前文件 替换。
•Ctrl + Shift + F：全局查询。
•Ctrl + Shift + H：全局替换。
•F11：全屏。
•Ctrl + = / -：放大 / 缩小。
•Ctrl + Shift + N：启动新的编辑器窗口。
•Alt + Shift + F：快速格式化选中的代码。
•Alt + J：合并选中的代码到一行，自定义。
•Ctrl + K Ctrl + X：清除选中代码的前后多余空格。
•Ctrl + Backspace：快速删除整个单词。
 安装
 •VSCode 官网：https://code.visualstudio.com/
•VSCode 下载地址：https://code.visualstudio.com/Download （默认下载的是 User Installer 版本）
git集成
1.1 初始化
首先我们创建一个名为gittest的文件夹，当然它不在git的版本控制管理中
用VS Code 打开这个文件夹，单击左侧的git图标。
git 输出
我们可以在隐藏的菜单中选择git输出，这样我们每个操作都会显示 在输出区域，方便我们查看对应的git命令。
提交保存
提交保存的第一步是暂存文件。

第二步是输入提交信息。

第三步然后使用状态栏的提交按钮提交全部更改
git命令列表
ctrl+shift+P，输入git，会看到VS CODE支持的所有git命令。
撤销操作
输入 Undo Last Commit，撤销上次操作。输入Unstage,撤销暂存。
分支
输入Branch可以创建当前内容的分支。创建分支时需要输入分支名称。
checkout
创建分支后，使用checkout命令可以拉取特定的分支内容
冲突合并
VS Code 会检测文件冲突，并以<<<<<,>>>>,====和颜色区分出来。
解决冲突之后，直接提交就行了。

文件比较
在git文件列表中，单击一个未提交更改的文件，就会打开两个窗口来显示变更的内容。
