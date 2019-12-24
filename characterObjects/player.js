class Player {
  constructor(xpos, ypos, xvel, yvel, state, size, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xvel = xvel;
    this.yvel = yvel;
    this.xacc = 0;
    this.yacc = .2; //this is g in the game's universe
    this.page = 0;
    this.state = state;
    this.glue = 0;
    this.jump = 0;
    this.optionSelect = -1;
    this.size = size;
    this.color = color;
    this.achievements = 0
    this.cutscene = false;
    this.transitionVariable = 0 //for alternate possiblities
    this.left = false;
    this.img = ["characterObjects/char1left.png","characterObjects/char1right.png"];
    this.rightanimation = ["characterObjects/walkdance/new1.png","characterObjects/walkdance/new2.png",
    "characterObjects/walkdance/new4.png","characterObjects/walkdance/new3.png"];
    this.leftanimation = ["characterObjects/walkdance/new1left.png","characterObjects/walkdance/new2left.png",
    "characterObjects/walkdance/new4left.png","characterObjects/walkdance/new3left.png"];
  }

  changeAcceleration(xacc, yacc){
  	this.xacc = xacc
  	this.yacc = yacc
  }

  updateVelocity(){
  	if (this.xvel > 0 && (this.xvel + this.xacc) < 0){
  		this.xvel = 0;
  		this.xacc = 0;
  	}
  	else if (this.xvel < 0 && (this.xvel + this.xacc) > 0) {
  		this.xvel = 0;
  		this.xacc = 0;
  	}
  	else{
  		this.xvel += this.xacc
  	}
  	this.yvel += this.yacc
  }

  updatePosition(){
  	if (room.player.xvel > 1){
		room.player.xacc = -0.08;
	}
	else if (room.player.xvel < -1){
		room.player.xacc = 0.08;
	}
	else if (room.player.xvel > 0){
		room.player.xacc = -0.8;
	}
	else if (room.player.xvel < 0){
		room.player.xacc = 0.8;
	}
	else{
		room.player.xacc = 0;
	}

  	this.updateVelocity()
  	this.xpos += this.xvel
  	this.ypos += this.yvel
  }

  drawPlayer(canvasId){
  	this.updatePosition()
  	this.drawIdlePlayer(canvasId)
  }

  drawIdlePlayer(canvasId){
  	let c = document.getElementById(canvasId);
	let ctx=c.getContext("2d");
	ctx.strokeStyle = this.color;
	const charImage = new Image()
	charImage.src = this.img;
	if (this.xvel < 0){
		this.left = true;
		if ((this.state % 24) < 6){
			charImage.src = this.leftanimation[0]
		}
		else if ((this.state % 24) < 12){
			charImage.src = this.leftanimation[1]
		}
		else if ((this.state % 24) < 18){
			charImage.src = this.leftanimation[2]
		}
		else{
			charImage.src = this.leftanimation[3]
		}
		ctx.drawImage(charImage,this.xpos-20,this.ypos-40); //y-60?
	}
	else if (this.xvel > 0){
		this.left = false;
		if ((this.state % 24) < 6){
			charImage.src = this.rightanimation[0]
		}
		else if ((this.state % 24) < 12){
			charImage.src = this.rightanimation[1]
		}
		else if ((this.state % 24) < 18){
			charImage.src = this.rightanimation[2]
		}
		else{
			charImage.src = this.rightanimation[3]
		}
		ctx.drawImage(charImage,this.xpos-20,this.ypos-40); //y-60?
	}
	else if (this.left){
		charImage.src = this.img[0];
		ctx.drawImage(charImage,this.xpos-20,this.ypos-40); //y-50?
	}
	else{
		charImage.src = this.img[1];
		ctx.drawImage(charImage,this.xpos-20,this.ypos-40); //y-50?
	}
  }
}


