var starImg,bgImg;
var star, starBody;
var fairy, fairyAni, fairyS;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAni = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairyS = loadSound("sound/JoyMusic.mp3")	
}

function setup() {
	createCanvas(800, 750);

	//to play song
	// fairyS.play();
	

   //to create fairy and star sprite
	fairy = createSprite(130,527);
	fairy.addAnimation("flying", fairyAni);
	fairy.scale = 0.26;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

//to create a matter.js world
	engine = Engine.create();
	world = engine.world;

	//to add the starBody to the world
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	// Engine.run(engine);

}


function draw() {

  Engine.update(engine);
  background(bgImg);

  //to make the star sprite have the same position as its soul
  star.x= starBody.position.x 
  star.y= starBody.position.y 


  // to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

//   keyPressed();
}

function keyPressed() {
//to make the star fall when down arrow is pressed
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

//to move fairy with arrow keys
	fairy.velocityX = 0;
	if(keyDown("RIGHT_ARROW")){
         fairy.velocityX = 3;
	}

	
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -3;
   }
	
}
