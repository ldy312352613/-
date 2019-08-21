

1.请看上述代码：
    var m=true;setTimeout(function(){m=false},3000);while(m){}alert("ok");
    请问多久能弹出OK

2.请实现下javaScript多线程如何简单实现？

3.见识HTTP缓存策略（本地缓存/重新请求考虑）

//4.请问本体的输出结果是：
    const a=[];for(var i=0;i<10;i++){a.push(function(){return console.log(i)})};
    a[0]()  //10
    a[1]()  //10

// 5.请写出下列JS对比的结果：
    console.log(typeof {}==="object")  //true
    console.log(typeof []==="object")  //true
    console.log(typeof [5,9,1]===[5,9,1])  //false
    console.log(typeof [1,9,8]===[3,1,9])  //false
    console.log(typeof {}==={})            //false
    console.log(typeof {a:1}==={a:1})      //false
    
6.使用canvas绘制一个三角形并填充颜色为绿色


7.写一个函数，输入一个数组a，找到里面是否存在三个不同的元素，
使的a[i]+a[j]==a[k]，如果能找到就输出true 找不到输出false
举例：
输入var a1=[1,5,10,25,9,17,100],输出 flse
输入var a1=[2,99,3,5],输出 true
输入var a1=[1,50,0,5],输出 flse


//8.写程序。填写输出结果
    var a=1
    var b=2
    function func(){
     var   a=b=c=3   
    }
    func()
    console.log(a,b,c)
   // a= 1   b= 3   c= 3

//9.写程序。填写输出结果
    var uname="jack"
    function change(){
        alert(uname);  //undefined
        var uname="lily"
        alert(uname)
    }
    change()  //lily


//10.写程序。填写输出结果
    function Gyyx(){
        this.test=function(){
            alert("Gyyx01")
        }
    }
    Gyyx.prototype.test=function(){
        alert("Gyyx02")
    }
    new Gyyx().test()  //Gyyx01

//11.display:none和visibilty:hedden的区别
    //none表示完全没有, 当前的位置会被后面的元素补上来
    //hidden仅仅是隐藏, 但是他的位置会保留

//12.垂直居中有哪些方法

//13.行内元素有哪些？块级元素有哪些？css的盒子模型

//14.css引入的方式有哪些？link和@import的区别是？


//15.module。exports和exports的区别

16.为什么利用更多个域名来储存网络资源会更有效

