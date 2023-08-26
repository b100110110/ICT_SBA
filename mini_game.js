class MUSIC_STATE {
  static ON = 'ON';
  static OFF = 'OFF';
}

let musicState = MUSIC_STATE.ON;
const QUESTION_BANK = [
  ["adhvbhabdvadmvbb", "1", "2", "3", "4", 3],
  ["akjbfkjadv", "1", "2", "3", "4", 3],
  ["akjbfkjadv", "1", "2", "3", "4", 3],
  ["akjbfkjadv", "1", "2", "3", "4", 3],
  ["akjbfkjadv", "1", "2", "3", "4", 3],
]
let currentQuestion = 0;
let numberOfCorrectAnswer = 0;
let numberOfWrongAnswer = 0;
const MAX_QUESTIONS = QUESTION_BANK.length;
let animating = false;


function handleQuestionUpdate(userChoice) {
  if (animating) return;
  animating = true;

  currentQuestion++;
  switch (currentQuestion) {
    case 1:
      const question = QUESTION_BANK[currentQuestion - 1]
      $("#question").text(question[0]);
      $("#choice-0").text(question[1]);
      $("#choice-1").text(question[2]);
      $("#choice-2").text(question[3]);
      $("#choice-3").text(question[4]);
      $("#answer").text("---");
      $("#answer").addClass("opacity-0");
      animating = false;
      break;
    case MAX_QUESTIONS + 1: {
      const lastQuestion = QUESTION_BANK[currentQuestion - 1 - 1];
      const pickedCorrectAnswer = (userChoice == lastQuestion[5]);
      let addedTextColor = '';
      if (pickedCorrectAnswer) {
        numberOfCorrectAnswer++;
        addedTextColor = "text-lime-600";

        $("#answer").text("ans is correct");
        $("#answer").addClass(addedTextColor);
      } else {
        numberOfWrongAnswer++;
        addedTextColor = "text-rose-600";

        $("#answer").text("ans is " + lastQuestion[5]);
        $("#answer").addClass(addedTextColor);
      }
      $("#answer").addClass("opacity-100");
      setTimeout(() => {
        $("#game-body").addClass("hidden");
        $("#game-end-cover").removeClass("hidden");
      }, 2000)
      $("#num-correct-answer").text(numberOfCorrectAnswer)
      $("#num-wrong-answer").text(numberOfWrongAnswer)
    } break;
    default:
      const lastQuestion = QUESTION_BANK[currentQuestion - 1 - 1];
      const pickedCorrectAnswer = (userChoice == lastQuestion[5]);
      let addedTextColor = '';
      if (pickedCorrectAnswer) {
        numberOfCorrectAnswer++;
        addedTextColor = "text-lime-600";

        $("#answer").text("ans is correct");
        $("#answer").addClass(addedTextColor);
      } else {
        numberOfWrongAnswer++;
        addedTextColor = "text-rose-600";

        $("#answer").text("ans is " + lastQuestion[5]);
        $("#answer").addClass(addedTextColor);
      }
      $("#answer").addClass("opacity-100");
      setTimeout(() => {
        $('#game-body').fadeOut(500, () => {

          const question = QUESTION_BANK[currentQuestion - 1]
          $("#question").text(question[0]);
          $("#choice-0").text(question[1]);
          $("#choice-1").text(question[2]);
          $("#choice-2").text(question[3]);
          $("#choice-3").text(question[4]);

          $("#answer").text("---");
          $("#answer").removeClass(addedTextColor);
          $("#answer").removeClass("opacity-100");
          $("#answer").addClass("opacity-0");
          $('#game-body').fadeIn(500, () => animating = false);
        });
      }, 1000);
      break;

  }
}

$("#volume-on-button").click(() => {

})

$("#volume-off-button").click(() => {

})

const choiceClickedHandler = (choiceIndex) => {
  $('#game-body').fadeOut(500, () => {
    $('#game-body').fadeIn(500);
  });
}

function gameStart() {
  $("#game-cover").fadeOut(300, () => {
    $("#game-cover").addClass("hidden");
    $("#game-body").removeClass("hidden");
    handleQuestionUpdate(null);
  });
}

$("#game-cover").click(gameStart);

$("#choice-0").click(() => handleQuestionUpdate(1));
$("#choice-1").click(() => handleQuestionUpdate(2));
$("#choice-2").click(() => handleQuestionUpdate(3));
$("#choice-3").click(() => handleQuestionUpdate(4));