1、 标题的使用格式
# 一阶标题 或者快捷键Ctrl+1

##二阶标题 或者快捷键Ctrl+2

###三阶标题 或者快捷键Ctrl+3

####四阶标题 或者快捷键Ctrl+4

#####五阶标题 或者快捷键Ctrl+5

######六阶标题 或者快捷键Ctrl+6

2、 下划线使用格式
\下划线的内容\<\u> 或者快捷键Ctrl+U

3、 删除线使用格式
\~\~删除线的内容\~\~



4、 字体加粗使用格式
加粗字体 或者快捷键Ctrl+B

5、 字体倾斜使用格式
字体倾斜了 或者快捷键Ctrl+I

6、 图片插入格式
最简单的方法就是： 


7、 列表使用格式
-[ ]文字 （注：注意用空格隔开）
+ 、- 、* 创建无序列，任意数字开始+空格创建有序列表
8、 引用的使用格式
>+空格

9、 快捷键的使用
快捷键	作用	快捷键	作用
Ctrl+1	一阶标题	Ctrl+B	字体加粗
Ctrl+2	二阶标题	Ctrl+I	字体倾斜
Ctrl+3	三阶标题	Ctrl+U	下划线
Ctrl+4	四阶标题	Ctrl+Home	返回Typora顶部
Ctrl+5	五阶标题	Ctrl+End	返回Typora底部
Ctrl+6	六阶标题	Ctrl+T	创建表格
Ctrl+L	选中某句话	Ctrl+K	创建超链接
Ctrl+D	选中某个单词	Ctrl+F	搜索
Ctrl+E	选中相同格式的文字	Ctrl+H	搜索并替换

Alt+Shift+5	删除线	Ctrl+Shift+I	插入图片
--------------------- 
三个反引号就是代码区：```

如下:这是个轮播图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Swiper的切换</title>
    <link href="swiper-4.3.5.min.css" rel="stylesheet">
   
   	<style>
   		@charset "utf-8";
/* CSS Document */

#certify {
    position: relative;
    width: 1200px;
    margin: 0 auto
}

#certify .swiper-container {
    padding-bottom: 60px;
}

#certify  .swiper-slide {
    width: 520px;
    height: 408px;
    background: #fff;
    box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
    display:block;
}
#certify  .swiper-slide p {
    line-height: 98px;
    padding-top: 0;
    text-align: center;
    color: #636363;
    font-size: 1.1em;
    margin: 0;
}

#certify .swiper-pagination {
    width: 100%;
    bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
    border: 3px solid #fff;
    background-color: #d5d5d5;
    width: 10px;
    height: 10px;
    opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
    border: 3px solid #00aadc;
    background-color: #fff;
}

#certify .swiper-button-prev {
    left: -30px;
    width: 45px;
    height: 45px;
    background: url(image/VowTmR.png) no-repeat;
    background-position: 0 0;
    background-size: 100%;
}

#certify .swiper-button-prev:hover {
    background-position: 0 -46px;
    background-size: 100%
}

#certify .swiper-button-next {
    right: -30px;
    width: 45px;
    height: 45px;
    background: url(image/VowTmR.png) no-repeat;
    background-position: 0 -93px;
    background-size: 100%;
}

#certify .swiper-button-next:hover {
    background-position: 0 -139px;
    background-size: 100%
}
   	</style>
    <script src="swiper-4.3.5.min.js"></script>

</head>
<body>
<div id="certify">
<div class="swiper-container">
<div class="swiper-wrapper">
<div class="swiper-slide"><img src="image/一日三餐.png" /><p>测试文本1</p></div>
<div class="swiper-slide"><img src="image/全部菜谱.png" /><p>测试文本2</p></div>
<div class="swiper-slide"><img src="image/我的收藏.png" /><p>测试文本3</p></div>
<div class="swiper-slide"><img src="image/最近浏览.png" /><p>测试文本4</p></div>
<div class="swiper-slide"><img src="image/菜谱分类.png" /><p>测试文本5</p></div>
</div>
</div>
<div class="swiper-pagination"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>
</div>

<script>
certifySwiper = new Swiper('#certify .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        //clickable :true,
    },
    on: {
        progress: function(progress) {
            for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;
                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 260 + 'px';
                scale = 1 - Math.abs(slideProgress) / 5;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                }
            }
        },
        setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
            }

        }
    }

})
</script>
</body>
</html>



```



