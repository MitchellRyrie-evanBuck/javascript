(function(window){
    function Player($audio){
        return new Player.prototype.init($audio)
    }
    Player.prototype = {
        constructor : Player,
        musicList : [],
        init : function($audio){
            this.$audio = $audio;
            this.audio = $audio.get(0); 
        },
        // 正在播放音乐的序号
        currentIndex : -1,
        // 播放音乐
        playMusic:function(index,music){
            // 判断是否是同一首音乐
            if(this.currentIndex == index){
                // 同一首音乐----	paused 设置或返回音频是否暂停。
                if(this.audio.paused){
                    this.audio.play()
                }else{
                    this.audio.pause()
                }
            }else{
                // 不是同一首  将传进来的地址获取到
                this.$audio.attr("src",music.link_url)
                this.audio.play()
                this.currentIndex = index
            }
        },
         // 上一首
        preIndex: function () {
            var index = this.currentIndex - 1;
            if(index < 0){
                index = this.musicList.length - 1;
            }
            return index;
        },
        // 下一首
        nextIndex: function () {
            var index = this.currentIndex + 1;
            if(index > this.musicList.length - 1){
                index = 0;
            }
            return index;
        },
         // 传进来的是点击删除的索引
        changeMusic: function (index) {
            // 删除对应的数据
            this.musicList.splice(index, 1);

            // 判断当前删除的是否是正在播放音乐的前面的音乐
            if(index < this.currentIndex){
                this.currentIndex = this.currentIndex - 1;
            }
        },
        // 格式化时间
        musicTimeUpdate: function (callBack) {
            var $this = this;
            this.$audio.on("timeupdate", function () {
                    //   currentTime----当前秒数  duration -- 总时长    
                var duration = $this.audio.duration;
                var currentTime = $this.audio.currentTime;
                var timeStr = $this.formatDate(currentTime, duration);
                callBack(currentTime, duration, timeStr);
            });
        },
        formatDate: function (currentTime, duration) {
            var endMin = parseInt(duration / 60); // 2
            var endSec = parseInt(duration % 60);
            if(endMin < 10){
                endMin = "0" + endMin;
            }
            if(endSec < 10){
                endSec = "0" + endSec;
            }

            var startMin = parseInt(currentTime / 60); // 2
            var startSec = parseInt(currentTime % 60);
            if(startMin < 10){
                startMin = "0" + startMin;
            }
            if(startSec < 10){
                startSec = "0" + startSec;
            }
            return startMin+":"+startSec+" / "+endMin+":"+endSec;
        },
        musicSeekTo: function (value) {
            if(isNaN(value)) return;
                //已播放的时长 = 总时长*进度条计算的百分比
            this.audio.currentTime = this.audio.duration * value;
        },
          //调整播放音量
        musicVoiceSeekTo: function (value) {
            if(isNaN(value)) return;
            if(value <0 || value > 1) return;
            // 0~1
            this.audio.volume = value;
        }
    }
    Player.prototype.init.prototype = Player.prototype
    window.Player = Player
})(window)