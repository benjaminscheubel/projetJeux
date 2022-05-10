class Player  {
  constructor(playerName) {
      //player properties
      this.name=playerName;
      this.score = 100;
      
      $('#' + this.name +'-score').html(this.score);
      this.initializePlayer();
  }
  
    fight = (nextPlayer) => {
      nextPlayer.enableFight()
      //set player fighting option to "attack"
      this.fightingOption="attack";
  
      //get the damage power of the player
      let damagePower = this.perso.damages;
  
      //check next player fighting option
      if(nextPlayer.fightingOption==="defend")
        damagePower = (this.perso.damages/2);//if the next player is defending, the damage is divided by 2
  
      if(nextPlayer.score - damagePower > 0)
        nextPlayer.score = nextPlayer.score - damagePower;
      else//if the next player has no score left, he lose
      {
        nextPlayer.score = 0
        if(nextPlayer.name == "playerTwo")
        $('#winner').html('Player 1');
        else
        $('#winner').html('Player 2');  
        //display celebration panel
        $('#CelebrationModal').modal('show');	
           
      }
      //if not a winner yet, display the scores
      $('#' + nextPlayer.name +'-score').html(nextPlayer.score);
      $('#' + nextPlayer.name +'-visualScore').css("width", nextPlayer.score + "%").attr("aria-valuenow", nextPlayer.score);
  
      //set next player fighting option to default ("attack")
      nextPlayer.fightingOption="attack";
      //switch players turn
      // this.disableFight();
      if(nextPlayer.score > 0) {
      // nextPlayer.enableFight();
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