const endOneFloor = new Floor(0,448,0,0,700,"#77ff77",false);
const endFourFloor = new Floor(0,445,0,0,700,"#77ff77",false);

var endOne = new Room(57,blue,[endOneFloor],[],[],[],[""],[""],"rooms/roomimages/far9.png");
var endVines = new Sign(230,400,250,["","it's probably better not to mention these vines...", "they won't be able to see them ..."],false,false);
var endThree = new Room(59,blue,[endOneFloor],[],[],[endVines],[""],[""],"rooms/roomimages/far8.png");

endFourSign = new Sign(300,400,40,["","...","\"Um, this is a really nice bridge...\"", "seems like they're trying to have a conversation with you ...", "you should probably say something ...", "o"], false,true);
var endFour = new Room(60,blue,[endFourFloor],[],[],[endFourSign],[""],[""],"rooms/roomimages/end4.png");
endFour.options = ["yeah, i like it too - >", "<- a giant snow turtle was blocking it earlier"];
endFour.floor = "rooms/roomimages/walk18floor.png";

var endFive = new Room(61,blue,[endOneFloor],[],[],[],[""],[""],"rooms/roomimages/end5.png");
endFive.floor = "rooms/roomimages/end5floor.png";

endSixSign = new Sign(460,400,120,["","i guess it's probably better not to go to the cemetery right now ...", "their bike isn't in there."], false,false);
var endSix = new Room(62,blue,[endOneFloor],[],[],[endSixSign],[""],[""],"rooms/roomimages/walk14.png");

var endNine = new Room(65,blue,[endOneFloor],[],[],[],[""],[""],"rooms/roomimages/room5.png");

endTenSign = new Sign(500,400,30,["", "\"Woah, what's that?\"","...","... ...", "... ... ...", "o"],false,true);
var endTen = new Room(66,blue,[endOneFloor],[],[],[endTenSign],[""],[""],"rooms/roomimages/walk8.png");
endTen.options = ["pretend to not know what it is ->", "<- explain that it's your broken snow dragon"];

endEleven = new Sign(500,400,30,["", "\"Oh there's my bike!\"","\"wait... it looks like some rabbits are sleeping on it...\"","\"i'll have to come back later to get it...\"","...","... ...","... ... ...","\"hey, um thanks for coming out here with me to get it though.\"","\"are you ready to go paint now?\"","o"],false,true);
var endEleven = new Room(67,blue,[endOneFloor],[],[],[endEleven],[""],[""],"rooms/roomimages/end11.png");
endEleven.options = ["go paint ->", "<- go home"]


endOne.roomRight = farFourteen;
endOne.roomLeft = endThree;
endThree.roomRight = endOne;
endThree.roomLeft = endFour;
endFour.roomRight = endThree;
endFour.roomLeft = endFive;
endFive.roomRight = endFour;
endFive.roomLeft = endSix;
endSix.roomRight = endFive;
endSix.roomLeft = endNine;
endNine.roomRight = endSix;
endNine.roomLeft = endTen;
endTen.roomRight = endNine;
endTen.roomLeft = endEleven;
endEleven.roomRight = endTen;
