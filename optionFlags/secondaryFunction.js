var secondaryFunction = function(flagroom){
	if (flagroom.id === 100){
		if (flagroom.misc === 10){
			flagroom.signs[2].text = ["","you've been invited to go paint.", "it might be fun.", "maybe you should go...", "(use the left and right arrow keys to move)", "(press enter to interact with objects in the background)"];
			flagroom.misc = 0;
		}
		else if (flagroom.misc === 0){ //pick up paint set
			flagroom.signs[0].xpos = -100;
			startOne.signs[0].text = ["","hmmm... on second thought, they probably have paint there.", "you might seem too enthusiastic if you bring your own.", "maybe you should put your paint set back?","s"]
			flagroom.misc = 1;
		}
		else if (startOne.misc === 2){ //put paint back
			flagroom.signs[0].xpos = -100;
			flagroom.signs[1].xpos = 600;
			flagroom.misc = 2;
			startOne.misc = 3;
		}
		else if (flagroom.misc === 2 && flagroom.player.xpos > 500){
			flagroom.signs[1].xpos = -100;
			flagroom.signs[0].xpos = 230;
			flagroom.signs[0].text = ["","you put your paint set back in your backpack.","s"];
			flagroom.misc = 3;
			farThree.signs[1].xpos = 400;
			startOne.signs[0].text = ["","are you ready to leave now?","you don't have your paint set with you...", "o"]
		}
		else if (flagroom.misc === 3){
			flagroom.signs[0].text = ["","you put your paint set back in the drawer.","s"];
			startOne.signs[0].text = ["","are you ready to leave now?","you have your paint set with you...", "o"];
			farThree.signs[1].xpos = -100;
			flagroom.misc = 4;
		}
		else if (flagroom.misc === 4){
			flagroom.signs[0].text = ["","you put your paint set in your backpack.","s"];
			startOne.signs[0].text = ["","are you ready to leave now?","you don't have your paint set with you...", "o"];
			farThree.signs[1].xpos = 400;
			flagroom.misc = 3;
		}
	}
	else if (flagroom.id === 1){
		if (flagroom.misc === 0){ //try to leave
			startZero.signs[0].xpos = 230;
			startZero.text = [""];
			startZero.background = "rooms/roomimages/start0a.png"
			flagroom.misc = 1;
			startZero.signs[2].xpos = 300;
			startZero.signs[2].text = ["", "it's your bed."];
		}
		else if (startZero.misc === 1) { // try to leave again
			startZero.signs[0].xpos = 230;
			startZero.signs[0].text = ["","you put your paint set back in the drawer.","s"];
			flagroom.misc = 2;
		}


	}
	else if (flagroom.id === 2){
		flagroom.signs[0].xpos = -100;
		$("#song").attr("src","yay.mp3");
		document.getElementById("song").volume = 1.0;
		document.getElementById("song").play();
	}
	else if (flagroom.id === 7){
		flagroom.signs[0].text = ["","*sigh*"];
		flagroom.player.achievements = 1;
	}

	else if (flagroom.id === 11){
		flagroom.signs[0].xpos = -200;
		if (flagroom.player.xpos > 320){
			flagroom.signs[1].xpos = -200;
			$("#song").attr("src","yay.mp3");
			document.getElementById("song").volume = 1.0;
			document.getElementById("song").play();
			flagroom.player.achievements = 2;
		}
	}
	else if (flagroom.id === 15){
		if (flagroom.misc === -15){
			room = startOne;
		}
		else{
			flagroom.signs[1].xpos = -100;
			flagroom.signs[0].text = ["","\"Have a nice night!\""];
			walkFourteen.signs[0].text = ["","you unlocked the cemetery door.", "do you want to enter the cemetery?", "o"];
		}
	}
	else if (flagroom.id === 16){
		if (flagroom.misc === -11){
			flagroom.signs[0].text = ["","\"Have fun painting!\""];
			flagroom.walls[0].ypos = 100;
			flagroom.misc = -19
		}
		else if (flagroom.misc === -6){
			flagroom.signs[0].text = ["","\"Have fun!\""];
			flagroom.walls[0].ypos = 100;
			flagroom.misc = -19
		}
		else if (flagroom.misc === -19){
			$("#song").attr("src","yay.mp3");
			document.getElementById("song").volume = 1.0;
			document.getElementById("song").play();
			flagroom.signs[1].xpos = -100;
			flagroom.misc = -26;
			flagroom.player.achievements = 3;
		}
		else if (flagroom.misc === -26){
			flagroom.signs[0].text = ["","\"Have a nice night!\""];
			walkFourteen.signs[0].text = ["","you unlocked the cemetery door.", "do you want to enter the cemetery?", "o"];
		}
	}
	else if (flagroom.id === 17){
		flagroom.signs[0].text = ["","\"Have a nice night!\""]
		walkFourteen.signs[0].text = ["","you unlocked the cemetery door.", "do you want to enter the cemetery?", "o"];
	}

	if (flagroom.id === 18){
		flagroom.signs[0].text = ["","it's a Giant Snow Turtle...","it's blocking the bridge...", "maybe there's another way around the bridge"];
		walkSixteen.signs[0].text = ["","\"hey, what's going on?\"","...","\"the bridge is blocked!?!?!\"","\"well in that case, you'll have to go around a different way\"", "\"there's a path through the cemetery.\"", "\"here's a key to open up the gate.\"", "* you got the cemetery key *", "s"];
		walkSixteen.signs[0].on = true
	}
	if (flagroom.id === 22){
		flagroom.signs[1].xpos = -200;
	}

	else if (flagroom.misc > 199){ // rooms 24,25, (26, 27, 28 sometimes)
		flagroom.signs[0].on = true;
		if (flagroom.id === 25 && flagroom.player.xpos < 150){
			flagroom.signs[1].xpos = -200;
		}
		else if (flagroom.id === 28 && flagroom.player.xpos > 530){
			room = caveOne;
		}
		else if (flagroom.misc === 200){
			flagroom.signs[0].text = ["", "another person is in your way.", "o"];
			flagroom.signs[0].xpos += 40 * (29-flagroom.id);
			flagroom.misc = 201;
		}
		else if (flagroom.misc === 201){
			flagroom.signs[0].text = ["", "someone else is in the way.","o"];
			flagroom.signs[0].xpos += 60 * (29-flagroom.id);
			flagroom.misc = 202;
		}
		else if (flagroom.misc === 202){
			flagroom.signs[0].text = ["", "another person is in the way.", "o"];
			flagroom.signs[0].xpos += 50 * (29-flagroom.id);
			flagroom.misc = 200;

		}
	}
	else if (flagroom.misc === 100){//enter cave
		room = caveOne;
	}
	else if (flagroom.id === 30){
		flagroom.signs[0].text = ["","\"did you know that this is a MAGIC cave?\"", "\"somewhere inside this cave, there's a bright stalagmite...\"", 
		"\"or is it a stalactite?\"", "\"well anyway, it has the powers to make your dreams come true.\"", "\"if you find it, you can ask for the power to walk through crowds.\""];
	}
	else if (flagroom.id === 32){
		flagroom.signs[0].text = ["","\"well... um good luck looking for it anyway!\"","s"]
	}
	else if (flagroom.id === 38){
		//move blocks
		if (flagroom.player.xpos < 300){ //up / down
			blockOne.ypos -= 30;
			blockTwo.ypos += 30;
		}
		else if (flagroom.player.xpos < 400){ //down / left
			blockOne.ypos += 30;
			blockTwo.xpos -= 30;
		}
		else if (flagroom.player.xpos < 500){ // left / right
			blockOne.xpos -= 30;
			blockTwo.xpos += 30;
		}
		else if (flagroom.player.xpos < 600){ // puzzle reset
			blockOne.xpos = 400;
			blockOne.ypos = 230;
			blockTwo.xpos = 520;
			blockTwo.ypos = 200;
		}
		//boundaries up/down
		if (blockOne.ypos < 170){ //top side
				blockOne.ypos = 320;
			}
			if (blockTwo.ypos < 170){
				blockTwo.ypos = 320;
			}
		else if (blockOne.ypos > 320){//bottom side
			blockOne.ypos = 170;
			}
			if (blockTwo.ypos > 320){
				blockTwo.ypos = 170;
			}

		//boundaries left/right
		if (blockOne.xpos < 370){ //left side
				blockOne.xpos = 550;
			}
		else if (blockTwo.xpos < 370){
				blockTwo.xpos = 550;
			}
		if (blockOne.xpos > 550){ //right side
				blockOne.xpos = 370;
			}
		else if (blockTwo.xpos > 550){
				blockTwo.xpos = 370;
			}
		if (blockOne.xpos === blockTwo.xpos && blockOne.ypos === blockTwo.ypos){ //win
			flagroom.walls[0].ypos = 0;
			$("#song").attr("src","yay.mp3");
			document.getElementById("song").volume = 1.0;
			document.getElementById("song").play();
			flagroom.background = "rooms/roomimages/cave10b.png";
			if (flagroom.signs[4].xpos > 0){
				flagroom.background = "rooms/roomimages/cave10c.png";
			}

			flagroom.signs[4].text = ["","\"hey, you solved it!\"", "\"ok, let's go to the next puzzle.\""];

		}
	}
	else if (flagroom.id === 39){
		if (flagroom.player.ypos > 300){
			flagroom.player.ypos = 305;
			flagroom.player.xpos = 550;
			flagroom.signs[0].xpos *= -1;
			flagroom.signs[1].xpos *= -1;

		}
		else if (flagroom.player.xpos > 500){
			flagroom.player.ypos -= 120;
			if (flagroom.player.ypos < 100) {
				flagroom.player.ypos = 425
				flagroom.signs[0].xpos *= -1;
				flagroom.signs[1].xpos *= -1;
			}
		}
		else if (flagroom.player.ypos > 200){
			flagroom.player.ypos = 425;
			flagroom.signs[0].xpos *= -1;
			flagroom.signs[1].xpos *= -1;
		}
		else if (flagroom.player.ypos > 100){
			flagroom.player.ypos = 60;
			flagroom.player.xpos = 550;
		}
		else{
			flagroom.signs[0].xpos *= -1;
			flagroom.signs[1].xpos *= -1;
			flagroom.player.ypos = 425;
			flagroom.walls[0].ypos = -160;
			$("#song").attr("src","yay.mp3");
			document.getElementById("song").volume = 1.0;
			document.getElementById("song").play();
			flagroom.background = ("rooms/roomimages/cave11b.png");
			if (flagroom.signs[1].xpos > 0){
				flagroom.background = ("rooms/roomimages/cave11c.png");
			}
			flagroom.signs[1].text = ["","\"so i think i decided i'm still going to wish for mittens.\"", "\"wait what? you already solved the puzzle!?\"", "\"great! only one more to go!\""];
		}
		flagroom.walls[2].ypos += 100;
		flagroom.walls[2].ypos %= 200;
		flagroom.walls[1].ypos += 100;
		flagroom.walls[1].ypos %= 300;
	}
	else if(flagroom.id === 40){
		if (flagroom.player.xpos < 280){
			temp = flagroom.walls[1].size;
			flagroom.walls[1].size = flagroom.walls[0].size;
			flagroom.walls[0].size = temp;

		}
		else if (flagroom.player.xpos < 390){
			temp = flagroom.walls[1].size;
			flagroom.walls[1].size = flagroom.walls[2].size;
			flagroom.walls[2].size = temp;
			
		}
		else if (flagroom.player.xpos < 490){
			temp = flagroom.walls[2].size;
			flagroom.walls[2].size = flagroom.walls[3].size;
			flagroom.walls[3].size = temp;
		}
		else{
			temp = flagroom.walls[3].size;
			flagroom.walls[3].size = flagroom.walls[4].size;
			flagroom.walls[4].size = temp;
		}
		if ((((flagroom.walls[0].size % flagroom.walls[1].size) + 
			flagroom.walls[2].size)% flagroom.walls[3].size) === flagroom.walls[4].size){
			$("#song").attr("src","yay.mp3");
			document.getElementById("song").volume = 1.0;
			document.getElementById("song").play();
			flagroom.background = "rooms/roomimages/cave12b.png";
			if (flagroom.signs[5].xpos > 0){
				flagroom.background = "rooms/roomimages/cave12c.png";
			}
			flagroom.walls[5].ypos = -300;
		}
	}
	else if (flagroom.id === 41){
		flagroom.player.xpos = 400;
		flagroom.player.ypos = -300;
		room = cemeteryTwo;
		cemeteryTwo.roomRight = farOne;
	}
	else if (flagroom.id === 43){
		flagroom.signs[0].xpos = -100;
	}
		else if (flagroom.id === 45){
		flagroom.signs[1].xpos = -100;
	}
	else if (flagroom.id === 48){
		flagroom.signs[0].xpos = -100;
		flagroom.player.achievements = 3;
	}
	else if (flagroom.id === 52){
		flagroom.signs[0].xpos = 450;
		flagroom.signs[0].text = ["","it's just an ordinary snowman"];
	}
	else if (flagroom.id === 56){
		if (flagroom.misc === -6){
			flagroom.fade = true;
			flagroom.transitionRoom = endingOne;
			flagroom.player.ypos = 1000;
			flagroom.player.achievements = 3;
			
		}
		else{
			flagroom.background = "rooms/roomimages/far14a.png"
			flagroom.roomLeft = endOne;
			flagroom.player.img = ["characterObjects/walkdance/bikertestleft.png","characterObjects/walkdance/bikertestright.png"];
			flagroom.player.rightanimation = ["characterObjects/walkdance/bikertest.png","characterObjects/walkdance/bikertest2.png",
    "characterObjects/walkdance/bikertest3.png","characterObjects/walkdance/bikertest4.png"];
    		flagroom.player.leftanimation = ["characterObjects/walkdance/bikertestleft1.png","characterObjects/walkdance/bikertestleft2.png",
    "characterObjects/walkdance/bikertestleft3.png","characterObjects/walkdance/bikertestleft4.png"];
    		flagroom.floors = [endOneFloor];
    		flagroom.player.ypos -= 10
    		flagroom.signs[1].xpos = -200;
		}
	}
	else if (flagroom.id === 60){
		flagroom.signs[0].xpos = -100;
	}
	else if (flagroom.id === 66){
		flagroom.signs[0].xpos = 150;
		flagroom.signs[0].size = 200;
		flagroom.signs[0].text = ["","*sigh*"];
	}
	else if (flagroom.id === 67){
		flagroom.fade = true;
		flagroom.player.ypos = 1000;
		if (flagroom.misc !== 3){
			flagroom.transitionRoom = endingOne;
			flagroom.player.achievements = 4;
		}
		else{
			flagroom.transitionRoom = endingZero;
			flagroom.player.achievements = 3;
		}
	}
	else if (flagroom.id === 73){
		$("#keyboard").hide();
		flagroom.player.ypos = 400;
		flagroom.player.xpos = 400;
		room = startZero
	}
}