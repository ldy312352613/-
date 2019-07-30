    
      //数组降维 将二维数组将为一维数组
 var arr=[
    [0,1,2,3,4],
    [5,6,7,8,9],
    [11,12,13,14,15],
    [16,17,18,19,"jj"]
]
   
    var arr = [ 
                [   [
                        [44,44,44,44],
                        [4,4,4,4,4]
                    ],
                    [3,3,3],
                    [33,33,33]
                ],
                [1,1,1],
                [4,5,6]
            ];


// //第一种  
// arr=String(arr).split(",")
// //第二种
// //arr=Array.prototype.concat.apply([],arr)
//第三种
// var result=[]
// for(var r=0;r<arr.length;r++){
//     for(var c=0;c<arr[r].length;c++){
//         result.push(arr[r][c])
//     }
// }
//第四种
// var result=[]
// for(var r=0;r<arr.length;r++){
//       result=result.concat(arr[r])
// }
//第五种
//var result=[].concat.apply([],arr)
//Array.prototype.concat.apply([],arr)=[].concat.apply([],arr),,,又等于==[].concat(arr[0],arr[1],·····,arr[arr.length-1])等于第二种方法

 //console.log(result)


 //如何判断arr是不是数组


var ar={
    a:11
}
function isArray(arr){  
    if (typeof Array.isArray === "function") {       
        return Array.isArray(arr);      
    }else{       
        return Object.prototype.toString.call(arr) === "[object Array]";      
    }  
}

console.log(isArray(ar))