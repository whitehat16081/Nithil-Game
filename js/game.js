class Game {

    constructor(){
        this.resetButton = createButton("");
        this.resetButton.position(width/2 + 500, height/2 - 400);
        //Lion Button
        this.lionButton = createButton("CLICK TO START QUIZ");
        this.lionButton.position(width/2 - 800 , height/2 - 50);
        this.lionButton.class("gameCustomButton");
        //lion close button
        this.lionClosebutton = createButton("CLICK TO CLOSE QUIZ");
        this.lionClosebutton.position(width/2 - 800, height/2- 20);
        
        //Question 1
        this.question = createElement("h1");
        //Option for question 1
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.input1 = createInput("");
        //lioncheck button
        this.LionQuizOkButton = createButton("Ok");
        //RabbitButton
        this.rabbitButton = createButton("CLICK TO START QUIZ");
        this.rabbitButton.position(width/2 + 600, height/2 - 50);
        
        //rabbitclosebutton
        this.rabbitCloseButton = createButton("CLICK TO CLOSE QUIZ");
        this.rabbitCloseButton.position(width/2 + 600, height/2 - 20);
       
        //question 2
        this.question2 = createElement("h1");
        //option for question 2
        this.option5 = createElement("h2");
        this.option6 = createElement("h2");
        this.option7 = createElement("h2");
        this.option8 = createElement("h2");
        this.input2 = createInput("");
        //rabbitCheck button
        this.rabbitQuizOkButton = createButton("OK");
    }

    getState() {

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state) {

        database.ref("/").update({

            gameState : state
        })
    }
    

    start() {
     
    player = new Player();
    playerCount = player.getCount();


    form = new Form();
    form.display();
       
    lion = createSprite(width/2 - 700 , height/2- 250);
    lion.addImage("lion",lionImage);  
    lion.scale = 0.5;

    rabbit = createSprite(width/2 + 700 , height/2 -250);
    rabbit.addImage("rabbit", rabbitImage);
    rabbit.scale = 0.5;

    



    }

   play() {

   // image(forestImage , 0, -height * 5, width, height * 6);
    drawSprites();
    
    this.handleElements();
    this.handleResetButton();
    Player.getPlayersInfo();
    

   //track image
    //image(forestImage , 0, -height * 5, width, height * 6);
   
    //LION BUTTON
    this.lionButton.mousePressed(()=>{
    
       this.handleLionQuiz();
       this.lionButton.hide();
    })

    this.lionClosebutton.mousePressed(()=> {

        this.handleHideLionQuiz();
        this.lionClosebutton.hide()
    })

     //RABBIT BUTTON
     this.rabbitButton.mouseClicked(()=>{

       this.handleRabbitQuestions();
       this.rabbitButton.hide();

    })  
  
    this.rabbitCloseButton.mousePressed(()=>{

        this.handleHideRabbitQuiz();
        this.rabbitCloseButton.hide();
     
      })

      this.LionQuizOkButton.mousePressed(()=> {
        this.handleLionOkButton();
      })

}

handleLionQuiz() {

    this.question.html("How many Teeth does An Adult Lion have? ");
    this.question.position(width/2 - 200, height/2 - 200);
    this.option1.html("1] 28");
    this.option2.html("2] 30");
    this.option3.html("3] 27");
    this.option4.html("4] 31");

    this.option1.position(width/2 - 150,height/2 - 120);
    this.option2.position(width/2 - 150,height/2 - 100);
    this.option3.position(width/2 - 150,height/2 - 80);
    this.option4.position(width/2 - 150,height/2 - 60);

    this.input1.position(width/2 - 150, height/2 - 10);
    this.LionQuizOkButton.position(width/2 - 100 , height/2 + 20);
}

handleHideLionQuiz() {

    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.input1.hide();
    this.LionQuizOkButton.hide();
}

handleRabbitQuestions() {

    this.question2.html("How is a Female Rabbit called?");
    this.question2.position(width/2 - 200,  height/2 -200);
    this.option5.html("1] buck");
    this.option6.html("2] doe");
    this.option7.html("3] calf");
    this.option8.html("4] cub");    

    this.option5.position(width/2 - 150, height/2 - 120 );
    this.option6.position(width/2 - 150, height/2 - 100);
    this.option7.position(width/2 - 150, height/2 - 80);
    this.option8.position(width/2 - 150, height/2 - 60);

    this.input2.position(width/2 - 150, height/2 - 10)
    this.rabbitQuizOkButton.position(width/2 - 100 , height/2 +20);
}

handleHideRabbitQuiz() {

    this.question2.hide();
    this.option5.hide();
    this.option6.hide();
    this.option7.hide();
    this.option8.hide();
    this.input2.hide();
    this.rabbitQuizOkButton.hide();
}

handleResetButton() {

   this.resetButton.mousePressed(() =>{
    
    game.start();
    this.question.hide();
    this.option1.hide();
    this.option2.hide(); 
    this.option3.hide(); 
    this.option4.hide();  
    this.input1.hide();
    this.lionButton.hide();
    

    database.ref("/").set({

        playerCount : 0,
        gameState : 0,
        players : {}
    })
   })
}

handleElements()  {
    
    form.hide();
    this.resetButton.class("resetButton");

}

handleLionOkButton() {

    var correctAns = 2
    var correctOption = 30

        if(this.input1.value() == correctAns || this.input1.value() == correctOption) {
            
        fill("green")
        text("THE ANSWER IS CORRECT", 500 , 500);
        }

        else{
         fill("red")
            text("THE ANSWER IS INCORRECT", 500,500);
        }
      
    }
 }
  

