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
        wolfAnimation()

    })
    // 4. 监听重新开始按钮
    $(".reStart").click(function(){
        $(".mask").stop().fadeOut(100);
        progressHandler();
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
            progressWidth -= 1;
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

            }
        },30);
    }

    // 定义一个专门处理进度条的方法
    function wolfAnimation(){
        // 定义两个数组保存所有位置
        
    }









})