class Form{

constructor() {
     this.input = createInput("").attribute("placeholder", "Enter your name");
     this.button = createButton("PLAY");
     this.greeting = createElement("h1");
}

  setElementsPosition() {

   this.input.position(width/2 - 100, height/2);
   this.button.position(width/2 - 50, height/2 + 100);
   this.greeting.position(width/2 -200, height/2 - 50);
   
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.button.class("customButton");
    this.greeting.class("greeting");
  }
 hide () {
    
   this.button.hide();
   this.input.hide();
   this.greeting.hide();
 }

 handleMousePressed() {

   this.button.mousePressed(()=> {

      this.input.hide();
      this.button.hide();
    
      
      var message = `
      Hello ${this.input.value()}
 </br>wait for another player to join...`;
    this.greeting.html(message);

      
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount
     // player.update(name);
      player.updateCount(playerCount);
          

     })
 }

 display() {    
  background(backgroundImage);
  this.setElementsPosition();
  this.handleMousePressed(); 
  this.setElementsStyle();
}

}
