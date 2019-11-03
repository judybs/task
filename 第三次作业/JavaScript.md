//作业1

var a= 10;

var b= 8;

var result= a>b? b=a : b=a-2;

console.log(result);

//作业2

for(i=1;i<=100;i++){

​    if(i%3==0){

​        console.log(i);

​    }

}

//作业3

var a=1,

​        b=2,

​        tmp;

​    tmp=a;

​    a=b;

​    b=tmp;

console.log(a,b);

//作业4

function   sumOfSquare(a,b)

​    {var  r=0;

 

 r=a*a+b*b;

 

console.log(r);

  }

  sumOfSquare(11,22);

 

//作业5

const  num=[['a',0],['b',3],['c',6],['d',9]],

​    list=[ ];

  for(var i=0;i<=num.length;i++ )

  {

​      list[i]=num[i]

  }

console.log(list);

//作业6

html:<p>这是一个p标签</p>

js:var p =$('p#demo')

html：<div id="d1">这是一个div</div>

js:var d1 =$('#d1')

html:<div class="d1">这是一个div</div>

js:var d1 =$('.d1')

//这个任务做得有问题qaq

//作业7

var arr =[1,1,1,2,2,3,4,4,5,5,5];

function uniq(arr){

​    　　function arr1(){

​        var n=[];

  

​          for(var i=0;i<arr.length;i++)

  

​              if(n.indexOf(arr[i])==-1){

  

​                  n.push(arr[i]);

​              }

  

​          }

  

​          return n;

​      }

 

​      console.log(n);

//这个我看了差不多一个小时还是找不到问题orz

​    　　

​    

​    //作业8

let arr = [5, 3, 8, 1];

let result=[];

function filterRange(arr,a,b)

{for (var i in arr)

​    {

​    result[i]=arr[i];

}

result.pop();

result;//[5,3,8]

result.pop();

result;//[5,3]

result.shift();

result;//[3]

result.push(1);

result;//[3,1]

}

filterRange(arr, 1, 4);

alert( result ); // 3,1（匹配值）

alert( arr ); // 5,3,8,1（未修改）

//作业9

let john={name:"John",surname:"Smith",id:1};

let pete={name:"Pete",surname:"Hunt",id:2};

let mary={name:"Mary",surname:"Key",id:3};

let uesrs=[john,pete,mary];

let usersMapped=[

​    {fullName:"John Smith",id:1},

​    {fullName:"Pete Hunt",id:2},

​    {fullName:"Mary Key",id:3}

];

alert(usersMapped[0].id)//1

alert(usersMapped[0].fullName)//Jhon Smith

alert(usersMapped[0].id)

alert(usersMapped[0].fullName)

//作业10  在click.js中

