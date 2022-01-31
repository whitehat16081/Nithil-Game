var canvas, backgroundImage, titleImage

var database;
var form, game, player, playerCount;
 
var gameState = 0;
var playercount;

var button, buttonImage;

var forestImage , forest;

var lion, lionImage, rabbit, rabbitImage, elephant, elephantImage;

var allPlayers ;

var players = [];

function preload() {
 backgroundImage = loadImage("./images/background.jpg");
 buttonImage = loadImage("./images/playButton.png");
 forestImage = loadImage("./images/background.png");
 lionImage = loadImage("./images/lion.jpg");
 rabbitImage = loadImage("./images/rabbit.png");

}

function setup() {

canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();

game = new Game();
game.getState();
game.start();


}


function draw() {
 // background(backgroundImage);

  

  if(playerCount === 2) {

    game.update(1);
  }

  if(gameState === 1) {

    game.play();
  }
  

}

