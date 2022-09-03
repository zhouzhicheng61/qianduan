(function () {
    // 蛇对象
    function Snake(parent, options) {
        // 父元素
        this.parent = parent;
        // options中包含各种属性：宽度、高度、背景颜色、定位位置
        options = options || {};    // 确保options无论有无内容都是对象
        this.width = 20;
        this.height = 20;
        // 设置蛇身属性
        this.body = [
            { x: 3, y: 2, color: "red" },// 蛇头
            { x: 2, y: 2, color: "blue" },
            { x: 1, y: 2, color: "blue" }
        ];
        this.direction = "right";
        this.elements = [];
    }

    // 渲染方法
    Snake.prototype.render = function () {

        // 遍历数组
        for (let index = 0, len = this.body.length; index < len; index++) {
            // 拿到对应部分的蛇节
            var piece = this.body[index];
            // 创建新的元素
            var ele = document.createElement('div');
            // 添加样式
            ele.style.position = "absolute";
            ele.style.width = this.width + "px";
            ele.style.height = this.height + "px";
            ele.style.backgroundColor = piece.color;
            ele.style.left = piece.x * this.width + "px";
            ele.style.top = piece.y * this.height + "px";
            // 给父元素添加子元素
            this.parent.appendChild(ele);
            // 将元素添加进数组
            this.elements.push(ele);
        }
    };

    // 运动
    Snake.prototype.move = function () {
        // 后面的位置变成前一个蛇节的位置,循环从最后往前变
        for (let index = this.body.length - 1; index > 0; index--) {
            this.body[index].x = this.body[index - 1].x;
            this.body[index].y = this.body[index - 1].y;
        }
        // 蛇头运动单独判断
        var head = this.body[0];
        switch (this.direction) {
            case "right":
                head.x += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
        }
    };

    // 删除上一次渲染的所有蛇节
    Snake.prototype.remove = function (map) {
        for (let index = this.elements.length - 1; index >= 0; index--) {
            map.removeChild(this.elements[index]);
        }
        this.elements = [];
    };

    // 修改坐标方法
    Snake.prototype.changePosition = function () {
        this.ele.style.left = this.x + "px";
        this.ele.style.top = this.y + "px";
    };

    // 利用 window 对象暴露 Snake 函数可以给外部使用
    window.Snake = Snake;
})();