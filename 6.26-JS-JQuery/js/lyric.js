(function(window){
    function Lyric($audio){
        return new Lyric.prototype.init($audio)
    }
    Lyric.prototype = {
        constructor : Lyric,
        init : function(path){
            this.path = path;
        },
        // 用来存储歌词时间，与歌词
        times: [], lyrics: [],
        index: -1,
        loadLyric: function (callBack) {
            var $this = this;
            $.ajax({
                url: $this.path,
                dataType: "text",
                success: function (data) {
                    // console.log(data);
                    //  data 携带时间的歌词
                    $this.parseLyric(data);
                    callBack();
                },
                error: function (e) {
                    console.log(e);
                }
            });
        },
        parseLyric : function(data){
            var $this = this;
            // 初始化歌曲信息的时候一定要清空上一首的歌词信息
            $this.times = [];
            $this.lyrics = [];
            var array = data.split("\n");
            // console.log(array);
            // [00:00.92]
            var timeReg = /\[(\d*:\d*\.\d*)\]/
            // 遍历取出每一条歌词
            $.each(array,function(index,ele){
                // 处理歌词
                var lrc = ele.split("]")[1];
                if(lrc.length == 1) return true;
                $this.lyrics.push(lrc);

                // 处理时间 -----exec() 方法用于检索字符串中的正则表达式的匹配。
                var res = timeReg.exec(ele);
                if(res == null) return true;
                var timeStr = res[1];
                var res2 = timeStr.split(":");
                var min = parseInt(res2[0]) * 60;
                var sec = parseFloat(res2[1]);
                var time = parseFloat(Number(min + sec).toFixed(2)) ;
                // time 为总时间 
                $this.times.push(time);
            })
        },
        currentIndex: function (currentTime) {
            // console.log(currentTime);
            // 0.93 >= 0.92
            // 4.8 >= 4.75
            if(currentTime >= this.times[0]){
                this.index++; // 0  1
                this.times.shift(); // 删除数组最前面的一个元素
            }
            return this.index; // 1
        }

    }
    Lyric.prototype.init.prototype = Lyric.prototype
    window.Lyric = Lyric
})(window)