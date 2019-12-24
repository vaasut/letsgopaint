var farOneCrowd = new Sign(100,400,30,["","it looks like the crowd disappeared...","s"],false,true);
var farOneSign = new Sign(330,400,70,["","Attention!","A giant snow turtle is sleeping by the bridge.", "Please do not disturb them!","- Starry Point Snow Turtle Protection Services"],false,false);
var farOne = new Room(43,blue,[startThreeFloor],[],[],[farOneCrowd, farOneSign],[""],[""],"rooms/roomimages/far3.png");

var farThreeSign = new Sign(100,400,30,["","you're not too far away...", "are you sure you still want to go painting?","o"],false,true);
var farThreePaintSet = new Sign(400,400,30,["","...","do you think maybe you should've brought your paint set?", "...","... ...","... ... ...","s"],false,true);
var farThree = new Room(45,blue,[startThreeFloor],[],[],[farThreeSign,farThreePaintSet],[""],[""],"rooms/roomimages/room5.png");
farThree.options = ["go painting ->", "<- go home"];

var farFourSign = new Sign(170,400,70,["","Today's Weather Report.", "Snowy and cold,", "but not too cold.","Expect snowflakes of varying sizes.","Mittens are advised.","-Starry Point Weather Team"],false,false);
var farWriter = new Sign(410,400,80,["","\"hi, i'm writing a book right now.\"","\"well actually, i'm taking a short break, but i'll get back to it soon...\"", "\"i'm just tired ...\""], false,false);
var farFour = new Room(46,blue,[startThreeFloor],[],[],[farFourSign,farWriter],[""],[""],"rooms/roomimages/far4.png");


var signPerson = new Sign(490,400,80,["","\"Hello there!\"", "\"Wish I could talk,\"", "\"but I'm here on important business putting up this sign!\"","...", "... ...", "\"After all, I'm Sign Person! Starry Point's Helpful Hero!\"","...","... ...","\"Placer of Signs!\"","...","... ...", "\"Informer of Passersby!\"","...","... ...","\"Placer of signs!\"", "\"Ok, bye!\""],false,false);
var farFive = new Room(47,blue,[startThreeFloor],[],[],[signPerson],[""],[""],"rooms/roomimages/far5.png");

var farSixPerson = new Sign(200,400,30,["","!!!!!", "someone from your class is over there!", "what should you do!?!?", "o"],false,true);
var farSix = new Room(48,blue,[startThreeFloor],[],[],[farSixPerson],[""],[""],"rooms/roomimages/far6.png");
farSix.options = ["pretend your busy ->", "<- hide behind that rock ->", "<- say hi ->", "<- go home"];

var farSevenSign = new Sign(200,400,30,["","that conversation was really exhausting...", "other people might want to talk to you while painting too...","it's going to be so exhausting...","...", "maybe you should just go home?", "o"],false,true);
var farSeven = new Room(49,blue,[startThreeFloor],[],[],[farSevenSign],[""],[""],"rooms/roomimages/room5.png");
farSeven.options = ["go painting ->", "<- go home"];

var farVines = new Sign(230,400,250,["","these vines manipulate the wind so that snow never falls right onto them."],false,false);
var farEight = new Room(50,blue,[startThreeFloor],[],[],[farVines],[""],[""],"rooms/roomimages/far8.png");
var farNine =  new Room(51,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/far12.png");
var farTenSign = new Sign(350,400,110,["","it's just an ordinary snowman ...","...","... ...","looks like you're almost there...","you start to feel warm and your heart beats more quickly.","s"],false,true);
var farTen = new Room(52,blue,[startThreeFloor],[],[],[farTenSign],[""],[""],"rooms/roomimages/far10.png");

var farThoughts = new Sign(100,400,30,["","it'll probably be uncomfortable...", "maybe you should just go home.", "o"],false,true);
var farEleven = new Room(53,blue,[startThreeFloor],[],[],[farThoughts],[""],[""],"rooms/roomimages/room5.png");
farEleven.options = ["go painting ->", "<- go home"];

var farThoughtsTwo = new Sign(500,400,30,["", "people will talk about things you're not interested in...","people will ask you about things you don't want to talk about...","o"],false,true);
var farTwelve = new Room(54,blue,[startThreeFloor],[],[],[farThoughtsTwo],[""],[""],"rooms/roomimages/far9.png");
farTwelve.options = ["go painting ->", "<- go home"];

var farThirteenSign = new Sign(130,400,140,["","\"Hey! You're coming to paint right?\"", "\"Awesome! So are you ready for some sweet painting action?\"", "o"],false,true);
var farThirteen = new Room(55,blue,[startThreeFloor],[],[],[farThirteenSign],[""],[""],"rooms/roomimages/far13.png");
farThirteen.options = ["tell them you're 'kind of tired' ->", "<- pretend to be excited"];

var farFourteenSign = new Sign(100,400,30,["","ok well, this is it.","just go inside that house to go painting...", "are you really sure you want to paint?", "o"],false,true);
var foundBike = new Sign(360,400,30,["","\"Hey! Thanks for finding my bike!\"","\"Yeah, that was my bike that you found!\"","\"I was really bummed when someone stole it...\"", "...","... ...", "\"Oh you found it as you were coming here to paint?\"","...","... ...", "\"Actually, I was going to go get it right now...\"", "...", "... ...","o"], false,true);
var farFourteenWall = new Wall(620,300,200,"#89ed21",false);
var farFourteen = new Room(56, blue,[startThreeFloor],[farFourteenWall],[],[farFourteenSign, foundBike],[""],[""],"rooms/roomimages/far14.png");
farFourteen.options = ["go painting ->", "<- go home"];

farOne.roomLeft = cemeteryTwo;
farOne.roomRight = farThree;
farThree.roomLeft = farOne;
farThree.roomRight = farFour;
farFour.roomLeft = farThree;
farFour.roomRight = farFive;
farFive.roomLeft = farFour;
farFive.roomRight = farSix;
farSix.roomLeft = farFive;
farSix.roomRight = farSeven;
farSeven.roomLeft = farSix;
farSeven.roomRight = farEight;
farEight.roomLeft = farSeven;
farEight.roomRight = farNine;
farNine.roomLeft = farEight;
farNine.roomRight = farTen;
farTen.roomLeft = farNine;
farTen.roomRight = farEleven;
farEleven.roomLeft = farTen;
farEleven.roomRight = farTwelve;
farTwelve.roomLeft = farEleven;
farTwelve.roomRight = farThirteen;
farThirteen.roomLeft = farTwelve;
farThirteen.roomRight = farFourteen;
farFourteen.roomLeft = farThirteen;
