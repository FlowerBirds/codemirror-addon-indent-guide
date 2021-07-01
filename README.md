# codemirror-addon-indent-guide ![Lint](https://github.com/assisrafael/codemirror-addon-indent-guide/workflows/Lint/badge.svg?branch=master) 



Codemirror addon to include indentation guidelines.

# How to use

1.引入库和插件js等：
```
    <script src="codemirror.min.js"></script>
    <link rel="stylesheet" href="codemirror.min.css"/>
    <script src="clike.min.js"></script>
    <script src="../dist/indent-guide.js"></script>
    <link rel="stylesheet" href="../src/indent-guide.css" />
```
2.初始化：
```
    <script>
      CodeMirror.fromTextArea(document.getElementById('example1'), {
        lineNumbers: true,
        tabSize: 4,
        indentUnit: 2,
        indentWithTabs: true,
        mode: 'text/x-csrc',
        indentGuide: true,
      });

      CodeMirror.fromTextArea(document.getElementById('example2'), {
        lineNumbers: true,
        tabSize: 2,
        indentUnit: 2,
        indentWithTabs: true,
        mode: 'text/x-csrc',
        indentGuide: {
          hideFirst: true,
        },
      });
    </script>
```
其中只有设置tabSize: 4和indentUnit: 2的情况下，空格显示点号，Tab显示箭头，如demo中的index.html。

[Demo](/FlowerBirds/codemirror-addon-indent-guide/blob/master/codemirror-with-space-guide.png?raw=true)
