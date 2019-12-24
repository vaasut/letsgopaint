class Sign{
	constructor(xpos,ypos,size,text,visible,on){
		this.xpos = xpos;
		this.ypos = ypos;
		this.size = size;
		this.text = text;
		this.visible = visible;
		this.on = on
		this.side = true;
		this.img = "";
	}

	drawSign(canvasId){
		if (this.visible){
			let c = document.getElementById(canvasId);
			let ctx=c.getContext("2d");
			ctx.strokeStyle = "#ffffff";

			ctx.beginPath()
			ctx.rect(this.xpos,this.ypos,this.size,this.size/1.5);
			ctx.stroke();
		}

	}
}