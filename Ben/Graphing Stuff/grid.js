wwidth = window.innerWidth;
wheight = window.innerHeight;
var paper = Raphael(0, 0, wwidth, wheight);
for(var x=0; x>=0; x=x+10)
 paper.path("M"+x.toString()+", 0"+"V"+wheight.toString());
for(var y=0; y>=0; y=y+10)
 paper.path("M0,"+y.toString()+"H"+wwidth.toString());