wwidth = window.innerWidth;
wheight = window.innerHeight;
var paper = Raphael(0, 0, wwidth, wheight);
for(var x=0; x>=0; x=x+10)
 paper.rect(x, 0, 1, wheight);
for(var y=0; y>=0; y=y+10)
 paper.rect(0, y, wwidth, 1);