class Player  {

  constructor(playerName) {

      this.name=playerName;
      this.score = 100;
      $('#' + this.name +'-score').html(this.score);
      this.initializePlayer();

  }
  
    fight = (nextPlayer) => {
      //Activation du des boutons pour le prochain joueur
      nextPlayer.enableFight()
      
      this.fightingOption="attack";
  
      //reçoit les dommages
      let damagePower = this.perso.damages;
  
      //Mode de jeux 
      if(nextPlayer.fightingOption==="defend")
        damagePower = (this.perso.damages/2);//if the next player is defending, the damage is divided by 2
  
      if(nextPlayer.score - damagePower > 0)
      //Retrait du nombres de dommages au score
        nextPlayer.score = nextPlayer.score - damagePower;
      else
      //Si le score est à 0 alors perdu
      {
        nextPlayer.score = 0
        if(nextPlayer.name == "playerTwo")
        $('#winner').html('Player 1');
        else
        $('#winner').html('Player 2');  
        //Gagné 
        $('#CelebrationModal').modal('show');	
           
      }
      //if not a winner yet, display the scores
      $('#' + nextPlayer.name +'-score').html(nextPlayer.score);
      $('#' + nextPlayer.name +'-visualScore').css("width", nextPlayer.score + "%").attr("aria-valuenow", nextPlayer.score);
  
      
      nextPlayer.fightingOption="attack";
     
      if(nextPlayer.score > 0) {
      nextPlayer.enableFight();
      }
  }
  
  //enable fighting buttons
  enableFight = () => {
    $("#"+this.name+"-attack").attr("disabled", false);	
    $("#"+this.name+"-defend").attr("disabled", false);
    $("#"+this.name+"-attack").removeClass("disabled");	
    $("#"+this.name+"-defend").removeClass("disabled");	
  }
  
  //disable fighting buttons
  disableFight = () => {
    $("#"+this.name+"-attack").attr("disabled", true);	
    $("#"+this.name+"-defend").attr("disabled", true);	
    $("#"+this.name+"-attack").addClass("disabled");	
    $("#"+this.name+"-defend").addClass("disabled");	
  }
  
  initializePlayer = () => {
    $('#' + this.name +'-score').html(this.score);
    $('#' + this.name +'-visualScore').css("width", this.score + "%").attr("aria-valuenow", this.score);
    
    
    $("#"+this.name+"-attack").attr("disabled", true);	
    $("#"+this.name+"-defend").attr("disabled", true);	
    $("#"+this.name+"-attack").addClass("disabled");	
    $("#"+this.name+"-defend").addClass("disabled");
  }
      }