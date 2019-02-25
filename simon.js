function SimonGame () {
  this.colors         = ["red", "green", "blue", "yellow"];
  this.sequence       = [];
  this.userClickCount = 0;
  this.round          = 1;
}

SimonGame.prototype.startGame = function () {
  this.addColor();
  this.showSequence();

};

// Generate the first sequence for the game

SimonGame.prototype.addColor = function () {
  var randomColor = Math.floor(Math.random() * 4);
  this.sequence.push(this.colors[randomColor]);
};
// Show the sequence to the user
SimonGame.prototype.showSequence = function () {
  var i = 0;
  var ourSequence = this.sequence;

  $("#buttons-container").addClass("blocked");

  var interval = setInterval(function(){
    if (!ourSequence[i]) {
      clearInterval(interval);
      $("#buttons-container").removeClass("blocked");
      return;
    }

    $("#" + ourSequence[i]).addClass("active");

    setTimeout(function(){
      $("button").removeClass("active");
    }, 700);

    i += 1;
  }, 1000);
};
// Assign the click event to the buttons

SimonGame.prototype.nextRound = function (){
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;
  this.round += 1;
  $("#counter").html(this.round);
};

SimonGame.prototype.gameOver = function (){
  alert("Game over!! Try it again!!");
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $("#counter").html("1");

  this.startGame();
}


