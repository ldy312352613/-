onmessage=function(e){
   for(var i=0;i<1000000000;i++){
     this.postMessage(i)
   }
}