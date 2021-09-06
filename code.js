var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","16277792-5134-4ceb-ab00-1c7170d98e6f"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZRISq839fTr_rcaBAy.SZWYJR.tbnaj8","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"cxQxmjyZA6.TRbMdo_JksfpK9ViiE3R0","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"t9tYP1aCWgC60b5fyB0OECT3WOvTrnvi","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"xPQFuhMBuSgVb_VVP0znQPvMkL2z5BoC","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ESloiI7Qj7c9IC3BWpsNKX9w7xHD_a2j","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"16277792-5134-4ceb-ab00-1c7170d98e6f":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":3,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
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

//creating the backgroud ans setting animation
var scene = createSprite(0, 0, 400, 400);
scene.setAnimation("sunshine_showers_1");
scene.scale = "2";
scene.velocityX = "-2";

//creating the bow
var bow = createSprite(355, 200, 0, 0);
bow.setAnimation("bow");

//making the rows of balloons
for (var balloon = 50; balloon < 400; balloon=balloon+60) {
  var redBalloon = createSprite(40, balloon, 0, 0);
  redBalloon.setAnimation("red");
}

for (var b2 = 100; b2 < 350; b2=b2+60) {
  var greenBalloon = createSprite(100, b2, 0, 0);
  greenBalloon.setAnimation("green");
}

for (var b3 = 150; b3 < 300; b3=b3+60) {
  var blueBalloon = createSprite(160, b3, 0, 0);
  blueBalloon.setAnimation("blue");
}

for (var b4 = 200; b4 < 280;b4=b4+60) {
  var yellowBalloon = createSprite(220, b4, 0, 0);
  yellowBalloon.setAnimation("yellow");
}


  function draw() {
   //clearing the screen
   background("white");
   
   //making the screen move again and again 
  if (scene.x<0) {
    scene.x=scene.width/2;  
    }
    
   //making the bow move with the mouse
  bow.y= World.mouseY;
   //creating the sprites 
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
