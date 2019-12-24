var blue = new Player(400,600,0,0,0,20,"#ffdddd");

const plum = new Floor(410,400,0,0,50,"#f3df99",true);
const red = new Floor(450,350,0,0,50,"#ff9999",true);
const pink = new Floor(490,300,0,0,50,"#ff3333",true);
const purple = new Floor(530,250,0,0,50,"#ff99ff",true);
const magenta = new Floor(570,200,0,0,70,"#9999ff",true);

const peach = new Floor(0,450,0,0,700,"#77ff77",false);
const startThreeFloor = new Floor(0,455,0,0,700,"#77ff77",false);
const endFloor = new Floor(0,700,0,0,700,"#77ff77",false);
const testFloor = new Floor(400,450,0,0,300,"#77ff77",true);

const startOneWallA = new Wall(200,300,200,"#89ed21",false); 
const startOneWallB = new Wall(470,300,200,"#89ed21",false); 
const startThreeWall = new Wall(350,300,200,"#89ed21",false);
const startFourWall = new Wall(150,300,200,"#89ed21",false);

var white = new Sign(130,400,80, ["","it's the tree you planted.", "it looks a little taller than it did yesterday."],false,false);

var signThree = new Sign(500,400,30,["","you feel kind of tired though.", "do you want to just go back home?", "o"],false,true)

// (id, player,floors,walls,doors,signs,text,flag,background)

const startZeroText = ["", "you've been invited to go paint.", "it might be fun.", "maybe you should go..."];

var startZeroMessage = ["", "You received a Message! (Press Enter)", "\"Hey!! I'm super pumped that you signed up for our club!\"", 
"\"I'd love to see you at some of the events!\"", "\"We're painting tonight, if you want to come!\"", 
"-From Alden", "painting might be fun...", "maybe you should go...","s"]

var endingZero = new Room(71,blue,[endFloor],[],[],[],[""],[""],"rooms/roomimages/end0.png");
var endingOne = new Room(72,blue,[endFloor],[],[],[],[""],[""],"rooms/roomimages/endingpainting1.png");
endingOne.floor = "";
var titleSign = new Sign(400,700,300,["","Press \"Enter\" to Begin","s"],true,true);
var titleRoom = new Room (73,blue,[endFloor],[],[],[titleSign],[""],[""],"rooms/roomimages/walk8.png")

var startZeroBed = new Sign(400,400,170,startZeroMessage,false,true)
var paintSupplies = new Sign(-100,400,50,["","you put your paint set in your backpack.","s"],false,false);
var leaveRoom = new Sign(350,400,60,["","hey!", "maybe you should get your paint set before you leave?","s"],false,false);
var paintDoubt = new Sign(-100,400,30,["","well... then again...", "maybe it's better to take your paint set, just in case?","you never really know when you might need it.","s"],false,true);

var campusFlyers = new Sign(240,400,50,["","it's a bulletin board with some campus flyers..."], false,false);
var mayaRoom = new Sign(70,400,70,["","that's Maya's room."], false,false);
var startZero = new Room(100,blue,[startThreeFloor],[startOneWallA],[],[paintSupplies,paintDoubt,startZeroBed],startZeroText,[""],"rooms/roomimages/start0.png");
startZero.floor = "";
startZero.misc = 10;
var startOne = new Room(1,blue,[startThreeFloor],[startOneWallB],[],[leaveRoom, campusFlyers, mayaRoom],[""],[""],"rooms/roomimages/start1.png");
startOne.options = ["don't leave yet ->", "<- leave"];
startOne.floor = "";

const startTwoDoor = new Door(480,375,0,50,"#ffffff",startOne,500,420,0,false);
const startTwoText = ["","remember, you can press \"enter\" to learn more about your surroundings.","try pressing \"enter\" in front of that tree over there."];
var outTheDoor = new Sign(480,400,30,["","hey!", "you went outside!", "* Achievement Unlocked! *", "s"],false,true);
var startTwo = new Room(2,blue,[startThreeFloor],[],[],[outTheDoor, white], startTwoText,[""],"rooms/roomimages/room6.png")


const startSixWall = new Wall(40,300,200,"#89ed21",false);

var startThree = new Room(3,blue,[startThreeFloor],[],[],[signThree],[""],[""],"rooms/roomimages/room5.png");
startThree.options = ["no, keep going ->","<- go home"]

