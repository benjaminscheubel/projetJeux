$(document).ready(() => {
  //button new game
  $( "#new-game" ).click(() => {
   
    let playerOne = new Player("playerOne");
    playerOne.enableFight(playerOne)
    //disableFight(playerOne);
   
    let playerTwo = new Player("playerTwo");
    playerTwo.enableFight(playerTwo)
    //disableFight(playerTwo);
    playerOne.turn =true;

    let perso = [
        new Perso('Mage', 50),
        new Perso('Soigneur', 30),
        new Perso('Guerrier', 40),
        
    ];
    playerOne.perso = new Perso("Guerrier",20);
    playerTwo.perso = new Perso("Soigneur",40);

    console.log(playerOne, playerTwo);
    

  // player 1 fighting panel
  //button attack for player 1
  $( "#playerOne-attack" ).click(() => {
    playerOne.fight(playerTwo);
    playerOne.disableFight(playerOne);
  });

  //button defend for player 1
  $( "#playerOne-defend" ).click(() => {
    playerOne.fightingOption="defend";
    playerOne.fight(playerTwo);
    playerOne.disableFight(playerOne);
  });

  // player2 fighting panel
  //button attack for player 2
  $( "#playerTwo-attack" ).click(() => {
    playerTwo.fight(playerOne);
    playerTwo.disableFight(playerTwo);
  });

  //button defend for player 2
  $( "#playerTwo-defend" ).click(() => {
    playerTwo.fightingOption="defend";
    playerTwo.fight(playerOne);
    playerTwo.disableFight(playerTwo);
  });
  
  });
});
