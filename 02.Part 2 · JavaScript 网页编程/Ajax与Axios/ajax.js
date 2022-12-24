/**
 * 参数1：{string}      method  请求方法
 * 参数2：{string}      url     URL请求地址
 * 参数3：{Object}      params  请求参数
 * 参数4：{function}    done    请求完成后的回调函数
 * */
function ajax(method, url, params, done) {
    // 统一将方法中的字母转大写，便于后面判断
    method = method.toUpperCase();
    // IE6兼容写法
    var xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP');
    // 将对象格式的参数转换为urlencoded的格式
    var pairs = [];
    for (var k in params) {
        pairs.push(k + "=" + params[k]);
    }
    var str = pairs.join("&");
    // 判断是否是get方法，需要修改url的值
    if (method === 'GET') {
        url += "?" + str;
    }
    // 创建打开一个连接
    xhr.open(method, url);
    // 发送时，如果是GET方法就是null,如果是post方法，就需要设置请求头，还有请求体
    var data = null;
    if (method === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        data = str;
    }
    xhr.send(data);
    // 执行回调函数
    xhr.onreadystatechange = function () {
        // 状态不是4返回
        if (this.readyState !== 4) return;
        // 把响应体返回给回调函数
        done(JSON.parse(this.responseText));
    };
};