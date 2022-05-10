$(document).ready(() => {
  //Bouton commencer une nouvelle partie
  $( "#new-game" ).click(() => {
    //Instanciation permier joueur
    let playerOne = new Player("playerOne");
    //activation des boutons attaque et défense premier joueur
    playerOne.enableFight(playerOne)
    //Instanciation deuxième joueur
    let playerTwo = new Player("playerTwo");
    //activation des boutons attaque et défense deuxième joueur
    playerTwo.enableFight(playerTwo)
    //Tour du joueur 1
    playerOne.turn =true;

    let perso = [
        new Perso('Mage', 50),
        new Perso('Soigneur', 30),
        new Perso('Guerrier', 40),
        
    ];
    playerOne.perso = new Perso("Guerrier",20);
    playerTwo.perso = new Perso("Soigneur",40);

    console.log(playerOne, playerTwo);
    

  //Premier joueur appuie sur attack
  $( "#playerOne-attack" ).click(() => {
    playerOne.fight(playerTwo);
    playerOne.disableFight(playerOne);
  });

  //Premier joueur appuie sur défense
  $( "#playerOne-defend" ).click(() => {
    playerOne.fightingOption="defend";
    playerOne.fight(playerTwo);
    playerOne.disableFight(playerOne);
  });

  //Deuxième joueur appuie sur attack
  $( "#playerTwo-attack" ).click(() => {
    playerTwo.fight(playerOne);
    playerTwo.disableFight(playerTwo);
  });

 //Deuxième joueur appuie sur defend
  $( "#playerTwo-defend" ).click(() => {
    playerTwo.fightingOption="defend";
    playerTwo.fight(playerOne);
    playerTwo.disableFight(playerTwo);
  });
  
  });
});
