// 侧边导航显示，滚动到第一层的时候显示
// 获取一层页面高度
var $jia_offsetTop = $('.jia').offset().top;
// 获取二层页面高度
var $dian_offsetTop = $('.dian').offset().top;
// 获取三层页面高度
var $fu_offsetTop = $('.fu').offset().top;
// 获取四层页面高度
var $mei_offsetTop = $('.mei').offset().top;
// 获取侧边栏
var $subnav = $('.subnav');
// 获取侧边栏全部li标签
var $lis = $('.subnav').children('ul').children()
// 页面滚动事件
$(document).scroll(function () {
    var $document_scrollTop = $(this).scrollTop();
    // 判断是否显示侧边栏
    if ($document_scrollTop >= $jia_offsetTop) {
        $subnav.show();
    }
    else {
        $subnav.hide();
    };
    // 对应楼层的li标签高亮显示
    if ($document_scrollTop >= $jia_offsetTop) {
        $lis.eq(0).addClass('current').siblings().removeClass('current');
    }
    if ($document_scrollTop >= $dian_offsetTop) {
        $lis.eq(1).addClass('current').siblings().removeClass('current');
    }
    if ($document_scrollTop >= $fu_offsetTop) {
        $lis.eq(2).addClass('current').siblings().removeClass('current');
    }
    if ($document_scrollTop >= $mei_offsetTop) {
        $lis.eq(3).addClass('current').siblings().removeClass('current');
    }
});

// 侧边栏点击事件
$lis.click(function () {
    var idx = $(this).index();
    var value = $('.louceng .jd').eq(idx).offset().top;
    $('html').stop(true).animate({ scrollTop: value }, 1000);
});