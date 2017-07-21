---
createTime: 2016/09/10 12:34:25
title:Array的用法
description:简单介绍了Array平时常用的一些方法
---
### Array的常用方法

#### *Array.prototype：*
	可以在prototype上给数组增加方法（Array.prototype是个空数组）

#### *Array.from()*
	将一个类数组对象或可遍历对象转换成真正的数组。
	Array.from(arrayLike[, mapFn[, thisArg]])  arrayLike:想要转换成真实数组的类数组对象或可遍历对象,
	mapFn:可选参数，如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回


#### *Array.isArray(value)* 
	用来判断value是不是数组

#### *Array.of()*
	将它的任意类型的多个参数放在一个数组里并返回  区分与Array()的区别

#### *arr.copyWithin(target[, start[, end]])* 
	会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。  不包含end。如果 target 大于等于 arr.length，将会不发生拷贝
	[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
	// [4, 2, 3, 4, 5]


#### *arr.every(callback[, thisArg])*
	测试数组的所有元素是否都通过了指定函数的测试。 要是每一个都通过测试，则返回true。否则false。

#### *arr.fill(value[, start = 0[, end = this.length]])*  
	可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。（end存在的时候不包含end）

#### *arr.filter(callback[, thisArg])*  
	使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

#### *arr.find(callback[, thisArg])* 
	返回通过测试的第一个元素，如果没有满足条件的元素，则返回 undefined。

#### *arr.findIndex(callback[, thisArg])*
	返回的是满足条件的元素的索引，而非它的值。如果找不到指定的元素, 则返回 -1.

#### *arr.indexOf(searchElement[, fromIndex = 0])*  
	返回给定元素能找在数组中找到的第一个索引值，否则返回-1。

#### *array.includes(searchElement[, fromIndex])* 
	判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
	fromIndex可选参数。从该索引处开始查找 searchElement，默认为 0。

#### *arr.some(callback[, thisArg])* 
	测试数组中的某些元素是否通过了指定函数的测试。只要有一个元素通过测试，返回true，否则返回false

#### *arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])* 
	返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

#### *arr.reduce(callback,[initialValue])*
	接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。（callback中的参数依次是：previousValue，currentValue，index，array）

#### *arr.reduceRight()*
	接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）


#### *数组创建：*
	arrayObj = new Array()  ||  a = []

#### *数组添加元素：*
	arrayObj.push(item);// 将一个或多个新元素添加到数组结尾，并返回数组新长度
	arrayObj.unshift(item);// 将一个或多个新元素添加到数组开始，返回数组新长度
	arrayObj.splice(insertPos,0,item);//将一个或多个新元素插入到数组的指定位置，返回""。

#### *数组删除元素：*
	arrayObj.pop(); //移除最后一个元素并返回该元素值
	arrayObj.shift(); //移除最前一个元素并返回该元素值，并返回这个元素
	arrayObj.splice(deletePos,deleteCount); 
	//删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素

#### *数组的截取和合并*
	arrayObj.slice(start, [end]); 
	//以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素
	
	arrayObj.concat([item1[, item2[, . . . [,itemN]]]]);
	 //将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组，并不改变引用对象本身

#### *数组的拷贝*
	arrayObj.slice(0); //返回数组的拷贝数组，是一个新的数组，不是指向
	arrayObj.concat(); //返回数组的拷贝数组，是一个新的数组，不是指向

#### *数组元素的排序*
	arrayObj.reverse(); //反转元素（最前的排到最后、最后的排到最前），返回数组地址(改变原数组)
	
	arrayObj.sort([compareFunction（a,b）]); //对数组元素排序，返回数组地址(默认情况下sort方法是按ascii字母顺序排序的，而非我们认为是按数字大小排序)
		compareFunction（a,b）：如果小于0，则a在b前面。等于0，a,b相对位置不变。大于0，则b在a前面。
		
	arrayObj.sort(function(a,b){return a-b});//从小到大排序
	arrayObj.sort(function(a,b){return b-a}) //从大到小排序
	
	a,b表示数组中的任意两个元素(return b-a)，若return > 0 b前a后；reutrn < 0 a前b后；a=b时存在浏览器兼容
    简化一下：a-b输出从小到大排序，b-a输出从大到小排序。

#### *数组元素的字符串化*
	arrayObj.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。
	
	arr.toString():返回一个字符串，表示指定的数组及其元素,相当于arr.join(",")

#### *数组元素的遍历*
	array.forEach(callback[, thisArg]) 对数组的每个元素执行一次提供的函数(回调函数)。
	array.map(callback[, thisArg]) 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。

####*数组的length属性：*
	a =[1,2]
	可以显示设置 ：a.length=5