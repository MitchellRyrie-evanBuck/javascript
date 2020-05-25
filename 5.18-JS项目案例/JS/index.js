
    var textElement = document.getElementsByClassName("text")[0]
    //字体变粗
    function font_bold(){
        document.execCommand('bold','flase',null); 
    }

    // 变斜体
    function font_Italic(){
        document.execCommand('Italic');
    }

    //下划线
    function font_Underline(){
        document.execCommand('Underline')
    }

    //删除线
    function font_StrikeThrough(){
        document.execCommand('StrikeThrough')
    }

    //有序列表
    function font_InsertOrderedList(){
        document.execCommand('InsertOrderedList')
    }
    //无序空心列表
    function font_Indent(){
        document.execCommand('Indent')
    }

    //无序实心列表
    function font_solid(){
        document.execCommand('InsertUnorderedList')
    }


    //插入图片
    var insertImage = document.getElementsByClassName('font_photo')[0]
    // 当元素的值发生改变时，会发生 change 事件。
    insertImage.addEventListener('change',function(event){
        //获取上传的文件对象
        var file = this.files[0]
        //实例化一个fileReader对象
        // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件
		// 无论读取成功或失败，方法并不会返回读取结果，这一结果存储在 result属性中
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

    //字体颜色变化
    var colorPicker = document.getElementById('font_color')
    //监听颜色用户关闭选色器之后会触发change事件。
    colorPicker.addEventListener("change", (event)=>{
        var Color = document.getElementById('font_color').value
        document.execCommand("ForeColor", "", Color)
    });

    //背景颜色变化
    var colorPicker1 = document.getElementById('font_background')
    //监听颜色用户关闭选色器之后会触发change事件。
    colorPicker1.addEventListener("change", (event)=>{
        var Color = document.getElementById('font_background').value
        document.execCommand("BackColor", "", Color)
    });

//字体大小显示
function font_FontSize(){
    var font_size = fontSize.value
    document.execCommand('FontSize', false, font_size)
}

// 1~6级标题显示
function font_formatBlock(){
    var title_Num = title.value
    document.execCommand('formatBlock', false, '<' + 'h' + title_Num + '>')
}


var menu = document.getElementById('menu')
var conElement = document.getElementsByClassName("container-text")[0]
// 1.禁止浏览器窗口提供的默认右键菜单
document.addEventListener('contextmenu', function (event) {
    event.preventDefault()
})
let Bold = document.querySelector(".bold")
document.addEventListener('mousedown', function (event) {
    if (event.button === 2) {
        menu.style.left = event.clientX + 'px'
        menu.style.top = event.clientY + 'px'
        menu.style.display = 'block'
        // Bold.onclick = function(){
        //     document.execCommand('bold','flase',null); 
        // }
    } else if (event.button === 0) {
        menu.style.display = 'none'
    }
})