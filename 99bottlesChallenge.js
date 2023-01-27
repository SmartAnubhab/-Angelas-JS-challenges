var bottles=99;

while(bottles>=0){
    var oneLessBottle=bottles-1;
    if(bottles === 0)
        bottles = "No more";
    if(oneLessBottle<0)
        oneLessBottle=99;
    console.log(bottles + " bottles of beer on the wall, " 
                + bottles 
                + " bottles of beer.\nTake one down and pass it around, " 
                + (oneLessBottle) + " bottle of beer on the wall.\n\n");
    bottles--;

}