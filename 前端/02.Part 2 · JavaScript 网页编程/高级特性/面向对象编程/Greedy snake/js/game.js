(function () {
    // 游戏对象
    function Game(map) {
        this.map = map;
        this.food = new Food(map);
        this.snake = new Snake(map);
    }

    // 开始游戏
    Game.prototype.start = function () {
        // 初始化食物和蛇模型
        this.food.render();
        this.snake.render();
        // 运动逻辑
        this.snake.move();
        this.snake.remove(this.map);
        this.snake.render();
    };

    // 利用 window 对象暴露 Game 函数可以给外部使用
    window.Game = Game;
})();