var caveOne = new Room(29,blue,[startThreeFloor],[],[],[],[""],[""],"");
caveOne.floor = "";

var mimiMeet = new Sign(400,400,100,["","\"hey! what are you doing here?\"", "\"did you get lost in the cemetery?\"", "...", "\"oh,  a giant crowd was blocking the way?\"", "...", "... ...", "\"well did you know that this is a MAGIC cave?\"", 
	"\"somewhere inside this cave, there's a bright stalagmite...\"", "\"or is it a stalactite?\"", "\"well anyway, it has the powers to make your dreams come true.\"", "\"if you find it, you can ask for the power to walk through crowds.\"","s"],false,true);
var caveTwo = new Room(30,blue,[startThreeFloor],[],[],[mimiMeet],[""],[""],"rooms/roomimages/cave2.png");
var caveThree = new Room(31,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/cave3.png");

var mimiJoin = new Sign(-200,400,110,["","\"ummmm.... hi!\"", "\"i was thinking that maybe i could help you look for the stalagmite ...\"", "\"if you want ...\"", "\"it's kind of a confusing cave ...\"", "\"and i wanted to wish for new mittens anyway ...\"", "...", "o"],false,true);
var caveFour = new Room(32,blue,[startThreeFloor],[],[],[mimiJoin],[""],[""],"rooms/roomimages/cave4.png");
caveFour.options = ["search together ->","<- search by yourself"];

var starPath = new Sign(310,400,70,["","hey!","there's a secret path here.","do you want to try going through it?","o"],false,false);
var caveFive = new Room(33,blue, [startThreeFloor],[],[],[starPath],[""],[""],"rooms/roomimages/cave5.png");
caveFive.options = ["travel through secret path - >", "<- don't travel through secret path"];

var cavetunnelOneA = new Sign(150,400,70,["","this plant protects a secret room. do you want to travel to it?","o"],false,false);
var caveSix = new Room(34,blue,[startThreeFloor],[],[],[cavetunnelOneA],[""],[""],"rooms/roomimages/cave6.png");
caveSix.options = ["yes ->", "<- no"];

var caveSevenWall = new Wall(420,300,200,"#89ed21",false);
var caveSeven = new Room(35,blue,[startThreeFloor],[caveSevenWall],[],[],[""],[""],"rooms/roomimages/cave7.png");

var cavetunnelOneB = new Sign(480,400,80,["","do you want to return to the other part of the cave?","o"],false,false);
var poemToPath = new Sign(160,400,70,["","it always snows in magic caves."],false,false);
var caveEightWallA = new Wall(40,300,200,"#99aaee",false);
var caveEightWallB = new Wall(660,300,200,"#99aaee",false);

var caveEight = new Room(36,blue,[startThreeFloor],[caveEightWallA,caveEightWallB],[],[cavetunnelOneB,poemToPath],[""],[""],"rooms/roomimages/cave8.png");
caveEight.options = ["yes ->", "<- no"];

var puzzleAme = new Sign(130,400,80,["","Dear Future Explorers,","How are you doing?","I assume you're looking for the magical stalagmite (stalactite?).", "In order to find it, you must solve three puzzles.","They might seem tricky, but you can do it!", "Good luck!", "Sincerely,", "Zale, Spirit of the River"],false,false);
var mimiPuzzle = new Sign(-200,400,110,["","\"well, it looks like we'll need to solve some puzzles?\"", "\"cool!\""],false,false);
var caveNine = new Room(37,blue,[startThreeFloor],[],[],[puzzleAme,mimiPuzzle],[""],[""],"rooms/roomimages/cave9.png");


var blockOne = new Floor(400,230,0,0,30,"#000000",true);
blockOne.width = 30;
var blockTwo = new Floor(520,200,0,0,30,"#2266ee",true);
blockTwo.width = 30;
var instructionsOne = new Sign(130,400,80,["","Dear Future Explorers,", "it's Zale again!", "In order to solve this puzzle, you need to get the little black and blue squares to overlap.", "Good Luck!", "P.S.", "I'd tell you how I solved it myself...", "but honestly I just pressed a bunch of random buttons until it worked."],false,false);
var switchOne = new Sign(250,400,50,["","bzzzt!","s"],false,false);
var switchTwo = new Sign(350,400,50,["","bzzzt!","s"],false,false);
var switchThree = new Sign(450,400,50,["","bzzzt!","s"],false,false);
var mimiHelpOne = new Sign (-200,400,110,["","\"so i think i solved the puzzle.\"", "\"do you want me to help you solve it, or do you want to try it yourself\"","o"],false,true);
var puzzleWallOne = new Wall(640,300,200,"#89ed21",false);
var caveTen = new Room(38,blue,[startThreeFloor,blockOne,blockTwo],[puzzleWallOne],[],[instructionsOne,switchOne,switchTwo,switchThree,mimiHelpOne],[""],[""],"rooms/roomimages/cave10.png");
caveTen.options = ["solve it yourself ->", "<- let mimi solve it for you"];

var puzzleWallTwo = new Wall(650,0,500,"#89ed21",false);
var puzzleSideRail = new Wall(0,0,350,"#89ed21",false);
var puzzleGuardOne = new Wall(400,0,110,"#ffffff",true);
var puzzleGuardTwo = new Wall(350,0,110,"#ffffff",true);
var puzzleFloorOne = new Floor(0,330,0,0,700,"#8912aa",false);
var puzzleFloorTwo = new Floor(0,210,0,0,700,"#ff12aa",false);
var puzzleFloorThree = new Floor(0,90,0,0,700,"#ff12aa",false);
var mimiTeleport = new Sign(-610,400,90,["","\"wow teleportation!\"", "\"do you think i could wish for that instead of new mittens?\"", "\"though i do really miss having mittens...\"","\"hmmmm... i'll have to think about this for a little while ...\""],false,false);
var instructionsTwo = new Sign(130,400,80,["","Dear Future Explorers,","how did the last puzzle go?", "This puzzle is a little different.","Those switches are MAGICAL; they can teleport you to different parts of this room.","They also will move certain walls around.","Use the switches to navigate to the blue square button and open up the path to the next puzzle.", "Sincerely,", "Zale"],false,false);
var teleOne = new Sign(240,400,60,["","bzzzt!","s"],false,false);
var teleTwo = new Sign(540,400,60,["","bzzzt!","s"],false,false);
var caveEleven = new Room(39,blue,[startThreeFloor,puzzleFloorOne,puzzleFloorTwo,puzzleFloorThree],[puzzleWallTwo,puzzleGuardOne,puzzleGuardTwo,puzzleSideRail],[],[instructionsTwo,mimiTeleport,teleOne,teleTwo],[""],[""],"rooms/roomimages/cave11.png");
caveEleven.floor = "rooms/roomimages/cave11floor.png"

var instructionsThree = new Sign(70,400,70,["","Dear Future Explorers,", "Only one puzzle left to go!","Have you thought about your wish yet?","Sincerely,","Zale"],false,false);
var switchSwapOne = new Sign(190,400,60,["","bzzzt!","s"],false,false);
var switchSwapTwo = new Sign(290,400,60,["","bzzzt!","s"],false,false);
var switchSwapThree = new Sign(400,400,50,["","bzzzt!","s"],false,false);
var switchSwapFour = new Sign(500,400,60,["","bzzzt!","s"],false,false);
var mimiLastPuzzle = new Sign(-100,400,80,["","\"are you ready to make your wish?\""],false,false);
var puzzleBarOne = new Wall(300,250,5,"#ffffff",true);
var puzzleBarTwo = new Wall(320,250,20,"#ffffff",true);
var puzzleBarThree = new Wall(340,250,90,"#ffffff",true);
var puzzleBarFour = new Wall(360,250,60,"#ffffff",true);
var puzzleBarFive = new Wall(380,250,40,"#ffffff",true);
var puzzleWallThree = new Wall(660,0,500,"#ffffff",false);
var caveTwelve = new Room(40,blue,[startThreeFloor],[puzzleBarOne,puzzleBarTwo,puzzleBarThree,puzzleBarFour,puzzleBarFive,puzzleWallThree],[],[instructionsThree,switchSwapOne,switchSwapTwo,switchSwapThree,switchSwapFour,mimiLastPuzzle],[""],[""],"rooms/roomimages/cave12.png");

var caveThirteenFloor = new Floor(0,455,0,0,600,"#77ff77",false);
var caveHiddenFloor =  new Floor(0,700,0,0,1000,"#77ff77",false);
var caveThirteenWall = new Wall(300,470,300,"#ffffff",true);
var instructionsFour = new Sign(60,400,80,["","Dear Future Explorers,","you've made it.", "Just go under the stalactite, and make your wish.", "Sincerely,", "Zale"],false,false);
var mimiLast = new Sign(-200,400,90,["","\"ok this is it ...\"","\"...\"", "\"ummm ....\"","\"thank you for letting me come along with you!\""],false,false);
var caveFalling = new Sign(620,400,30,["","you're falling ...","...","... ...", "... ... ...", "s"],false,true)
var decideWish = new Sign(400,400,170,["","are you ready to make your wish?","o"],false,false);
var caveThirteen = new Room(41,blue,[caveThirteenFloor,caveHiddenFloor],[caveThirteenWall],[],[instructionsFour,mimiLast,decideWish,caveFalling],[""],[""],"rooms/roomimages/cave13.png");
caveThirteen.options = ["yes - >", "<- no"];
caveThirteen.floor = "rooms/roomimages/cave13floor.png"

var makeWish = new Sign(500,400,30,["","ok! make your wish!", "o"],false,true);
var caveFourteen = new Room(42,blue,[startThreeFloor],[],[],[makeWish],[""],[""],"rooms/roomimages/cave14.png");
caveFourteen.options = ["wish for the power to walk through crowds ->", "<- wish for something else"];
caveFourteen.floor = "";

caveOne.roomRight = caveTwo;
caveTwo.roomLeft = caveOne;
caveTwo.roomRight = caveThree;
caveThree.roomLeft = caveTwo;
caveThree.roomRight = caveFour;
caveFour.roomLeft = caveThree;
caveFour.roomRight = caveFive;
caveFive.roomLeft = caveFour;
caveFive.roomRight = caveSix;
caveSix.roomLeft = caveFive;
caveSix.roomRight = caveSeven;
caveSeven.roomLeft = caveSix;

caveNine.roomRight = caveTen;
caveTen.roomLeft = caveNine;
caveTen.roomRight = caveEleven;
caveEleven.roomLeft = caveTen;
caveEleven.roomRight = caveTwelve;
caveTwelve.roomLeft = caveEleven;
caveTwelve.roomRight = caveThirteen;
caveThirteen.roomLeft = caveTwelve;



