class Door{
	constructor(xpos,ypos,lock,size,color,roomTo,xposTo,yposTo,page,visible){
		this.xpos = xpos;
		this.ypos = ypos;
		this.lock = lock;
		this.size = size;
		this.color = color;
		this.roomTo = roomTo;
		this.xposTo = xposTo;
		this.yposTo = yposTo;
		this.page = page;
		this.visible = visible;
		
	}

	drawDoor(canvasId){
		if (this.visible){
			let c = document.getElementById(canvasId);
			let ctx=c.getContext("2d");
			ctx.strokeStyle = this.color;
			ctx.beginPath()

			ctx.rect(this.xpos,this.ypos,this.size,this.size*1.5);
			ctx.stroke();
			ctx.beginPath()
			ctx.arc(this.xpos+this.size/1.2,this.ypos+this.size/1.2,this.size/10,0,2*Math.PI)
			ctx.stroke();
			// ctx.beginPath()
			// ctx.arc(this.xpos+this.size/2,this.ypos,this.size/2,Math.PI,2*Math.PI)
			// ctx.arc(this.xpos+this.size/2,this.ypos,this.size/2.5,Math.PI,2*Math.PI)

			// ctx.stroke();
		}



	}

}

