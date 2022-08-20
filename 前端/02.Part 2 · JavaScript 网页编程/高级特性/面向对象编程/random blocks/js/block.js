// 随机方块的构造函数
function Block(parent, options) {
    this.parent = parent;
    // options中包含各种属性：宽度、高度、背景颜色、定位位置
    options = options || {};    // 确保options无论有无内容都是对象
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.backgroundColor = options.backgroundColor || "rgb(255, 255, 255)";
    this.x = options.x || 0;
    this.y = options.y || 0;
}

Block.prototype.render = function () {
    // 创建新的元素
    this.ele = document.createElement('div');
    // 找到舞台
    this.parent.appendChild(this.ele);
    // 添加样式
    this.ele.style.width = this.width + "px";
    this.ele.style.height = this.height + "px";
    this.ele.style.backgroundColor = this.backgroundColor;
    this.ele.style.left = this.x + "px";
    this.ele.style.top = this.y + "px";
};

Block.prototype.positionRandom = function () {
    this.x = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetWidth) / 20) - 1) * 20;
    this.y = Math.ceil((Tools.getRandomIntInclusive(0, this.parent.offsetHeight) / 20) - 1) * 20;
    this.ele.style.left = this.x + "px";
    this.ele.style.top = this.y + "px";
}

Block.prototype.colornRandom = function () {
    this.ele.style.backgroundColor = Tools.getRandomColor();
}
