// 运动函数（目标元素对象，目标属性对象，运动时间）
function animate(ele, end, time) {
    // 设置默认参数
    var timer;  // 定时器对象
    var count = 0;  // 计数器
    var interval = 20; // 时间间隔
    var maxCount = time / interval; // 最大移动次数

    // 获取元素要改变的属性的初始状态
    var start = {};
    var step = {};
    for (const key in end) {
        start[key] = window.getComputedStyle(ele)[key]; // 初始状态
        step[key] = (parseFloat(end[key]) - (parseFloat(start[key]))) / maxCount; // 计算步长值
    }

    // 开始移动
    clearInterval(timer);   // 清除先前的定时器对象
    timer = setInterval(function () {
        // 计算下一步的属性值
        for (const key in start) {
            start[key] = parseFloat(start[key]) + step[key];
        }
        // 计数
        count++;
        // 如果计数器达标则拉终停表
        if (count >= maxCount) {
            clearInterval(timer);
            for (const key in start) {
                start[key] = end[key];
            }
        }
        // 给元素属性赋值
        for (const key in start) {
            if (key === "opacity") {
                ele.style[key] = start[key];
            } else {
                ele.style[key] = start[key] + "px";
            }
        }
    }, interval);
}