var signFour = new Sign(220,400,50,["","Starry Point Observatory","Closed Due to Inclement Weather"],false,false);
var startFour = new Room(4,blue,[startThreeFloor],[startFourWall],[],[signFour],[""],[""],"rooms/roomimages/room2.png");

var signFive = new Sign(200,400,30,["","it'll probably be awkward and uncomfortable.", "why not go home instead?", "o"],false,true);
var sculptureFive = new Sign(460,400,140,["","it's one of the campus sculptures.", "maybe the artist didn't think it would snow so much?","or maybe they did?"],false,false);
var walkFive = new Room(5,blue,[startThreeFloor],[],[],[signFive,sculptureFive],[""],[""],"rooms/roomimages/start5.png");
walkFive.options = ["go home ->","<- go painting"]

var signSix = new Sign(540,400,100,["","\"these trees are quite unusual.\"", "\"they are unaffected by snow,\"", "\"and they smell like rain.\"", "\"i must continue to study them...\""],false,false);
var candySix = new Sign(460,400,70,["", "the leaves of this tree are made of cotton candy."],false,false);
var walkSixTree = new Sign(210,400,100,["","this tree is imaginary.", "it is also quite pretty."],false,false);
var walkSix = new Room(6,blue,[startThreeFloor],[],[],[walkSixTree,candySix,signSix],[""],[""],"rooms/roomimages/walk6.png");

var signBike = new Sign(80,400,70,["","it's a lost bike.", "someone probably stole it and tossed it here.", "*sigh*", "you post a message in the campus Lost and Found group.", "s"],false,true);
var walkSevenLion = new Sign(540,400,100,["","\"see that UFO way up in the sky?\"", "\"it's been shining a beam of light down there for the past hour.\""],false,false);
var walkSeven = new Room(7,blue,[startThreeFloor],[],[],[signBike,walkSevenLion],[""],[""],"rooms/roomimages/walk7.png");


var signEight = new Sign(600,400,30,["","*sigh*", "suddenly you're feeling really exhausted...","maybe you should just go home.","o"],false,true);
var signEighttwo = new Sign(150,400,150,["","it's the snowdragon you made yesterday... sort of.","looks like it's been destroyed.","*sigh*","o"],false,true);
var walkEight = new Room(8,blue,[startThreeFloor],[],[],[signEighttwo,signEight],[""],[""],"rooms/roomimages/walk8.png");
walkEight.options = ["stay and fix the snowdragon ->", "<- leave it"];

