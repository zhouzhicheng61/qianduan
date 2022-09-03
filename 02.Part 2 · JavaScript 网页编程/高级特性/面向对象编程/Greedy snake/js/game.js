(function () {
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
})();