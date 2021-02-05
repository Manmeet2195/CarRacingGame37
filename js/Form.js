class Form {

  constructor(){}

  display(){
      var title = createElement("h3");
      title.html("MultiPlayer Car Racing Game");
      title.position(70,100);

      var input = createInput("Player Name");
      input.position(100, 160);

      var button= createButton("Play");
      button.position(140,200);

      button.mousePressed(function(){
          input.hide();
          button.hide();

          var name = input.value();

          playerCount = playerCount + 1;
          player.update(name);
          player.updateCount(playerCount);

          var greeting = createElement("h4");
          greeting.html("Hello "+name);
          greeting.position(130,160);



      });
  }

}