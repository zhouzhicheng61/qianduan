// 将所有的模块代码按照一定的顺序进行复制
// ===========================================Tools==================================
(function (window, undefined) {
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

    // 利用 window 对象暴露 Tools 函数可以给外部使用
    window.Tools = Tools;
})(window, undefined);
// ===========================================Food==================================
(function (window, undefined) {
    // 食物对象
    function Food(parent, options) {
        // 父元素
        this.parent = parent;
        // options中包含各种属性：宽度、高度、定位位置、背景颜色
        options = options instanceof Object ? options : {};    // 确保options无论有无内容都是对象
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.backgroundColor = options.backgroundColor || "rgb(166, 226, 46)";
        // 储存渲染出来的所有元素
        this.elements = [];
    }

    // 渲染方法
    Food.prototype.render = function () {
        // 创建新的元素
        var e = document.createElement('div');
        // 获取一组随机定位位置
        this.x = this.getRandomIntInclusive(this.parent.offsetWidth);
        this.y = this.getRandomIntInclusive(this.parent.offsetHeight);
        // 添加样式
        e.style.position = "absolute";
        e.style.width = this.width + "px";
        e.style.height = this.height + "px";
        e.style.left = this.x + "px";
        e.style.top = this.y + "px";
        e.style.backgroundColor = this.backgroundColor;
        // 给父元素添加子元素
        this.parent.appendChild(e);
        // 将这个子元素添加到数组中
        this.elements.push(e);
    };

    // 删除方法
    Food.prototype.remove = function (i) {
        // 从HTML结构中删除
        this.parent.removeChild(this.elements[i]);
        // 从数组中删除
        this.elements.splice(i, 1);
    };

    // 生成范围内能整除自身属性的坐标值方法
    Food.prototype.getRandomIntInclusive = function (max) {
        return Math.ceil((Tools.getRandomIntInclusive(0, max) / 20) - 1) * 20;
    };

    // 修改坐标随机方法
    Food.prototype.positionRandom = function (e) {
        this.x = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetWidth) / 20) - 1) * 20;
        this.y = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetHeight) / 20) - 1) * 20;
        e.style.left = this.x + "px";
        e.style.top = this.y + "px";
    };

    // 利用 window 对象暴露 Food 函数可以给外部使用
    window.Food = Food;
})(window, undefined);
// ===========================================Snake==================================
(function (window, undefined) {
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
})(window, undefined);
// ===========================================Game==================================
(function (window, undefined) {
    // 定义一个全局变量来存储this
    var that;
    // 定义一个全局变量来修改游戏速度
    var interval = 100;
    // 游戏对象
    function Game(map) {
        this.map = map;
        this.food = new Food(map);
        this.snake = new Snake(map);
        that = this;
    }

    // 开始游戏
    Game.prototype.start = function () {
        // 初始化食物和蛇模型
        this.food.render();
        this.food.render();
        this.food.render();
        this.food.render();
        this.snake.render();

        // 蛇运动起来
        function runSnake() {
            var timer = setInterval(function () {
                // 运动逻辑
                that.snake.move();
                that.snake.remove(this.map);
                that.snake.render();

                // 获取蛇头位置像素值
                var hx = that.snake.body[0].x * that.snake.width;
                var hy = that.snake.body[0].y * that.snake.height;
                // 从众多食物中去判断，哪个食物被吃了
                for (let index = 0; index < that.food.elements.length; index++) {
                    // 判断蛇头是否吃到食物
                    var foodX = parseFloat(that.food.elements[index].style.left);
                    var foodY = parseFloat(that.food.elements[index].style.top);
                    if (hx == foodX && hy == foodY) {
                        that.food.remove(index);
                        that.food.render();
                        // 增长蛇身
                        var last = that.snake.body[that.snake.body.length - 1];
                        that.snake.body.push(
                            { x: last.x, y: last.y, color: last.color }
                        )
                    }
                }

                // 判断是否超出地图范围
                var maxX = that.map.offsetWidth / that.snake.width;
                var maxY = that.map.offsetHeight / that.snake.height;
                var headX = that.snake.body[0].x;
                var headY = that.snake.body[0].y;
                if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                    clearInterval(timer);
                    alert("GG");
                }

            }, interval);
        }
        runSnake();

        // 控制蛇运动方向
        function bindKey() {
            document.onkeydown = function (e) {
                switch (e.keyCode) {
                    case 37:
                        that.snake.direction = "left";
                        break;
                    case 38:
                        that.snake.direction = "up";
                        break;
                    case 39:
                        that.snake.direction = "right";
                        break;
                    case 40:
                        that.snake.direction = "down";
                        break;
                    // case 32:
                    //     interval = 50;
                    //     break;
                }
            };
        }
        bindKey();
    };

    // 利用 window 对象暴露 Game 函数可以给外部使用
    window.Game = Game;
})(window, undefined);
// ===========================================main==================================
(function (window, undefined) {
    // 先获取对象
    var map = document.getElementById("map");
    var game = new Game(map);
    game.start();
})(window, undefined);