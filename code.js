var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","a512c8f9-5be0-4fe4-9243-f848b654424a","bb756daf-eda3-476b-bb0a-13bcbe10999c","08a51d4e-0bce-489e-8127-7f8a8c1e36c5","248d21fb-02e2-4fad-9b93-46e6b20cda38"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"cave","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"AUFeEqNP_PhUo7G3bsw2ZrD5I6Vpe7dV","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"a512c8f9-5be0-4fe4-9243-f848b654424a":{"name":"alien","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lc5n1ArjqS2_eGZgp92e7D85qUcwnUhq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/a512c8f9-5be0-4fe4-9243-f848b654424a.png"},"bb756daf-eda3-476b-bb0a-13bcbe10999c":{"name":"danger","sourceUrl":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png","frameSize":{"x":260,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png"},"08a51d4e-0bce-489e-8127-7f8a8c1e36c5":{"name":"evil","sourceUrl":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png","frameSize":{"x":191,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png"},"248d21fb-02e2-4fad-9b93-46e6b20cda38":{"name":"ship","sourceUrl":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cave = createSprite(200,200);
 cave.setAnimation("cave");
var alien = createSprite(20,375);
alien.setAnimation("alien");
alien.scale=0.1;

var ship = createSprite(220,200);
ship.setAnimation("ship");
ship.scale=0.2;


var stone1 = createSprite(125,300,10,10);
stone1.shapeColor=("red");
var stone2 = createSprite(225,380,10,10);
stone2.shapeColor=("red");
var stone3 = createSprite(325,25,25,5);
stone3.shapeColor=("red");
var stone4 = createSprite(375,375,25,5);
stone4.shapeColor=("red");
var stone5 = createSprite(250,25,5,50);
stone5.shapeColor=("red");
var stone6 = createSprite(240,25,5,50);
stone6.shapeColor=("red");
var stone7 = createSprite(180,75,5,50);
stone7.shapeColor=("red");
var stone8 = createSprite(170,75,5,50);
stone8.shapeColor=("red");
var stone9 = createSprite(100,25,5,50);
stone9.shapeColor=("red");
var stone10 = createSprite(90,25,5,50);
stone10.shapeColor=("red");
var stone11 = createSprite(100,150,10,10);
stone11.shapeColor=("red");
var stone12 = createSprite(150,250,10,10);
stone12.shapeColor=("red");


var wall = createSprite(20,345,55,5);
wall.shapeColor=("yellow");
var wall1 = createSprite(200,397,400,5);
wall1.shapeColor=("yellow");
var wall2 = createSprite(75,345,55,5);
wall2.shapeColor=("yellow");
var wall3 = createSprite(100,317,5,60);
wall3.shapeColor=("yellow");
var wall4 = createSprite(125,290,55,5);
wall4.shapeColor=("yellow");
var wall5 = createSprite(150,317,5,60);
wall5.shapeColor=("yellow");
var wall6 = createSprite(175,345,55,5);
wall6.shapeColor=("yellow");
var wall7 = createSprite(200,317,5,55);
wall7.shapeColor=("yellow");
var wall8 = createSprite(225,290,55,5);
wall8.shapeColor=("yellow");
var wall9 = createSprite(250,317,5,55);
wall9.shapeColor=("yellow");
var wall10 = createSprite(275,345,55,5);
wall10.shapeColor=("yellow");
var wall11 = createSprite(300,222,5,250);
wall11.shapeColor=("yellow");
var wall12 = createSprite(398,200,5,400);
wall12.shapeColor=("yellow");
var wall13 = createSprite(200,3,400,5);
wall13.shapeColor=("yellow");
var wall14 = createSprite(175,100,250,5);
wall14.shapeColor=("yellow");
var wall15 = createSprite(2,150,5,300);
wall15.shapeColor=("yellow");
var wall16 = createSprite(53,125,5,50);
wall16.shapeColor=("yellow");
var wall17 = createSprite(25,300,50,5);
wall17.shapeColor=("yellow");
var wall18 = createSprite(50,277,5,50);
wall18.shapeColor=("yellow");
var wall19 = createSprite(60,150,20,5);
wall19.shapeColor=("yellow");
var wall20 = createSprite( 58,253,20,5);
wall20.shapeColor=("yellow");
var wall21 = createSprite(67,267,5,30);
wall21.shapeColor=("yellow");
var wall22= createSprite(68,137,5,30);
wall22.shapeColor=("yellow");
var wall23 = createSprite(165, 123,200,5);
wall23.shapeColor=("yellow");
var wall24 = createSprite(165,284,200,5);
wall24.shapeColor=("yellow");
var wall25 = createSprite(265, 203,5,165);
wall25.shapeColor=("yellow");

stone1.velocityX=0;
stone1.velocityY=2;
stone1.setAnimation("danger");
stone1.scale=0.1;
stone2.velocityX=0;
stone2.velocityY=-2;
stone2.setAnimation("danger");
stone2.scale=0.1;
stone3.velocityX=0;
stone3.velocityY=6;
stone3.setAnimation("evil");
stone3.scale=0.2;
stone4.velocityX=0;
stone4.velocityY=6;
stone4.setAnimation("evil");
stone4.scale=0.2;
stone11.velocityX=0;
stone11.velocityY=5;
stone11.setAnimation("danger");
stone11.scale=0.1;
stone12.velocityX=0;
stone12.velocityY=-5;
stone12.setAnimation("danger");
stone12.scale=0.1;


playSound("assets/mario.mp3", true);


function draw() {
background("red");
    createEdgeSprites();
   
     alien.velocityX= 0;
     alien.velocityY= 0;
   
    alien.bounceOff(wall);
    alien.bounceOff(wall1);
    alien.bounceOff(edges);
     alien.bounceOff(wall2);
     alien.bounceOff(wall3);
     alien.bounceOff(wall4);
     alien.bounceOff(wall5);
     alien.bounceOff(wall6);
     alien.bounceOff(wall7);
     alien.bounceOff(wall8);
     alien.bounceOff(wall9);
     alien.bounceOff(wall10);
     alien.bounceOff(wall11);
     alien.bounceOff(wall12);
     alien.bounceOff(wall13);
     alien.bounceOff(wall14);
     alien.bounceOff(wall15);
     alien.bounceOff(wall16);
     alien.bounceOff(wall17);
     alien.bounceOff(wall18);
     alien.bounceOff(wall19);
     alien.bounceOff(wall20);
     alien.bounceOff(wall21);
     alien.bounceOff(wall22);
     alien.bounceOff(wall23);
     alien.bounceOff(wall24);
     alien.bounceOff(wall25);
     
     stone1.bounceOff(wall1);
     stone1.bounceOff(wall4);
     stone1.bounceOff(wall1);
     stone1.bounceOff(wall8);
     stone2.bounceOff(wall1);
     stone2.bounceOff(wall8);
     stone3.bounceOff(edges);
     stone3.bounceOff(wall1);
     stone4.bounceOff(wall1);
     stone4.bounceOff(edges);
     stone11.bounceOff(wall23);
     stone11.bounceOff(wall24);
      stone12.bounceOff(wall23);
     stone12.bounceOff(wall24);

    fill("yellow");
    if (keyDown("up")) {
    alien.velocityX=0;
    alien.velocityY=-5;
    }
    
    if (keyDown("down")) {
  alien.velocityX=0;
  alien.velocityY=5;
    }
    
    if (keyDown("left")) {
    alien.velocityX=-5;
    alien.velocityY=0;
    }
    
    if (keyDown("right")) {
    alien.velocityX=5;
    alien.velocityY=0;
    }
    
    if (alien.isTouching(ship)) {
      fill("yellow");
      textSize(20);
      text("YAY!",120,200);
     alien.velocityX= 0;
     alien.velocityY= 0;
     stone1.velocityX=0;
stone1.velocityY=0;
stone2.velocityX=0;
stone2.velocityY=0;
stone3.velocityX=0;
stone3.velocityY=0;
stone4.velocityX=0;
stone4.velocityY=0;
stone11.velocityX=0;
stone11.velocityY=0;
stone12.velocityX=0;
stone12.velocityY=0;
    }
    
    
    
  if (alien.isTouching(stone1) || alien.isTouching(stone2) || alien.isTouching(stone3) || alien.isTouching(stone4) || alien.isTouching(stone5) || alien.isTouching(stone6) || alien.isTouching(stone7) || alien.isTouching(stone8) || alien.isTouching(stone9) || alien.isTouching(stone10) || alien.isTouching(stone11) || alien.isTouching(stone12) ) {
     alien.x=20;
     alien.y=375;
     deathCount=deathCount+1;
      
   }
   
drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
