class Floor{
	constructor(xpos,ypos,xvel,yvel,size,color,visible){
		this.xpos = xpos;
		this.ypos = ypos;
		this.xvel = xvel;
		this.yvel = yvel;
		this.size = size;
		this.color = color;
		this.visible = visible;
		this.width = 10
	}

	drawFloor(canvasId){
		if (this.visible){
			let c = document.getElementById(canvasId);
			let ctx=c.getContext("2d");
			ctx.strokeStyle = this.color;
			ctx.beginPath()

			ctx.rect(this.xpos,this.ypos,this.size,this.width);
			ctx.stroke();
		}
	}

}


