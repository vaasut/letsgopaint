var startOptionFlag = function(flagroom){
	if (flagroom.id === 1){
		if (flagroom.player.optionSelect === 1){
			room = startTwo;
			flagroom.player.xpos = 480;
		}
		$("#gameText").text("")
	}

	if (flagroom.id==3){
		if (flagroom.player.optionSelect==0){
			$("#gameText").text("")
			flagroom.signs[0].xpos -= 2000;

		}
		else if (flagroom.player.optionSelect ===1 && flagroom.misc !== 100){
			flagroom.misc = 100;
			flagroom.signs[0].text = ["","are you sure you want to go home?","o"]
			flagroom.signs[0].on = true;
		}
		else{
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
			$("#gameText").text("")
		}
	}
	if (flagroom.id==5){
		if (flagroom.player.optionSelect===1){
			flagroom.signs[0].xpos -= 2000;
			$("#gameText").text("")
		}
		else if (flagroom.player.optionSelect===0 && flagroom.misc !== 100){
			flagroom.misc = 100;
			flagroom.signs[0].text = ["","are you sure you want to go home?","o"]
			flagroom.signs[0].on = true;
			$("#gameText").text("")
		}
		else{
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
			$("#gameText").text("")
		}
	}
	if (flagroom.id==8){
		walkEight.options = ["go home ->", "<- go painting"];
		if (flagroom.player.xpos < 400){
			if (flagroom.player.optionSelect==1){
				flagroom.signs[0].text = ["","*sigh*"]
				$("#gameText").text("")
			}
			if (flagroom.player.optionSelect==0){
				flagroom.signs[0].text = ["","...", "... ...","... ... ...","*sigh*"];
				flagroom.signs[0].on = true;
				$("#gameText").text("");
			}
		}
		else{
			if (flagroom.player.optionSelect ===1){
				flagroom.signs[1].xpos -= 2000;
				$("#gameText").text("")
			}
			else if (flagroom.player.optionSelect === 0 && flagroom.misc !== 100){
				flagroom.misc = 100;
				flagroom.signs[1].text = ["","are you sure you want to go home?","o"]
				flagroom.signs[1].on = true;
				$("#gameText").text("")
			}
			else{
				$("#gameText").text("")
				flagroom.fade = true;
				flagroom.transitionRoom = endingZero;
				flagroom.player.ypos = 1000;
			}
		}
	}
	if (flagroom.id==11){
		if (flagroom.player.optionSelect === 0){
			if (flagroom.misc === 0){
				flagroom.signs[0].text = ["", "you try brushing your hair with your hand...", "but it still doesn't look right to you.","o"];
				flagroom.misc = 1;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 1){
				flagroom.signs[0].text = ["","you can't fix it.","you wish you had your hat.","o"];
				flagroom.misc =2;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 2){
				flagroom.signs[0].text = ["","it looks a little better...","...", "actually, it doesn't look any better :(","o"];
				flagroom.misc =3;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 3){
				flagroom.misc = 4;
				flagroom.signs[0].text = ["","*sigh*","maybe you should just go home.","o"];
				walkEleven.options = ["go home ->", "<- don't go home"];
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 4){
				flagroom.signs[0].on = true;
				flagroom.signs[0].text = ["","are you sure you want to go home?","o"]
				flagroom.misc = 100
			}
			else if (flagroom.misc === 100){
				flagroom.fade = true;
				flagroom.transitionRoom = endingZero;
				flagroom.player.ypos = 1000;
			}
			else if (flagroom.misc === 5){
				flagroom.signs[0].on = true;
				flagroom.signs[0].text = ["","you take a deep breath..."," and then you take a bunch of snow and dump it on your head.","your hair still looks bad...","but you feel better now.","s"];
			}
		}
		else if (flagroom.player.optionSelect === 1){
			if (flagroom.misc === 0){
				flagroom.signs[0].text = ["","you try to ignore it, but you can't.", "your hair still looks off.","o"];
				flagroom.misc = 1;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 1){
				flagroom.signs[0].text = ["","you start to step away, but then you turn back.", "your hair still doesn't look right.","o"];
				flagroom.misc = 2;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 2){
				flagroom.signs[0].text = ["","you think about all the people who will see you.", "you can't ignore it.","o"];
				flagroom.misc = 3;
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 3){
				flagroom.misc = 4;
				flagroom.signs[0].text = ["","*sigh*", "maybe you should just go home.","o"];
				walkEleven.options = ["go home ->", "<- don't go home"];
				flagroom.signs[0].on = true;
			}
			else if (flagroom.misc === 4 || flagroom.misc === 100){
				flagroom.signs[0].text = ["","you try to continue on...", "...","... ...","... ... ...","you can't continue on...", "o"];
				walkEleven.options = ["take a deep breath ->", "<- close your eyes for a moment"];
				flagroom.signs[0].on = true;
				flagroom.misc = 5;
			}
			else if (flagroom.misc === 5){
				flagroom.signs[0].on = true;
				flagroom.signs[0].text = ["","you close your eyes...", "and then you take a bunch of snow and dump it on your head.","your hair still looks bad...","but you feel better now.","s"]
			}
		}
		$("#gameText").text("");
	}
	if (flagroom.id === 14){
		if (flagroom.player.optionSelect === 0){
			room = cemeteryOne;
			flagroom.player.xpos = 150;
		}
		flagroom.signs[0].text = ["","do you want to enter the cemetery?", "o"];
		walkFifteen.signs[0].text = ["","\"oh... you were returning the key?\"", "\"that's ok, you can keep it.\"", "\"it's imaginary anyway.\"", "\"have a nice night!\""];
		walkSixteen.signs[0].text = ["", "\"huh? you want to return the key?\"", "\"well, you know what? don't even worry about it.\"","\"those keys are made of snow anyway\"", "\"i can just make another one\"", "\"have a nice night!\""];
		$("#gameText").text("");
	}

	if (flagroom.id === 15){
			if (flagroom.player.optionSelect === flagroom.misc){
				flagroom.signs[0].text = ["","\"Sorry... I don't think we can accept IOUs.\"", "o"];
				walkFifteen.options = ["offer some other services instead ->", "<- challenge the toll worker to a game ->", "<- go home"];
				flagroom.misc = -1;
				flagroom.signs[0].on = true;
				$("#gameText").text("");
			}
			else if (flagroom.player.optionSelect === flagroom.misc +1){
				flagroom.signs[0].text = ["","\"You think I'll let you pass if you find my missing mittens or something?\"","\"Well that's really kind of you...\"", "\"but...\"" , "\"... ummm I don't think that'll pass with management.\""];
				flagroom.signs[0].on = true;
				flagroom.signs[1] = new Sign(270,400,30,["","\"Wait!\"", "\".... um....\"", "\"... listen...\"" , "\"I can tell you really want to get across this creek.\"", 
					"\"There's another path through the graveyard.\"", "\"The graveyard is usually closed at this time, but I have a key.\"", "\"Here. Take it.\"", "* you got the graveyard key *","s"] ,false,true);
				caveFour.signs[0].xpos = 90;
				caveFour.background = "rooms/roomimages/cave4a.png"
				$("#gameText").text("");
			}
			else if (flagroom.player.optionSelect === flagroom.misc+2){
				flagroom.signs[0].text = ["","\"You want to play a game with me?\"","\"And if you win, I pay your toll for you?\"","\"Well... my shift is about to end...\"", 
				"\"Maybe you can ask the next worker, Ziziphora?\"", "\"I think they like to gamble anyway.\"", "\"Maybe come back here in a little while.\""];
				flagroom.signs[0].on = true;
				$("#gameText").text("");
				walkFourteen.roomRight = walkSixteen;
			}
			else if (flagroom.player.optionSelect === flagroom.misc+3){
				flagroom.fade = true;
				flagroom.transitionRoom = endingZero;
				flagroom.player.ypos = 1000;
			}
	}

	if (flagroom.id === 16){
		if (flagroom.player.optionSelect === 0+flagroom.misc){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Not much?\"","\"Just want a change of scenery?\"", "\"Yeah, that's understandable.\"", "\"You know sometimes I get tired of this side of town,\"", 
			"\"And I feel like I need to head on across this bridge to get some fresh air.\"","\"Actually, just last week I was telling my cousin Igimo,\"",
			"\"You know Igimo, I need a change of pace.\"","\"So I hiked on down past the tennis courts towards Constellation Creek.\"", "\"Oh, have you ever been to Constellation Creek?\"", "o"];
			walkSixteen.options = ["nope ->", "<- yeah ->", "<- Oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -4;
		}
		else if (flagroom.player.optionSelect === 1+flagroom.misc){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Painting!?\"", "\"Wow, that's cool.\"", "\"I haven't painted something in a while because I've been making snow sculptures.\"", 
			"\"But I used ot paint a lot.\"", "\"In fact I remember a few months ago over the summer I was telling my cousin Mogimo,\"", "\"Mogimo, I want to go paint!\"", 
			"\"Mogimo though isn't too in to painting so he was like -Yeah, sure, whatever.\"", "\"So anyway I decided I was going to go paint Constellation Creek.\"" ,
			"\"Oh, have you ever been to Constellation Creek?\"", "o"];
			walkSixteen.options = ["nope ->", "<- yeah ->", "<- Oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -9;
		}
		else if (flagroom.player.optionSelect === 9+flagroom.misc){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"You haven’t!\"", "\"Well you need to check it out!\"", "\"Constellation Creek is this really pretty creek that also is MAGICAL.\"",
			"\"The water of the creek has magical properties that make you smell really nice.\"", "\"So anyway, I was there painting some clouds.\"",
			"\"When someone came up to me from by the river.\"", "\"And they were like,\"","\"Hey Ziziphora, what are you painting?\"", "\"And I was like, The clouds of course!\"", "\"And they were like why are you painting the clouds?\"",
			"\"And I was like, Because I like clouds -duh.\"", "\"And they were like clouds are lame.\"", "\"And I was like, clouds are not lame!\"","\"And they were like, yeah they are.\"","\"And then I was like, No they aren't!\"", "\"And then all of a sudden, Zale, the spirit of the river, emerged from the river with a big SPLOOSH!\"",
			 "\"And they completely soaked the other person I was talking to.\"", "\"And the person got really annoyed, and was like,\"", "\"Why'd you do that?\"", "\"And then Zale, who doesn't really talk, signed to them in their river language,\"", "\"Clouds...are...cool.\"","\"So anyway, um wait... what was I talking about?\"", "o"];
			walkSixteen.options = ["ummmm ...->", "<- well ...->", "<- Oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -11;
		}
		else if (flagroom.player.optionSelect === 10+flagroom.misc){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Cool. So you know where I'm talking about.\"", "\"So anyway, I was there painting some clouds.\"",
			"\"When someone came up to me from by the river.\"", "\"And they were like,\"","\"Hey Ziziphora, what are you painting?\"", "\"And I was like, The clouds of course!\"", "\"And they were like why are you painting the clouds?\"",
			"\"And I was like, Because I like clouds -duh.\"", "\"And they were like clouds are lame.\"", "\"And I was like, clouds are not lame!\"","\"And they were like, yeah they are.\"","\"And then I was like, No they aren't\"", "\"And then all of a sudden, Zale, the spirit of the river, emerged from the river with a big SPLOOSH!\"",
			 "\"And they completely soaked the other person I was talking to.\"", "\"And the person got really annoyed, and was like,\"", "\"Why'd you do that?\"", "\"And then Zale, who doesn't really talk, signed to them in their river language,\"", "\"Clouds...are...cool.\"","\"So anyway, um wait... what was I talking about?\"", "o"];
			walkSixteen.options = ["ummmm ...->", "<- well ...->", "<- Oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -11;
		}
		else if ((flagroom.player.optionSelect === 11+flagroom.misc) || (flagroom.player.optionSelect === 12+flagroom.misc)){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Oh that's right.\"", "\"I was talking about painting.\"", "\"So anyway I really like painting.\"", "\"Usually, I like watercolor painting\"", "\"But you know, sometimes I like to expirement with acrylics too.\"",
			"\"Well anyway, let me know how the painting goes!\"", "s"];
		}
		else if (flagroom.player.optionSelect === 2){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Oh you need to go?\"", "\"Ok bye, I'll see you later!\""];
			walkFourteen.roomRight = walkSeventeen;
		}
		else if(flagroom.player.optionSelect === 4+flagroom.misc){
			flagroom.signs[0].text = ["","\"You haven’t!\"", "\"Well you need to check it out!\"", "\"Constellation Creek is this really pretty creek that runs into Luminous Lake.\"","\"The cool thing about Constellation Creek is that it's MAGICAL.\"","\"The water of the creek has a magical property that makes you smell really nice.\"",
			"\"Also the creek is home to a kind and powerful spirit named Zale.\"", "\"I've actually met Zale a couple times, but they're usually pretty busy I think.\"", "\"Actually in the winter, they sleep a lot too.\"", 
			"\"But anyway I was hiking towards Constellation Creek when it started to snow\"", "\"And I was like, good thing I brought my mittens.\"", "\"Because you see the snow was really starting to come down.\"",
			"\"And so I was walking by the Creek,\"", "\"When I stopped by this snow elephant that someone had made.\"", "\"You know, because I really like snow sculptures.\"", "\"Oh, do you like snow sculptures?\"", "o"];
			flagroom.signs[0].on = true;
			walkSixteen.options = ["... um yeah ->", "<-... well ... ->", "oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -6;
		}
		else if(flagroom.player.optionSelect === 5+flagroom.misc){
			flagroom.signs[0].text = ["","\"Cool. So you know where I'm talking about.\"", "\"So anyway I was hiking towards Constellation Creek when it started to snow.\"", 
			"\"And I was like, good thing I brought my mittens.\"", "\"Because you see the snow was really starting to come down.\"",
			"\"And so I was walking by the Creek,\"", "\"When I stopped by this snow elephant that someone had made.\"", "\"You know, because I really like snow sculptures.\"", "\"Oh, do you like snow sculptures?\"", "o"];
			flagroom.signs[0].on = true;
			walkSixteen.options = ["... um yeah ->", "<-... well ... ->", "oh sorry... I just remembered I have to go somewhere..."];
			flagroom.misc = -6;
		}

		else if(flagroom.player.optionSelect === 6+flagroom.misc || flagroom.player.optionSelect === 7+flagroom.misc){
			flagroom.signs[0].text = ["","\"Cool. So anyway I was standing by this Elephant Snow Sculpture...\"", "\"When I started to smell this amazing smell coming from across the creek.\"", 
			"\"So naturally I went towards the smell.\"", "\"And what do you know...\"" , "\"Someone had set up a pancake stand right in the middle of the woods.\"", "\"I mean what an amazing day!\"", 
			"\"So anyway the point is...\"", "\"Sometimes you just need to cross a bridge or a creek.\"", "\"So anyway, have fun!\"", "s"];
			flagroom.signs[0].on = true;
		}

		$("#gameText").text("");
	}

	if (flagroom.id === 19){ //cemeteryOne
		if (flagroom.player.optionSelect === 0){
			room = walkFourteen;
			flagroom.player.xpos = 500;
		}
		$("#gameText").text("");
	}

	if (flagroom.id === 23){
		if (flagroom.player.optionSelect === 1 && flagroom.misc !== 100){
			flagroom.misc = 100
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","are you sure you want to go home?","o"];
		}
		else if(flagroom.player.optionSelect === 1){
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		else{
			flagroom.signs[0].xpos = -200
		}
		$("#gameText").text("");
	}
	if (flagroom.misc > 199){ // rooms 24,25, (26, 27, 28 sometimes)
		if (flagroom.misc === 220 && flagroom.player.optionSelect === 0){
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		else if(flagroom.misc === 220){
			flagroom.options = ["wait for them to get out of the way ->", "<- ask them to move a little ->",  "<- try to go around them ->", "<- shove through them ->", "<- go home"];
			flagroom.misc = 200;
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","you push through the crowd.", "you feel hot as if you're burning inside.","s"];
		}
		else if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","...", "... ...", "... ... ...", "... ... ... ...", "ok they moved.","s"];
		}
		else if (flagroom.player.optionSelect === 1){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","ummmm...", "excuse me...", "can you move a little?","s"];
		}
		else if (flagroom.player.optionSelect === 2){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["", "you try to go around them but are blocked by someone else.","o"];
		}
		else if (flagroom.player.optionSelect === 3){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","you push through them.", "you feel hot as if you're burning inside.","s"];
		}
		else if (flagroom.player.optionSelect === 4){
			flagroom.signs[0].on = true
			flagroom.signs[0].text = ["", "are you sure you want to go home?","o"];
			flagroom.options = ["go home ->", "<- try to navigate through the crowd"];
			flagroom.misc = 220
		}
		$("#gameText").text("");
	}
	else if (flagroom.misc === 199 || flagroom.misc === 177){ //rooms 26,27, 28
		if (flagroom.player.optionSelect === 0){
			flagroom.options = ["wait for them to get out of the way ->", "<- ask them to move a little ->",  "<- try to go around them ->", "<- shove through them ->", "<- go home"];
			flagroom.signs[0].xpos = 300 - (flagroom.id % 26 * 70);
			flagroom.signs[1].xpos = -200;
			flagroom.misc = 200;
		}
		else if (flagroom.player.optionSelect === 1){
			flagroom.signs[1].on = true;
			flagroom.signs[1].text = ["","is there another way?", "...", "... ...", "... ... ...","... ... ... ... ...", "s"];
			flagroom.misc = 100;
		}
		else if (flagroom.misc !== 177){
			flagroom.misc = 177;
			flagroom.signs[1].text = ["","are you sure you want to go home?","o"];
			flagroom.signs[1].on = true;
		}
		else{
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 32){
		if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"really!?\"", "\"ok, sounds good!\""];
			//join party
			caveFive.background = "rooms/roomimages/cave5a.png";
			caveFive.signs[0].size = 140;
			caveNine.background = "rooms/roomimages/cave9a.png"
			caveNine.signs[1].xpos = 530;
			caveTen.background = "rooms/roomimages/cave10a.png";
			caveTen.signs[4].xpos = 530;
			caveEleven.background = "rooms/roomimages/cave11a.png";
			caveEleven.signs[1].xpos = 380;
			caveTwelve.background = "rooms/roomimages/cave12a.png";
			caveTwelve.signs[5].xpos = 560;
			caveThirteen.background = "rooms/roomimages/cave13a.png";
			caveThirteen.signs[1].xpos = 140;
			walkFifteen.signs[0].text = ["", "\"hey!\"","\"i just got a message saying that someone found my lost mittens!\"","\"they're going to give them to me tomorrow!\"", "\"so did your wish come true too?\""]
		}
		else{
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"oh ... ok\"", "\"well... um good luck looking for it anyway!\"","s"];
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 33){
		if (flagroom.player.optionSelect === 0){
			room = caveNine;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 34){
		if (flagroom.player.optionSelect === 0){
			room = caveEight;
			flagroom.player.xpos = 600;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 36){
		if (flagroom.player.optionSelect === 0){
			room = caveSix;
			flagroom.player.xpos = 200;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 38){
		if (flagroom.player.optionSelect === 1){
			flagroom.signs[4].text = ["","\"ok i'll reset the puzzle\"","\"now in order to solve it...\"","\"press the first switch once.\"","\"press the second switch once.\"","\"press the third switch twice.\"", "\"good luck!\"","s"];
			flagroom.signs[4].on = true;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 41){
		if (flagroom.player.optionSelect === 0){
			room = caveFourteen;
			flagroom.player.xpos = 500;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 42){
		if (flagroom.player.optionSelect + flagroom.misc === 1){
			flagroom.signs[0].text = ["","...","o"];
			flagroom.options = ["wish to be understood ->", "<- wish for courage ->", "<- wish to be noticed ->", "<- wish for something else"];
			flagroom.signs[0].on = true;
			flagroom.misc = -7		
		}
		else if (flagroom.player.optionSelect + flagroom.misc === -4){
			flagroom.options = ["wish for intimacy ->","<- wish to disappear - >","<- wish to feel safe ->","<- wish for something else"];
			flagroom.signs[0].on = true;
			flagroom.misc = -11;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === -8){
			flagroom.options = ["wish for the power to walk through crowds ->","<- wish for something else"];
			flagroom.signs[0].on = true;
			flagroom.misc = 0;
		}
		else{
			flagroom.signs[0].xpos = -100;
			flagroom.player.ypos = -200;
			flagroom.player.xpos = 400;
			room = cemeteryTwo;
			cemeteryTwo.roomRight = farOne;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 45 || flagroom.id === 49 || flagroom.id === 54){
		if (flagroom.player.optionSelect === 1 && flagroom.misc !== 100){
			flagroom.signs[0].text = ["","are you sure you want to go home?","o"];
			flagroom.misc = 100;
			flagroom.signs[0].on = true;
		}
		else if (flagroom.player.optionSelect === 1){
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		else{
			flagroom.signs[0].xpos = -100;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 48){
		if (flagroom.player.optionSelect !== 3 && flagroom.misc === 100){
			flagroom.misc = 0;
		}
		if (flagroom.player.optionSelect + flagroom.misc === 0){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","you focus really intensly on tying your shoe laces ...", "...", "... ...", "... ... ...", "\"hello! what are you doing here?\"", "it didn't work!", "how should you respond?", "o"];
			flagroom.options = ["ummm ... nothing really ->", "<- ummm ... going painting"];
			flagroom.misc = -3;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === -3){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["", "\"oh ok!", "\"well it was nice to see you!\"", "\"have a nice night!\"","s"];
		}
		else if (flagroom.player.optionSelect + flagroom.misc === -2){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["", "\"oh yeah, there's that painting thing tonight!\"","\"i wish i could go, but i'm meeting my friend for their birthday party.\"","\"well, have fun!\"","s"];
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 1){
			flagroom.signs[0].xpos += 100;
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","wait ...","this is an imaginary rock ...","you must seem so weird right now ...","...","... ...","looks like they see you.","\"hi! what are you doing here?\"", "o"];
			flagroom.options = ["ummm ... nothing really ->", "<- ummm ... going painting"];
			flagroom.misc = -3
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 2){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["ummm... hi!", "ummm ...", "...", "... ...", "\"oh hello!, what are you doing here?\"", "o"];
			flagroom.options = ["ummm ... nothing really ->", "<- ummm ... going painting"];
			flagroom.misc = -3
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 3){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","but are you sure you want to go home?", "o"];
			flagroom.misc = 100
		}
		else if (flagroom.misc === 100){
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 53){
		if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].on = true;
			flagroom.signs[0].xpos += 210;
			if (flagroom.misc === 0 || flagroom.misc === 100){
				flagroom.signs[0].text = ["","you'll have to try to pretend to be normal...","that's so exhausting...", "maybe you should go home.","o"];
				flagroom.misc = -1;
			}
			else{
				flagroom.signs[0].text = ["","your hair still looks off...", "people won't like you as much...","it'd be better to just go home.","o"];
			}
		}
		else if (flagroom.misc !== 100){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","are you sure you want to go home?","o"];
			flagroom.misc = 100;
		}
		else{
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 55){
		if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Oh yeah, same.\"", "\"Ok, well I just have to return some stuff to a friend.\"", "\"I'll catch up with you inside!\""];
		}
		else {
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","\"Awesome!\"", "\"Well I just have to return some stuff to a friend.\"", "\"I'll catch up with you inside!\""];
		}
	}
	else if (flagroom.id === 56){
		if (flagroom.misc === 100 && flagroom.player.optionSelect !== 1){
			flagroom.misc = 0;
		}
		if (flagroom.misc + flagroom.player.optionSelect === 0){
			flagroom.misc = -2;
			flagroom.signs[0].xpos = -100;
			flagroom.options = ["offer to go with them to get their bike ->", "<- apologize for not bringing their bike with you"];
		}
		else if (flagroom.misc + flagroom.player.optionSelect === 1){
			flagroom.signs[0].on = true;
			flagroom.signs[0].text = ["","are you sure you want to go home?", "o"];
			flagroom.misc = 100;
		}
		else if (flagroom.misc + flagroom.player.optionSelect === -2 || flagroom.misc + flagroom.player.optionSelect === -4){
			flagroom.signs[1].text = ["","\"really, you want to come with me?\"" ,"\"Ok thanks!\"", "\"Then we can come back to paint afterwards!\"", "s"];
			flagroom.signs[1].on = true;
			//swap animation.
		}
		else if (flagroom.misc + flagroom.player.optionSelect === -1){
			flagroom.signs[1].text = ["","\"oh that's ok!\"", "\"Hey do you want to come and get it with me?\"", "o"];
			flagroom.options = ["get bike with them ->", "<- politely decline"];
			flagroom.signs[1].on = true;
			flagroom.misc = -4;
		}
		else if (flagroom.misc + flagroom.player.optionSelect === -3){
			flagroom.signs[1].text = ["","\"ok, well then i'll catch up with you inside!\"", "\"see you soon!\"", "s"];
			flagroom.signs[1].on = true;
			flagroom.misc = -6;
		}
		else{
			flagroom.fade = true;
			flagroom.transitionRoom = endingZero;
			flagroom.player.ypos = 1000;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 60){
		if (flagroom.player.optionSelect + flagroom.misc === 0){
			flagroom.signs[0].text = ["","\"yeah it's a nice bridge... \"", "\"...\"", "\"... ...\"", "\"... ... ...\"", "\"... ... ... ...\"","\"... ... ... ... ...\"", "...", "... ...", "... ... ...", "... ... ... ...", "... ... ... ... ...", "... ... ... ... ... ...", "\"um, let's keep going...\"","s"];
			flagroom.signs[0].on = true;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 1){
			flagroom.signs[0].text = ["","\"Oh, someone made a giant turtle out of snow!?", "\"Or... is that a reference to a movie or something?\"", "o"];
			flagroom.options = ["explain that no one actually made the snow turtle ->", "<- pretend it's a reference to something"];
			flagroom.misc = 2;
			flagroom.signs[0].on = true;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 2){ //made snow turtle
			flagroom.signs[0].text = ["", "ummmm ...", "... ", "... ...", "... ... ...", "nevermind...", "\"um ...\"", "s"];
			flagroom.misc = 5;
			flagroom.signs[0].on = true;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 3){ //pretend reference
			flagroom.signs[0].text = ["","well ummmmmmm... ", "... ", "... ...", "... ... ...","nevermind...","\"um...\"","s"];
			flagroom.signs[0].on = true;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 66){
		if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].text = ["","ummm ....","...","... ...", "... ... ...","... ... ... ...","... ... ... ... ...", "*sigh*", "i'm not sure", "s"];
			flagroom.signs[0].on = true;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 1){
			flagroom.signs[0].text = ["","ummm....","actually you're not sure if you want to talk about it..", "o"];
			flagroom.signs[0].on = true;
			flagroom.misc = 2;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 3){
			flagroom.signs[0].text = ["","...","... ...","... ... ...","part of you wants to talk about your snow sculpture, but you also feel that you shouldn't", "o"];
			flagroom.signs[0].on = true;
			flagroom.misc = 4;
		}
		else if (flagroom.player.optionSelect + flagroom.misc === 5){
			flagroom.signs[0].text = ["","...","... ...","... ... ...","it feels too difficult to explain...", "o"];
			flagroom.signs[0].on = true;
		}
		$("#gameText").text("");
	}
	else if (flagroom.id === 67){
		if (flagroom.player.optionSelect === 0){
			flagroom.signs[0].text = ["","\"Ok, let's go paint!\"","s"];
			flagroom.signs[0].on = true;
		}
		else if (flagroom.misc === 0){
			flagroom.signs[0].text = ["","...", "... ...", "\"Oh, you don't want to go paint anymore?\"", "\"ummm... Are you sure?\"","o"];
			flagroom.signs[0].on = true;
			flagroom.misc = 2;
		}
		else if (flagroom.misc === 2){
			flagroom.signs[0].text = ["","\"Ok, well I'll see you later!\"", "\"Have a nice night!\"","s"];
			flagroom.signs[0].on = true;
			flagroom.misc = 3;
		}
	}
}



