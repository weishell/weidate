class WeiDate{
	constructor(...args){
		this.timer = ''
		this.init(...args)
	}
	init(...args){
		let len =args.length
		console.log(args)
		if(len){
			if(args[0] === undefined){
				let tem = new Date()
				this.switch(tem,args[1])
			}else{
				let tem = new Date(args[0])
				this.switch(tem,args[1])
			}
		}else{
			this.timer = new Date().valueOf()
		}
	}
	// 时间戳转日期 +  
	switch(tem,value){
		let date =tem.getDate()
		let month =Number(tem.getMonth())+1
		let hour =tem.getHours()
		let min = tem.getMinutes()
		let second =tem.getSeconds()
		if(value === 'number'){
			this.timer = tem.valueOf()
		}else if(value === 'all'){
			this.timer =tem.getFullYear()+"-"+month+'-'+addzero(date)+" "+addzero(hour)+":"+addzero(min)+":"+addzero(second)
		}else if(value === 'nosecond'){
			this.timer =tem.getFullYear()+"-"+month+'-'+addzero(date)+" "+addzero(hour)+":"+addzero(min)
		}else if(value === 'hour:minute'){
			this.timer = addzero(hour)+":"+addzero(min)
		}else if(value === 'year-month-date'){
			this.timer =tem.getFullYear()+"-"+month+'-'+addzero(date)
		}else if(value === 'year-month'){
			this.timer =tem.getFullYear()+"-"+month
		}else if(value === 'year'){
			this.timer =tem.getFullYear()
		}else if(value === 'month'){
			this.timer = month
		}else if(value === 'string'){
			this.timer =new Date(tem)
		}else {
			this.timer = tem.valueOf()
		}
	}
	
}

function addzero(value){
	if(value<10){
		return '0'+value
	}else{
		return value
	}
}

module.exports = WeiDate