window.onload = function() {
	room.player.page += 1;
	let line = room.text[room.player.page]
	$("#gameText").text(line)

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	window.setInterval(function () {	
		ctx.clearRect(0,0,WIDTH,HEIGHT);
		floorDetection(room.player,room.floors);
		wallDetection(room.player,room.walls);
		signDetection(room.player,room.signs);

		room.drawRoom("myCanvas");
		if (room.player.xpos < 0){
			room = room.roomLeft;
			room.player.xpos = 690;
		}
		if (room.player.xpos > 700){
			room = room.roomRight;
			room.player.xpos = 0;
		}

		//transitions
		if (room.rate === 0){
			room = room.transitionRoom;
			room.fade = true;
			room.rate = -1;
		}
		if (room.rate < -470){
			room.fade = false;
			$("#gameText").text("The End")
		}
		room.player.state = (room.player.state + 1);
		

		}, 33) //~30 fps
}