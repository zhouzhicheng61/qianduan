// 食物对象
function Food(parent, options) {
    // 父元素
    this.parent = parent;
    // options中包含各种属性：宽度、高度、背景颜色、定位位置
    options = options || {};    // 确保options无论有无内容都是对象
    this.width = 20;
    this.height = 20;
    this.backgroundColor = "rgb(166, 226, 40)";
    this.x = options.x || 0;
    this.y = options.y || 0;
}

// 渲染方法
Food.prototype.render = function () {
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

// 生成范围内能整除自身属性的坐标值方法
Food.prototype.getRandomIntInclusive = function (max) {
    return Math.ceil((Tools.getRandomIntInclusive(0, max) / 20) - 1) * 20;
};

// 修改坐标随机方法
Food.prototype.positionRandom = function () {
    this.x = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetWidth) / 20) - 1) * 20;
    this.y = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetHeight) / 20) - 1) * 20;
    this.ele.style.left = this.x + "px";
    this.ele.style.top = this.y + "px";
}


