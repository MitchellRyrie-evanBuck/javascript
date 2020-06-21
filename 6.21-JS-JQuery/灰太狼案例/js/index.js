$(function(){
    //  1. 监听游戏规则的点击
    $(".rules").click(function(){
        $("rule").stop().fadeIn(100);
    });

    // 2.监听关闭按钮得点击
    $(".close").click(function(){
        $(".rule").stop().fadeOut(100);
    });

    //  3. 监听开始游戏按钮的点击
    $(".start").click(function(){
        $(this).stop().fadeOut(100);
        // 调用进度条方法
        progressHandler();
        // 调用处理灰太狼动画的方法
        startWolfAnimation()

    })

    // 4. 监听重新开始按钮
    $(".reStart").click(function(){
        $(".mask").stop().fadeOut(100);
        progressHandler();
        // 调用处理灰太狼动画方法
        startWolfAnimation()
        // 重新开始时分数改为0分
        $(".score").text(0)
    })

    // 定义一个专门处理进度条的方法
    function progressHandler(){
        // 重新设置进度条宽度
        $(".progress").css({
            width : 180,
        })

        // 开启定时器进度条
        var timer = setInterval(function(){
            // 拿到当前进度条的宽度
            var progressWidth = $(".progress").width();
            // 减少当前的宽度
            progressWidth -= 5;
            // 重新给进度条赋值
            $(".progress").css({
                width : progressWidth
            });
            // 监听进度条是否走完
            if(progressWidth <= 0){
                // 关闭定时器
                clearInterval(timer)
                // 显示重新开始界面
                $(".mask").stop().fadeIn(100)
                // 停止灰太狼动画
                stopWolfAnimaton()
            }
        },300);
    }

    var wolfTimer
    // 定义一个专门处理灰太狼动画的方法
    function startWolfAnimation(){
        // 定义两个数组保存所有位置
        var wolf_1 = ["./images/h0.png","./images/h1.png","./images/h2.png","./images/h3.png",
        "./images/h4.png","./images/h5.png","./images/h6.png","./images/h7.png",
        "./images/h8.png","./images/h9.png",];
        var wolf_2 = ["./images/x0.png","./images/x1.png","./images/x2.png","./images/x3.png",
        "./images/x4.png","./images/x5.png","./images/x6.png","./images/x7.png",
        "./images/x8.png","./images/x9.png",];
        // 定义数组 保存可能出现的位置


        var arrPos = [
            {left : "100px" , top : "115px"},
            {left : "20px" , top : "160px"},
            {left : "190px" , top : "142px"},
            {left : "105px" , top : "193px"},
            {left : "19px" , top : "221px"},
            {left : "202px" , top : "212px"},
            {left : "120px" , top : "275px"},
            {left : "30px" , top : "295px"},
            {left : "209px" , top : "297px"}
        ]

        // 创建图片
        var $wolfImage = $("<img src='' class='wolfImage'>");
        // 随机获取图片的位置
        var posIndex = Math.round(Math.random()*8)
        // 设置图片显示位置
        $wolfImage.css({
            position : "absolute",
            top : arrPos[posIndex].top,
            left : arrPos[posIndex].left
            
        })
        // 随机获取数组类型
        var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
        // 设置图片的内容
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        wolfTimer = setInterval(function(){
            if(wolfIndex > wolfIndexEnd){
                $wolfImage.remove();
                clearInterval(wolfTimer);
                startWolfAnimation()
            }
            $wolfImage.attr("src",wolfType[wolfIndex]);
            wolfIndex++;
        },300)

        // 将图片添加上界面上
        $(".container").append($wolfImage);
        // 调用处理游戏规则的方法
        gameRules($wolfImage);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }

    function gameRules($wolfImage){
        $wolfImage.one("click",function(){
            // 修改索引
            window.wolfIndex = 5;
            window.wolfIndexEnd = 9

            // 拿到当前点击图片的地址
            var $src = $(this).attr("src");
            // 根据图片地址判断是否是灰太狼
            var flag = $src.indexOf("h") >= 0;

            // 根据点击图片类型增减分数
            if(flag){
                $(".score").text(parseInt($(".score").text()) + 10)
            }else{
                $(".score").text(parseInt($(".score").text()) - 10)
            }

        })
    }

    function stopWolfAnimaton(){
        $(".wolfImage").remove();
        clearInterval(wolfTimer);
    }






})