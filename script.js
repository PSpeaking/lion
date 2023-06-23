function checkAnswer() {
  var selectedAnswer = document.querySelector('input[name="answer"]:checked');
  var userAnswer = selectedAnswer ? selectedAnswer.value : '';

  if (userAnswer === 'a conformist in') {
    document.getElementById('feedback').innerHTML = 'Yes, this would be the closest of the options available in conveying the intended meaning';
  } else {
    document.getElementById('feedback').innerHTML = 'Nope! This answer is eith totally wrong or just not the best option.';
  }
}
