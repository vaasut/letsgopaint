var floorDetection = function(player,floors){
	//if (player.glue == 0){
		let feet = player.ypos+player.size*1.25
		let rightside = player.xpos //right side is on viewer left
		let leftside = player.xpos + player.size //left side is on viewer right


		for (i=0; i < floors.length; i++) {

			let top = floors[i].ypos - 5//floors[i].size/20
			let bottom = floors[i].ypos+5//floors[i].size/20
			let left = floors[i].xpos
			let right = floors[i].xpos + floors[i].size

			if ((feet >= top) &&  (feet <= bottom) && (leftside >= left) && (rightside <= right)) {
					//console.log('floor detected')
					player.ypos += (top-feet)
					player.yvel = 0;
					player.yacc = 0;
					player.glue = 1;
					player.jump = 1;
					return
				}

			else{
				player.yacc = .2;
				player.glue = 0;
				player.jump = 0;
				}

			}
		//}
	}

var wallDetection = function(player,walls){

	

		let rightside = player.xpos
		let leftside = player.xpos + player.size
		let head = player.ypos

		for (i=0; i < walls.length; i++){

			let top = walls[i].ypos
			let bottom = walls[i].ypos + walls[i].size
			let left = walls[i].xpos
			let right = walls[i].xpos + 10

			if (player.xvel > 0){

				if ((head > top) && (head < bottom) && (leftside >= left) && (leftside <= right)) {
					player.xpos = left - player.size
					player.xvel = 0
					return
				}
			}

			else{

				if ((head > top) && (head < bottom) && (rightside >= left) && (rightside <= right)) {
					player.xpos = right
					player.xvel = 0
					return
				}
			}

		}
	}

var signDetection = function(player, signs){
	for (i = 0; i < signs.length; i++){
		// if (signs[i].img !== ""){
		// 	if (signs[i].side){
		// 		$("#close_left").show();
		// 	}
		// 	else{
		// 		$("#close_right").show();
		// 	}
		// }
		if (signs[i].on){
			if ( (player.xpos > (signs[i].xpos - 10)) && (player.xpos < (signs[i].xpos + 10))){
				player.xvel = 0;
				player.xacc = 0;
				player.page = 1;
				signs[i].on = false
				$("#gameText").text(signs[i].text[1]);
				return
			}
		}
	}

}





