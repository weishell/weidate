```bash
npm i weidate
```

```js
let WeiDate = require('./index')
let now = new WeiDate()
console.log(now)

now.init(undefined,"all")
let a =now.timer
now.init(undefined,"month")
let b =now.timer
console.log(a,b,now.timer)
```
```
 WeiDate{
	init:function,
	timer:需要的值
}
```
1. 转换日期格式使用
```js
let now = new WeiDate()//如果不传参,now.timer=当前时间戳
```
2. 如果传参，第一个参数为undefined,那么第二个参数就是返回now.timer的具体格式
```
+ number => 当前时间戳
+ all => year-MM-dd hh:mm:ss
+ nosecond => year-MM-dd hh:mm
+ hour:minute => hh:mm
+ year-month-date => year-MM-dd
+ year-month => year-MM
+ year => year
+ month => month
+ string => string
+ 不传 => 时间戳
```
+ 如果第一个参数传入时间戳，或者格式转换后的时间如 2020-03-19 12:12:12或者 Fri Apr 29 2022 10:05:21 GMT+0800 (中国标准时间);那么转换的就是当前日期的格式，第二个参数同上。

