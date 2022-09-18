// 侧边导航显示，滚动到第一层的时候显示
// 获取楼层整体
var $jds = $('.louceng .jd');
// 使用数组存储每一层的距离页面顶部的高度
var arr = [];
$jds.each(function (i) {
    arr[i] = $(this).offset().top;
});
// 获取侧边栏
var $subnav = $('.subnav');
// 获取侧边栏全部li标签
var $lis = $('.subnav').children('ul').children()
// 页面滚动事件
$(document).scroll(function () {
    var $document_scrollTop = $(this).scrollTop();
    // 判断是否显示侧边栏
    if ($document_scrollTop >= arr[0]) {
        $subnav.show();
    }
    else {
        $subnav.hide();
    };
    // 对应楼层的li标签高亮显示
    $jds.each(function (index) {
        if ($document_scrollTop >= arr[index]) {
            $lis.eq(index).addClass('current').siblings().removeClass('current');
        };
    });
});

// 侧边栏点击事件
$lis.click(function () {
    var idx = $(this).index();
    $('html').stop(true).animate({ scrollTop: arr[idx] }, 1000);
});