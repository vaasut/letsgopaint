$(document).keyup(function(e){
	room.player.xvel = 0;
});

$(document).keydown(function(e) {
	//console.log(e.keyCode);
	const code = e.keyCode || e.which;

	if (room.player.optionSelect >= 0){
		if (code == LEFT || code == 37){
			if (room.player.optionSelect > 0){
				room.player.optionSelect -= 1;
				} 
		}
		else if (code == RIGHT || code == 39){
			if (room.player.optionSelect < room.options.length-1){
				room.player.optionSelect += 1; 
			}
		}
		else if (code == 13){
			startOptionFlag(room);
			room.player.optionSelect = -1;
			room.player.page = 0;
			return

		}

		let option = room.options[room.player.optionSelect]
		//console.log(option)
		$("#gameText").text(option)

	}

	else{
		if (room.player.page == 0){

		  	if (code == LEFT || code == 37){ //a
		  		room.player.xvel = -5.2;
		  	}

		  	else if (code == RIGHT || code == 39){ //d
		  		room.player.xvel = 5.2;		
		  	}
		}

	  	if (code == 13 && room.player.jump == 1){ //enter
	  			for ( i = 0; i < room.signs.length; i++){
	  				if ((room.player.xpos+room.player.size/2) < (room.signs[i].xpos + room.signs[i].size) &&
	  					(room.player.xpos+room.player.size/2) > room.signs[i].xpos){
	  					
	  					room.player.xvel = 0;
	  					room.player.page = (room.player.page + 1) % room.signs[i].text.length;
	  					let line = room.signs[i].text[room.player.page];

	  					if (line == "o"){
				  			//console.log("Game Flag -> Options");
				  			room.player.optionSelect = 0;
				  			$("#gameText").text(room.options[0]);
				  		}
				  		else if (line == "s"){
				  			//console.log("Game Flag -> Secondary Function");
				  			secondaryFunction(room);
				  			room.player.page = 0;
				  			$("#gameText").text("");
				  		}
				  		else{
				  			$("#gameText").text(line);
				  			}	

	  					return
	  				}
	  			}

	  		room.player.xvel = 0;
	  		room.player.page = (room.player.page + 1) % room.text.length;
	  		let line = room.text[room.player.page];
	  		if (line == "o"){
	  			//console.log("Game Flag -> Options")
	  			room.player.optionSelect = 0;
	  			$("#gameText").text(room.options[0]);
	  		}
			else if (line == "s"){
	  			//console.log("Game Flag -> Secondary Function");
	  			secondaryFunction(room);
	  			$("#gameText").text("");
	  		}
	  		else{
	  			$("#gameText").text(line)
	  			}	
		}
	}

});