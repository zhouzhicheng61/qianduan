// 蛇对象
function Snake(parent, options) {
    // 父元素
    this.parent = parent;
    // options中包含各种属性：宽度、高度、背景颜色、定位位置
    options = options || {};    // 确保options无论有无内容都是对象
    this.width = 20;
    this.height = 20;
    this.backgroundColor = "rgb(224, 64, 50)";
    this.x = options.x || 120;
    this.y = options.y || 60;
}

// 渲染方法
Snake.prototype.render = function () {
    // 创建新的元素
    this.ele = document.createElement('div');
    // 给父元素添加子元素
    this.parent.appendChild(this.ele);
    // 添加样式
    this.ele.style.position = "fixed";
    this.ele.style.width = this.width + "px";
    this.ele.style.height = this.height + "px";
    this.ele.style.backgroundColor = this.backgroundColor;
    this.ele.style.left = this.x + "px";
    this.ele.style.top = this.y + "px";
};

var aspect = "right";
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:  // left
            aspect = "left";
            break;
        case 38:  // up
            aspect = "up";
            break;
        case 39:  // right
            aspect = "right";
            break;
        case 40:  // down
            aspect = "down";
            break;
    }
};

// 运动
Snake.prototype.move = function () {
    let a1 = this;
    var timmer = setInterval(function () {
        switch (aspect) {
            case "left":
                a1.x -= a1.width;
                break;
            case "up":
                a1.y -= a1.height;
                break;
            case "right":
                a1.x += a1.width;
                break;
            case "down":
                a1.y += a1.height;
                break;
        }
        a1.changePosition();
    }, 50);
};

// 修改坐标方法
Snake.prototype.changePosition = function () {
    this.ele.style.left = this.x + "px";
    this.ele.style.top = this.y + "px";
}