class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exist()){
      playerCount = playerCountRef.val();
      player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }

play(){
form.hide();
textSize(30);
text("Game has Statted !!!",100,50);
Player.getPlayerInfo();

if(allPlayers !== undefined){
 var display_position = 130;
  for(var plr in allPlayers ){
    if(plr === "player" + playe+r.index){
    fill("red")
    }
    else{
    fill("black")

    }
  }
 display_position +=20;
 textSize(15);
 text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
}
}
}