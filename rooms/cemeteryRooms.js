var cemetaryWallOne = new Wall(50,300,200,"#89ed21",false);
var cemeteryOneSign = new Sign(50,400,30,["","do you want to leave the cemetery?", "o"],false,false);

var cemeteryOne = new Room(19,blue,[startThreeFloor],[cemetaryWallOne],[],[cemeteryOneSign],[""],[""],"rooms/roomimages/cemetery1.png");
cemeteryOne.options = ["leave cemetery ->", "<- stay in cemetery"];

var graveyardTree = new Sign(510,400,120, ["", "it's another imaginary tree."], false, false);
var tombstoneFour = new Sign(420,400,80,["", "it's a tombstone."],false,false);

var cemeteryTwo = new Room(20,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/cemetery2.png");
var cemeteryThree = new Room(21,blue,[startThreeFloor],[],[],[tombstoneFour, graveyardTree],[""],[""],"rooms/roomimages/cemetery3.png");

var cemeteryFour = new Room(22,blue,[startThreeFloor],[],[],[],[""],[""],"rooms/roomimages/cemetery4.png");

var ghostCrowd = new Sign(100,400,30,["","eeeeeeeeek!","it's so crowded.", "can you continue through the crowd?","o"],false,true);
var cemeteryFive = new Room(23,blue,[startThreeFloor],[],[],[ghostCrowd],[""],[""],"rooms/roomimages/cemetery7.png");
cemeteryFive.options = ["try to navigate through the crowd ->", "<- go home"];
cemeteryFive.floor = "rooms/roomimages/cemetery7floor.png";

var ghostOne = new Sign(100,400,30,["", "someone is in the way.", "o"],false,true);
var cemeterySix = new Room(24,blue,[startThreeFloor],[],[],[ghostOne],[""],[""],"rooms/roomimages/cemetery8.png");
cemeterySix.floor = "rooms/roomimages/cemetery8floor.png";
cemeterySix.misc = 200;
cemeterySix.options = ["wait for them to get out of the way ->", "<- ask them to move a little ->",  "<- try to go around them ->", "<- shove through them ->", "<- go home"];

var ghostTwo = new Sign(100,400,30,["", "it's really crowded here.", "you feel uncomfortable and claustrophobic.","s"],false,true);
var ghostThree = new Sign(200,400,30,["","someone is in the way","o"],false,true);

var cemeterySeven = new Room(25,blue,[startThreeFloor],[],[],[ghostThree, ghostTwo],[""],[""],"rooms/roomimages/cemetery9.png");
cemeterySeven.misc = 200;
cemeterySeven.options = ["wait for them to get out of the way ->", "<- ask them to move a little ->",  "<- try to go around them ->", "<- shove through them ->", "<- go home"];
cemeterySeven.floor = "rooms/roomimages/cemetery9floor.png";

var leaveCrowdOne = new Sign(100,400,30,["","there are so many people...","you feel really uncomfortable...", "maybe you can try going around the crowd?","o"],false,true);
var cemeteryEight = new Room(26,blue,[startThreeFloor],[],[],[ghostThree,leaveCrowdOne],[""],[""],"rooms/roomimages/cemetery10.png");
cemeteryEight.options = ["keep walking through crowd ->","<- try to find another way ->","<- go home"];
cemeteryEight.misc = 199;
cemeteryEight.floor = "rooms/roomimages/cemetery10floor.png";

var leaveCrowdTwo = new Sign(100,400,30,["","you feel like you're burning inside...", "your breathing quickens...","o"],false,true);
var cemeteryNine = new Room (27,blue,[startThreeFloor],[],[],[ghostThree,leaveCrowdTwo],[""],[""],"rooms/roomimages/cemetery11.png");
cemeteryNine.options = ["keep walking through crowd ->","<- try to find another way ->","<- go home"];
cemeteryNine.misc = 199;
cemeteryNine.floor = "rooms/roomimages/cemetery11floor.png";

var leaveCrowdThree = new Sign(100,400,30,["","you're starting to panic ...", "it's too much ...", "...","... ...","... ... ...","o"],false,true);
var leaveCrowdFour = new Sign(550,400,30,["","you can't go on.", "...", "... ...", "... ... ...", "... ... ... ...", "... ... ... ... ...", "s"],false,true);

var cemeteryTen = new Room (28,blue,[startThreeFloor],[],[],[ghostThree,leaveCrowdThree, leaveCrowdFour],[""],[""],"rooms/roomimages/cemetery12.png");
cemeteryTen.options = ["keep walking through crowd ->","<- try to find another way ->","<- go home"];
cemeteryTen.misc = 199;
cemeteryTen.floor = "rooms/roomimages/cemetery12floor.png";

cemeteryOne.roomRight = cemeteryTwo;
cemeteryTwo.roomLeft = cemeteryOne;
cemeteryTwo.roomRight = cemeteryThree;
cemeteryThree.roomLeft = cemeteryTwo;
cemeteryThree.roomRight = cemeteryFour
cemeteryFour.roomLeft = cemeteryThree;
cemeteryFour.roomRight = cemeteryFive;
cemeteryFive.roomLeft = cemeteryFour;
cemeteryFive.roomRight = cemeterySix;
cemeterySix.roomLeft = cemeteryFive;
cemeterySix.roomRight = cemeterySeven;
cemeterySeven.roomLeft = cemeterySix;
cemeterySeven.roomRight = cemeteryEight; 
cemeteryEight.roomLeft = cemeterySeven;
cemeteryEight.roomRight = cemeteryNine;
cemeteryNine.roomLeft = cemeteryEight;
cemeteryNine.roomRight = cemeteryTen;
cemeteryTen.roomLeft = cemeteryNine;