var signNine = new Sign(280,400,60,["","lampposts over there --->"],false,false);
var walkNine = new Room(9,blue,[startThreeFloor],[],[],[signNine],[""],[""],"rooms/roomimages/walk9.png");
var walkTen = new Room(10,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/walk10.png");
var achievementOne = new Sign(400,400,30,["","hey!", "you were able to tolerate one of your insecurities!","* Achievement Unlocked! *", "s"],false,true);

var signEleven = new Sign(60,400,30,["","you see your reflection off the car's window.", "your hair doesn't look right.","o"],false,true);
var walkEleven = new Room(11,blue,[startThreeFloor],[],[],[signEleven,achievementOne],[""],[""],"rooms/roomimages/walk11.png");
walkEleven.options = ["try to fix your hair ->", "<- try to ignore your hair"];


var bigCat = new Sign(370,400,130,["","\"do you like my balloon?\"", "\"a penguin gave it to me.\""],false,false);
var signCemetery = new Sign(460,400,120,["","Starry Point Cemetery","the gate to the cemetery is locked."],false,false);

var walkTwelve = new Room(12,blue,[startThreeFloor],[],[],[bigCat],[""],[""],"rooms/roomimages/walk12.png");
var walkThirteen = new Room(13,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/room5.png");
var walkFourteen = new Room(14,blue,[startThreeFloor],[],[],[signCemetery],[""],[""],"rooms/roomimages/walk14.png");
walkFourteen.options = ["enter the cemetery ->","<- don't enter the cemetery"];

var bridgeWall = new Wall(480,300,200,"#89ed21",false);
var bridgeTroll  = new Sign(340,400,90,["","\"Ummmm... Excuse Me!!!\"","\"The toll to pass over the bridge is 3 gold coins.\"","...", "\"Oh? You don't have 3 gold coins?\"", "\"Well... I'm sorry then, but you can't cross the bridge.\"", "o"],false,true);
var walkFifteen = new Room(15,blue,[startThreeFloor],[bridgeWall],[],[bridgeTroll],[""],[""],"rooms/roomimages/walk15.png");
walkFifteen.options = ["give the toll worker an IOU ->", "<- offer some other services instead ->", "<- challenge the toll worker to a game ->", "<- go home"];
walkFifteen.floor = "rooms/roomimages/walk15floor.png"

var bridgeTroll2 = new Sign(330,400,90,["","\"Hello!\"","\"So, Mimi told me you wanted to gamble for 3 gold coins.\"",
	"\"Well, ok but if I win you owe me 3 gold coins.\"","...", "\"Oh... You don't have three gold coins!?\"", "\"You just need to pass over the bridge?\"","\"Well, you know what? Don't even worry about it.\"", 
	"\"You can pay the toll later!\"","\"So what are you planning on doing on the other side of the bridge?\"","o"],false,true);

var achievementConversation = new Sign(600,400,30,["","hey!","you made it through an entire conversation!", "* Achievement Unlocked *", "s"],false,true);
var walkSixteen = new Room(16,blue,[startThreeFloor],[bridgeWall],[],[bridgeTroll2, achievementConversation],[""],[""],"rooms/roomimages/walk16.png");
walkSixteen.options = ["ummm... nothing much ->" , "<- painting ->", "<- oh sorry... i just remembered i have to go somewhere..."];
walkSixteen.floor = "rooms/roomimages/walk15floor.png"

var bridgeTroll3 = new Sign(330,400,90,["","\"Oh it’s you again.\"","\"Do you still need to cross the bridge?\"",
			"\"Well unfortunately my manager just showed up...\"", "\"And they aren’t exactly cool with the whole IOU thing...\"","\"So looks like I can’t let you across the bridge anymore.\"", "\"Sorry about that.\"", "\"I think you can get around the creek if you follow the path through the cemetery.\"", "\"Here's a spare key to open the gate.\"","* you got the cemetery key *", "s"],false,false);
var walkSeventeen = new Room(17,blue,[startThreeFloor],[bridgeWall],[],[bridgeTroll3],[""],[""],"rooms/roomimages/walk16.png");
walkSeventeen.floor = "rooms/roomimages/walk15floor.png"

var snowTurtle = new Wall(110,300,200,"#89ed21",false);
var obstacleEighteen = new Sign(70,400,40,["","it's a Giant Snow Turtle...","it's blocking the bridge...", "maybe there's another way around.", "s"],false,true);
var walkEighteen = new Room(18, blue,[startThreeFloor],[snowTurtle],[],[obstacleEighteen],[""],[""],"rooms/roomimages/walk18.png");
walkEighteen.floor = "rooms/roomimages/walk18floor.png"

startZero.roomRight = startOne;
startOne.roomLeft = startZero;

startTwo.roomRight = startThree;
startTwo.roomLeft = startFour;

startThree.roomLeft = startTwo;
startThree.roomRight = walkFive;
startFour.roomRight = startTwo;

walkFive.roomLeft = startThree;
walkFive.roomRight = walkSix;
walkSix.roomLeft = walkFive;
walkSix.roomRight = walkSeven;
walkSeven.roomLeft = walkSix;
walkSeven.roomRight = walkEight;
walkEight.roomLeft = walkSeven;
walkEight.roomRight = walkNine;
walkNine.roomLeft = walkEight;
walkNine.roomRight = walkTen;
walkTen.roomLeft = walkNine;
walkTen.roomRight = walkEleven;
walkEleven.roomLeft = walkTen;
walkEleven.roomRight = walkTwelve;
walkTwelve.roomLeft = walkEleven;
walkTwelve.roomRight = walkThirteen;
walkThirteen.roomLeft = walkTwelve;
walkThirteen.roomRight = walkFourteen;
walkFourteen.roomLeft = walkThirteen;
walkFourteen.roomRight = walkFifteen;
walkFifteen.roomLeft = walkFourteen;
walkSixteen.roomLeft = walkFourteen;
walkSeventeen.roomLeft = walkFourteen;
walkSixteen.roomRight = walkEighteen;
walkEighteen.roomLeft = walkSixteen;



