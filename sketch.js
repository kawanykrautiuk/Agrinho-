function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#03A9F4");
  if (mouseIsPressed){
    console.log (mouseX, mouseY)
  }
  cenario ();
  
  
  
}
// cenario
function cenario (){
fill("#8BC34A"); 
rect(0,245,400,160); //gramado
fill("yellow");
circle(340,49,70); //sol
fill("grey");
rect(20,98,90,147); //prédio
rect(120,140,67,105); //prédio
rect(200,75,46,170); //prédio
rect(260,105,68,140); //prédio
rect(345,155,40,90); //prédio
fill("#565454");
rect(28,108,75,30); //janela
rect(28,150,30,86); //janela
rect(70,150,30,35); //janela
rect(70,201,30,35); //janela
rect(130,150,46,20); //janela
rect(130,180,46,20); //janela
rect(130,210,46,20); //janela
rect(208,84,30,20); //janela
rect(208,113,30,20); //janela
rect(208,142,30,20); //janela
rect(208,171,30,20); //janela
rect(208,201,30,20); //janela
rect(208,230,30,15); //janela
rect(265,113,25,25); //janela
rect(297,113,25,25); //janela
rect(265,145,25,25); //janela
rect(297,145,25,25); //janela
rect(265,177,25,25); //janela
rect(297,177,25,25); //janela
rect(265,209,25,25); //janela
rect(297,209,25,25); //janela
rect(350,160,30,13); //janela
rect(350,178,30,13); //janela
rect(350,196,30,13); //janela
rect(350,214,30,13); //janela
rect(350,232,30,11); //janela
fill("#75A53E");
circle(20,240,40); //arbustos
circle(50,240,40); //arbustos
circle(80,240,40); //arbustos
circle(110,240,40); //arbustos
circle(140,240,40); //arbustos
circle(170,240,40); //arbustos
circle(200,240,40); //arbustos
circle(230,240,40); //arbustos
circle(260,240,40); //arbustos
circle(290,240,40); //arbustos
circle(320,240,40); //arbustos
circle(350,240,40); //arbustos
circle(380,240,40); //arbustos
fill("#FF1100");
circle(22,239,5); //frutas/flores dos arbustos
circle(30,228,5); //frutas/flores dos arbustos
circle(17,250,5); //frutas/flores dos arbustos
circle(9,235,5); //frutas/flores dos arbustos
circle(50,240,5); //frutas/flores dos arbustos
circle(42,250,5); //frutas/flores dos arbustos
circle(41,230,5); //frutas/flores dos arbustos
circle(58,228,5); //frutas/flores dos arbustos
circle(58,250,5); //frutas/flores dos arbustos
circle(70,234,5); //frutas/flores dos arbustos
circle(78,247,5); //frutas/flores dos arbustos
circle(84,231,5); //frutas/flores dos arbustos
circle(98,241,5); //frutas/flores dos arbustos
circle(108,252,5); //frutas/flores dos arbustos
circle(112,239,5); //frutas/flores dos arbustos
circle(105,228,5); //frutas/flores dos arbustos
circle(130,240,5); //frutas/flores dos arbustos
circle(140,250,5); //frutas/flores dos arbustos
circle(142,230,5); //frutas/flores dos arbustos
circle(170,240,5); //frutas/flores dos arbustos
circle(160,250,5); //frutas/flores dos arbustos
circle(160,230,5); //frutas/flores dos arbustos
circle(177,230,5); //frutas/flores dos arbustos
circle(190,240,5); //frutas/flores dos arbustos
circle(205,250,5); //frutas/flores dos arbustos
circle(204,230,5); //frutas/flores dos arbustos
circle(230,240,5); //frutas/flores dos arbustos
circle(235,230,5); //frutas/flores dos arbustos
circle(225,250,5); //frutas/flores dos arbustos
circle(222,235,5); //frutas/flores dos arbustos
circle(263,240,5); //frutas/flores dos arbustos
circle(255,250,5); //frutas/flores dos arbustos
circle(253,230,5); //frutas/flores dos arbustos
circle(285,249,5); //frutas/flores dos arbustos
circle(294,238,5); //frutas/flores dos arbustos
circle(286,230,5); //frutas/flores dos arbustos
circle(312,240,5); //frutas/flores dos arbustos
circle(323,250,5); //frutas/flores dos arbustos
circle(326,238,5); //frutas/flores dos arbustos
circle(320,227,5); //frutas/flores dos arbustos
circle(350,250,5); //frutas/flores dos arbustos
circle(337,240,5); //frutas/flores dos arbustos
circle(352,239,5); //frutas/flores dos arbustos
circle(349,228,5); //frutas/flores dos arbustos
circle(370,250,5); //frutas/flores dos arbustos
circle(377,240,5); //frutas/flores dos arbustos
circle(387,246,5); //frutas/flores dos arbustos
circle(389,232,5); //frutas/flores dos arbustos
circle(373,231,5); //frutas/flores dos arbustos
fill("#8B6658");
triangle(115,400,195,204,284,400); //caminho de terra
fill("rgb(248,248,153)");
rect(143,198,107,65); //casa
fill("#392A24");
triangle(130,203,203,203,167,176); //telhado
triangle(263,203,203,203,226,176); //telhado
rect(166,176,60,27); //telhado
fill("#4A3026");
rect(184,232,23,30); //porta da casa
fill("#A2E4EC");
rect(151,213,25,40); //janela da casa
rect(215,213,25,40); //janela da casa
circle(195,215,15); //janela da casa
fill("rgb(0,0,0)");
circle(188,248,5); //fechadura da porta
fill("#1793F6");
ellipse(380,304,190,50); //lago
textSize(20);
text("🦆",300,300); //patos
text("🦆",340,290); //patos
text("🦆",333,315); //patos
text("🦆",370,300); //patos
text("🐓",30,300); //galo
text("🐓",100,309); //galo
text("🐓",70,330); //galo
text("🐓",65,363); //galo
text("🐓",14,276); //galo
text("🐓",110,340); //galo
text("🐓",90,380); //galo
text("🐥",330,380); //pintinho
text("🐥",370,355); //pintinho
text("🐥",257,283); //pintinho
text("🐥",262,316); //pintinho
text("🐥",303,370); //pintinho
text("🐥",345,344); //pintinho
text("🐥",281,344); //pintinho
text("🐥",374,383); //pintinho
text("🐥",323,340); //pintinho
fill("#795548");
rect(65,210,16,70); //tronco árvore
rect(300,200,16,70); //tronco árvore
rect(30,330,16,60); //tronco árvore
fill("#328836");
circle(73,200,70); //árvore
circle(38,312,63); //árvore
circle(308,190,70); //árvore
fill("#851C97");
circle(58,179,7); //"frutas" nas árvores
circle(70,195,7); //"frutas" nas árvores
circle(50,201,7); //"frutas" nas árvores
circle(50,201,7); //"frutas" nas árvores
circle(65,215,7); //"frutas" nas árvores
circle(86,177,7); //"frutas" nas árvores
circle(90,215,7); //"frutas" nas árvores
circle(93,194,7); //"frutas" nas árvores
fill("rgb(243,243,67)");
circle(306,166,7); //"frutas" nas árvores
circle(328,179,7); //"frutas" nas árvores
circle(288,179,7); //"frutas" nas árvores
circle(309,183,7); //"frutas" nas árvores
circle(294,195,7); //"frutas" nas árvores
circle(321,197,7); //"frutas" nas árvores
circle(306,208,7); //"frutas" nas árvores
fill("#ED981B");
circle(24,294,7); //"frutas" nas árvores
circle(16,309,7); //"frutas" nas árvores
circle(37,307,7); //"frutas" nas árvores
circle(51,293,7); //"frutas" nas árvores
circle(57,312,7); //"frutas" nas árvores
circle(24,321,7); //"frutas" nas árvores
circle(44,328,7); //"frutas" nas árvores
textSize(50);
text("☁️",45,50); //nuvem
text("☁️",140,80); //nuvem
text("☁️",230,50); //nuvem
text("☁️",327,130); //nuvem
  
}