17.使用jquery检查 <input type="hidden" id="id" name="id"/>元素在网页上是否存在
    A：if（$(#id)){}
    B:if（$(#i).length>0){}
    C:if（$(#id).length()>0){}
    D:if（$(#id).size>0){}
18.在jquery中，如果想要从DOM中删除所有匹配的元素，下面哪一个是正确的（）
    A：delete（）
    B: empty（）
    C: remove（）
    D:  removeAll（）

19.在一下代码中 哪些变量是全局变量？
<script type="text/javascript">
    var a=1;
    function foo(){
    if(a==1){
        var b=2;
        if(b==2){
        c=3
        }
    }
    }
    foo()
</script>
A:只有a   B：a和c   C：b和c   D：a、b、c、都是

{
    简答题
20：javascript的typeog返回哪些数据类型
21：举例3宗强制例行转换和两种饮食类型转换
22：split（）join（）的区别
23：数组方法pop()push()unshift()shift()的用法
24：ajax请求的时候get和post方式的区别
25：ajax请求时，如何解析json数据
26："=="和"==="的不同
27：请列举减少三种减少页面加载时间的方法
28：请解释js中this是如何工作的
    编程题
29：1~n之间所有奇数之和，又有偶数之和
30：编写一个方法 计算一个数组中连续值共有多少对
    例如：[1,2,3,3,4,5,5,5,7,8,8]其中连续值共有3对
31：编写一个方法去掉数组俩面重复的内容 var arr=[1,2,3,4,5,1,2,3]
32:请用js去除字符串空格 str="hel l o w w orld"
33:获取浏览器 URL 中参数并保存为{"key":"value"}形式，测试地址如下：
    http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23
}

{
34:Math.round(11.5)等于多少？Math.round(-11.5)等于多少
35：var a=1；a==”1“成立？a==="1"成立？
36:var b=0;var v=2;b?c=3:c=5;c的值为？
37：var i=1;var b=++i b和i的值为
38：当代码运行到一半时，抛出了异常，后面的代码还会运行吗？
39：var a=26;var b=25; alert("a+b="+a+b)将显示什么
}

40：console.log(1)
    setTimeout(function (){
        console.log(2)
    },0)
    Promise.resolve().then(function(){
        console.log(3)
    })
    console.log(4)

41:var a=10;
    sayHi();
    function sayHi(){
        a=a+10;
        console.log(a)
        return a
    }
    console.log(a)
    console.log(sayHi()+10)
42:var a=10;
    sayHi();
    function sayHi(){
        var a=a+10;
        console.log(a)
        return a
    }
    console.log(a)
    console.log(sayHi()+10)

43:setTimeout(function(){
        console.log(1)
    },0)
    new Promise(function executor(resolve){
        console.log(2)
        for(var i=0;i<10000;i++){
            i==9999&resolve()
        }
        console.log(3)
    }).then(function(){
        console.log(4)
    })
    console.log(5)

44:function Gyyx(){
        this.test=function(){
            alert("Gyyx01")
        }
    }
    Gyyx.prototype.test=function(){
        alert("Gyyx02")
    }
    new Gyyx().test()


45:watch和computed的区别和运用的场景

{
    46：盒子模型有时候会出现设置背景、边框无法成大和设置内外边距差异，
    一般来说导致此类问题的原因是？
    47：有两个并列的div块为A何B，加入A块宽50px并且带浮动，
    如果我想要讲B的左外简介设置调整10px，解决方案有哪些？
    48：HTML标签是否能够自定义，变迁所抱哈的属性是否支持自定义，
    如果可以自定义，那怎么实现？
    49：<style>
            ul{width:300px;height:50px;}
            li{width:50px;height:50px;background:blue;display:inline-block}
        </style>
        <body>
			<ul>
				<li></li>
				<li></li>
			</ul>
		</body>
        本代码执行后发现li标签之间有间隙，该怎么修改？
    50：设置margin的上下和设置宽高无效，其他有效的元素有哪些？
    51：如何利用一个标签实现类似“——————————第三方登录——————————”这种效果

}
52：var a=1
    function foo(){
        var a=2;
        var b=3
        alert(b)
        c=4
    }
    alert(a)
    foo()
    alert(c)
    
53:有一个html文件  依次打印出来的信息正确的是：
    <script>
        var show=function(){
        alert("show_function")
    }
    </script>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body onload="alert('onload')">
        <script>
            alert("in_body")    
        </script>
    </body>
    </html>
    <script>
        show()
    </script>
    
    
{
54：列举常用web性能优化方法
55：全段页面有那三层构成 分别是什么 作用是什么
56：用css画一个三角形（任何方向都可以）
57：列举几种可以清楚浮动的方法（至少两种）
58：浏览器中的数据储存方式有哪些方式？分别有什么？
59：为什么会出现跨域的问题以及解决方式？
60：编写一个数组去重的方法
61：var a=1;
    function test(){
        console.log(a)
        var a=2;
        console.log(this.a);
        setTimeout(function(){
            console.log(a)
        },0)
    } 
    test()
}
    
62:     
    function createComparisonFunction(propertyName){
        return function(object1,object2){
            var value1=object1[propertyName]
            var value2=object2[propertyName]
        
            if(value1<value2){
                return -1;
            }else if(value1>value2){
                return 1;
            }else{
                return 0
            }
        }
}
 var compare=createComparisonFunction("name");
 var result=compare({name:"Nicholas"},{name:"Greg"})
 console.log(result)

{
63：split（）和join（）的区别
64：添加、删除、替换、插入到某个节点的方法分别是什么
65：事件绑定和普通时间有什么区别？事件委托是什么
66：闭包是什么
}











vue={
    1:vue是怎么实现的响应式？检测数据变化有哪些需要注意的地方
    2：vue-router实现原理？
    3：vuex解决了什么问题
    4：vue源码包含了哪些目录，里面的内容是？
}




烧脑题{
    1. -1,0,3,12，（）
    2.烧一根不均与的绳要用一个小时。如何用它来判断半个小时
    3.你让工人为你工作七天，给用人的回报是一根金条，金条平分成相同的七段，
      你必须在每天结束的时候哥他们一段金条，如果只许你两次把金条弄断，你如何给工人付费
    4.你有私人装药丸的管子，每个药丸都有一定的重量，被污染的药丸是没有被污染的重量+1
    只称量一次，如何判断哪个罐子的要被污染了？
}



var a=[123,{a:"1"},{a:{b:2}},{a:1},"meili","null",123,{a:"1"},{a:{b:2}},{a:1},"meili","null"]
var b=[123,[1,2,3],[1,"2",3],"meili",123,[1,2,3],[1,"2",3],"meili"]
var c=[123,"meili","123","mogu",undefied,123,"meili","123","mogu",undefied]
funciton remove(data){
    let obj={};
    return data.filter(item=>{
       item=JSON.stringify(item)
       let match=Boolean(obj[item]);
       return match?false:obj[item]=true
    })     
}