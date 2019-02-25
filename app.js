var myGame = new SimonGame();

$(document).ready(function () {
  myGame.startGame();    
  $('button').click(function () {
    var colorInput   = $(this).attr("id");
    var currentColor = myGame.sequence[myGame.userClickCount];

    if (currentColor !== colorInput) {
      // game over
      myGame.gameOver();
      return;
    }

    myGame.userClickCount += 1;
    
    if (myGame.userClickCount === myGame.sequence.length) {
      alert('Sequence complete!');
      
      myGame.nextRound();
    }
  });
});




