// 根据元素的id来获取元素
function my$(id) {
    return document.getElementById(id);
};

// 给元素绑定事件
function addEvent(ele, type, fun) {
    if (ele.addEventListener) {
        ele.addEventListener(type, fun);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, fun);
    }
}

// 给元素注销事件
function removeEvent(ele, type, fun) {
    if (ele.removeEventListener) {
        ele.addEventListener(type, fun);
    } else if (ele.attachEvent) {
        ele.detachEvent("on" + type, fun);
    }
}