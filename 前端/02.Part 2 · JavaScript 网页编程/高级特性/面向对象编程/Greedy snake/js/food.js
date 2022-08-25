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
    this.color = options.color || "rgb(166, 226, 46)";
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
    e.style.position = "fixed";
    e.style.width = this.width + "px";
    e.style.height = this.height + "px";
    e.style.left = this.x + "px";
    e.style.top = this.y + "px";
    e.style.color = this.color;
    // 给父元素添加子元素
    this.parent.appendChild(e);
    // 将这个子元素添加到数组中
    this.elements.push(e);
    console.log(this);
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
}

// 利用 window 对象暴露 Food 函数可以给外部使用
window.Food = Food;


