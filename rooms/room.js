class Room{
	constructor(id, player,floors,walls,doors,signs,text,flag,background){
		this.id = id;
		this.background = background
		this.player = player;
		this.player.page = 0;
		this.floors = floors;
		this.walls = walls;
		this.doors = doors; 
		this.signs = signs;
		this.text = text;
		this.flag = flag;
		this.roomLeft = this;
		this.roomRight = this;
		this.options = []
		this.fade = false
		this.rate = 400;
		this.misc = 0;
		this.floor =  "rooms/roomimages/snowfloor0.png"
		this.transitionRoom = this;

	}

	drawRoom(canvasId){
		const backgroundImage = new Image();
		const snow = new Image();
		const snow2 = new Image();
		const floor = new Image()
		snow.src = "rooms/roomimages/testsnow.png";
		snow2.src = "rooms/roomimages/snow3.png";
		floor.src = this.floor;
		backgroundImage.src = this.background;
		let c = document.getElementById(canvasId);
		let ctx=c.getContext("2d");
		if (this.fade){
			ctx.globalAlpha = Math.abs(Math.sin((this.rate)/300));
		}
		else{
			ctx.globalAlpha = 1.0;
		}
		ctx.drawImage(backgroundImage,0,0);
		for (i=0; i < this.walls.length ;i++){
			this.walls[i].drawWall(canvasId);
		}
		
		if (this.id !== 1 && this.id !== 100 && this.id !== 29 && (this.id < 38 || this.id > 40)){
			ctx.globalAlpha = 0.7;
			ctx.drawImage(snow,0, -3000 + (room.player.state*2 % 3000));
			//ctx.drawImage(snow2,0, -1500 + (room.player.state % 1500));
		}
		if (this.fade){
			ctx.globalAlpha = Math.abs(Math.sin((this.rate)/300));
			if (this.rate < 50 && this.rate > -100){
				this.rate -= 1
			}
			else if (this.rate < 0){
				this.rate -= 4;
			}
			else{
				this.rate -= 8;
			}
			room.player.xvel = 0 //prevent switch to other screen during transition
		}
		else{
			ctx.globalAlpha = 1.0;
		}
		this.player.drawPlayer(canvasId);
		ctx.drawImage(floor,0,0);
		if (this.id === 57){
			ctx.fillStyle = "white";
			ctx.font = "30px Times";
			ctx.fillText("Let's Go Paint!", 50, 50);
			ctx.font = "20px Times";
			ctx.fillText("by vaasu", 160, 80);
		}
		if (this.id === 59){
			ctx.fillStyle = "white";
			ctx.font = "20px Times";
			ctx.fillText("Thank you for playing!", 50, 50);
		}

		if (this.id === 71 || this.id === 72){
			if (this.rate > -940){
				ctx.globalAlpha = 0;
			}
			else if (this.rate > -1300){
				ctx.globalAlpha = Math.abs(Math.sin((this.rate)/300));
			}
			else{
				ctx.globalAlpha = 1.0;
			}
			this.rate -= 8;
			ctx.fillStyle = "white";
			if (this.id === 72){
				ctx.fillStyle = "black"
			}
			ctx.font = "30px Times";
			ctx.fillText("Tonight's Achievements:", 100, 80);
			ctx.font = "20px Times";
			ctx.fillText("Went outside", 100, 130);
			ctx.fillText("Felt the snow fall", 100, 160);
			ctx.fillText("Got out of bed", 100, 190);
			if (this.player.achievements > 0) {
				ctx.fillText("Found someone's lost bike", 100,220);
			}
			if (this.player.achievements > 1) {
				ctx.fillText("Ignored an insecurity", 100,250);
			}
			if (this.player.achievements > 2){
				ctx.fillText("Had a conversation",100,280);
			}
			if (this.player.achievements > 3) {
				ctx.fillText("Painted a picture", 100,310);
				ctx.fillText("Met someone new", 100,340);
			}
			//ctx.fillText(, 100,340);
		}

		if (this.id === 73){
			ctx.fillStyle = "white";
			ctx.font = "50px Times";
			ctx.fillText("Let's Go Paint!", 200, 200);
			ctx.font = "20px Times";
			ctx.fillText("by vaasu", 400, 230);
		}
	
		for (i=0; i < this.floors.length ;i++){
			this.floors[i].drawFloor(canvasId);
		}
		for (i=0; i < this.doors.length ;i++){
			this.doors[i].drawDoor(canvasId);
		}
		for (i=0; i < this.signs.length ;i++){
			this.signs[i].drawSign(canvasId);
		}
	}
}
