class MUSIC_STATE {
  static ON = 'ON';
  static OFF = 'OFF';
}

let musicState = MUSIC_STATE.ON;

$("#volume-on-button").click(() => {

})

$("#volume-off-button").click(() => {
  
})

const choiceClickedHandler = (choiceIndex) => {
  $('#game-body').fadeOut(500, () => {
    $('#game-body').fadeIn(500);
  });
}

$("#choice-0").click(() => choiceClickedHandler(0));
$("#choice-1").click(() => choiceClickedHandler(1));
$("#choice-2").click(() => choiceClickedHandler(2));
$("#choice-3").click(() => choiceClickedHandler(3));




