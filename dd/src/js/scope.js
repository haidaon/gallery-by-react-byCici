//ES5 中作用域

const callbacks=[];
for(var i=0;i<=2;i++){
	callbacks[i]=function(){
		//这里是个闭包
		console.log(i+'=i'); 
		return i*2
	}
}
console.table([
	callbacks[0](),
	callbacks[1](),
	callbacks[2]()
	
])


//ES6中作用域
const callbacks2=[];
for(let j=0;j<=2;j++){
	callbacks2[j]=function(){ 
		//用了let 实行了块作用域，而块作用域就取决于花括号
		//会把当前作用域下的值 也就是变量 保存下来 供后面的闭包使用，就是循环时候，每循环一次都会重新生成一次新的作用域
		//闭包就导向闭包作用域里的变量
		console.log(j+'=j'); 
		return j*2
	}
}

console.table([
	callbacks2[0](),
	callbacks2[1](),
	callbacks2[2]()
	
]);

//立即执行函数  
//es5 块级作用域
(function(){
	const foo=function(){
		return 1
	}
	console.log("foo()==1",foo()==1);
	
	(function(){
		const foo=function(){
		return 2
		}
		console.log("foo()==2",foo()==2);
	})()
	
})()

//es6
{
	function foo(){
		return 1
	}
	console.log("foo()==1",foo()==1);
	
	{
		//{==》就是一个新的作用域了
		function foo(){
		return 2
		}
		console.log("foo()==2",foo()==2);
		
	}
	console.log("foo()==1",foo()==1);
	
}
