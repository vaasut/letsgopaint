class Wall{
	constructor(xpos,ypos,size,color,visible){
		this.xpos = xpos;
		this.ypos = ypos;
		this.size = size;
		this.color = color;
		this.visible = visible;
	}

	drawWall(canvasId){
		if (this.visible){
			let c = document.getElementById(canvasId);
			let ctx=c.getContext("2d");
			ctx.strokeStyle = this.color;
			ctx.beginPath()

			ctx.rect(this.xpos,this.ypos,10,this.size);
			ctx.stroke();
		}
	}

}


