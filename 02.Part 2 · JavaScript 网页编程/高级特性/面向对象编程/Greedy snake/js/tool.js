// 封装一个工具对象
(function () {
    var Tools = {
        // 得到一个两数之间的随机整数，包括两个数在内
        getRandomIntInclusive: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
        },
        // 获取随机颜色的方法
        getRandomColor: function () {
            var r = this.getRandomIntInclusive(0, 255);
            var g = this.getRandomIntInclusive(0, 255);
            var b = this.getRandomIntInclusive(0, 255);
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
})();