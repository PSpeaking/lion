function checkAnswer() {
  var selectedAnswer = document.querySelector('input[name="answer"]:checked');
  var userAnswer = selectedAnswer ? selectedAnswer.value : '';

  if (userAnswer === 'lion') {
    document.getElementById('feedback').innerHTML = 'Congratulations! Your answer is correct!';
  } else {
    document.getElementById('feedback').innerHTML = 'Oops! Your answer is incorrect. Please try again.';
  }
}
