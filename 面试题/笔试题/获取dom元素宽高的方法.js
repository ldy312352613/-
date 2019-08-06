//来自百度, 供参考: 

//关于页面don元素的宽高*
// 第一种情况就是宽高都写在样式表里，就比如#div1{width:120px;}。
  // 这种情况通过#div1.style.width拿不到宽度，
  // 而通过#div1.offsetWidth才可以获取到宽度。
// 第二种情况就是宽和高是写在行内中，比如style="width:120px;"，
  // 这种情况通过上述2个方法都能拿到宽度。

//其他: 
//网页可见区域宽: 
document.body.clientWidth;
//网页可见区域高:
document.body.clientHeight;
//网页可见区域宽:(包含边线)
document.body.offsetWidth;
//网页可见区域高:(包含边线)
document.body.offsetHeight;
//网页正文全文宽:
document.body.scrollWidth;
//网页正文全文高:
document.body.scrollHeight;
//网页被卷去的高:
document.body.scrollTop;
//网页被卷去的左:
document.body.scrollLeft;
//网页正文部分上:
window.screenTop;
//网页正文部分左:
window.screenLeft;
//屏幕分辨率的高:
window.screen.height;
//屏幕分辨率的宽:
window.screen.width;
//屏幕可用工作区的高度:
window.screen.availHeight;
//屏幕可用工作区的宽度:
window.screen.availWidth;

//HTML精准定位:scrollLeft scrollWidth clientWidth offsetWidth
scrollHeight; //获取对象的滚动高度
scrollWidth; //获取对象的滚动宽度
scrollLeft; //设置或获取位于对象左边界的和窗口中目前可见内容的最左端之间的距离
scrollTop; //设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
offsetHeight; //获取对象相对于版面或由offsetParent属性指定的父坐标的高度
offsetWidth; //获取对象相对于版面或由offsetParent属性指定的父坐标的宽度
offsetLeft; //获取对象相对于版面或由offsetLeft属性指定的父坐标的计算机左侧位置
offsetTop; //获取对象相对于版面或由offsetTop属性指定的父坐标的计算机顶端位置
event.clientX; //相对文档的水平坐标
event.clientY; //相对文档的垂直坐标
event.offsetX; //相对容器的水平坐标
event.offsetY; //相对容器的垂直坐标
document.documentElement.scrollTop; //垂直方向滚动的值
event.clientX+document.documentElement.scrollTop; //相对文档的水平坐标+垂直方向滚动的量


