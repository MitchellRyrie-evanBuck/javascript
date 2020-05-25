# 模拟腾讯在线文档



## 项目要求

1. 在线输入多行文字
2. 选择文本可设置字体大小、加粗、斜体、下划线、删除线、字体颜色和背景颜色
3. 允许输入无序列表和有序列表
4. 允许设置1~6级标题
5. 允许插入图片



## 新添加功能

- 右键点击出现菜单 进行菜单操作

## 遇到的问题

#### 问题

开始遇到的问题就是不知道怎么选中当前部分内容，
当时有好几种方法，到最后还是用了execCommand方法



但是加粗这个功能怎么都不行，上网上查，发现不能用**textarea** 这个标签，里面不能嵌套div，所以又在网上找了半个小时。

在不经意间发现了**execCommand方法**，所以就去 MDN 上查看了这个方法https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand

发现这个**execCommand方法**，可以允许运行命令来操纵可编辑内容区域]的元素。

在中午的时候，找到了一篇新的博客，https://www.iteye.com/blog/zhangmingwei-2289668 ，并在里面找到给了

```js
*该function用来将选中的区块设为指定的背景色
*/
function fn_change_backcolor()
{
  document.execCommand('BackColor',true,'#FFbbDD'); //true或false都可以
}
/*
*该function用来将选中的区块设为指定的前景色,改变选中区块的字体大小,改变字体,字体变粗变斜
*/
function fn_change_forecolor()
{
document.execCommand('ForeColor',false,'#BBDDCC'); //指定前景色。true或false都可以
document.execCommand('FontSize',false,7);  //指定背景色。true或false都可以
document.execCommand('FontName',false,'标楷体');  //字体必须是系统支持的字体。true或false都可以
document.execCommand('Bold'); //字体加粗
document.execCommand('Italic'); //斜体字
}
/*
*该function用来将选中的区块加上不同的线条
*/
function fn_change_selection()
{
document.execCommand('Underline'); //将选中的文字加下划线
document.execCommand('StrikeThrough'); //在选中的文字上划粗线
document.execCommand('SuperScript'); //将选中的部分文字变细
document.execCommand('Underline');  //将选中区块的下划线取消掉
}
/*
*该function用来将选中的区块排成不同的格式
*/
function fn_format()
{
document.execCommand('InsertOrderedList'); //有序列排列
document.execCommand('InsertUnorderedList'); //实心无序列排列
document.execCommand('Indent'); //空心无序列排列
}
/*
*该function用来将选中的区块剪下或是删除掉
*/
function fn_CutOrDel()
{
//document.execCommand('Delete'); //删除选中的区块
document.execCommand('Cut'); //剪下选中的区块
}
/*
*该function用来将选中的区块重设为一个相应的物件
*/
里面还有别的类似这样的代码
```

#### 问题二 

**插入图片**的问题

百度的方法

```

    //插入图片
    var insertImage = document.getElementsByClassName('font_photo')[0]
    // 当元素的值发生改变时，会发生 change 事件。
    insertImage.addEventListener('change',function(event){
        //获取上传的文件对象
        var file = this.files[0]
        //实例化一个fileReader对象
        var reader = new FileReader()
        //上传的文件是一个图片，将其读取为数据URI形式保存在result属性中
        reader.readAsDataURL(file)
        //读取完毕
        reader.addEventListener('load',(event) => {
            var img = document.createElement('img')
            img.src = reader.result
            img.setAttribute('width','500px')
            //在content里插入图片
            textElement .appendChild(img)
            insertImage.value = ''
        })
        reader.addEventListener('loadend',(event) => {
            console.log('结束')
        })
    })

```























