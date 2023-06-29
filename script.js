// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the radio buttons
    const radioButtons = document.querySelectorAll("input[type=radio]");
  
    // Add event listener to each radio button
    radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener("change", function () {
        // Get the selected answer
        const selectedAnswer = document.querySelector(
          'input[name="answer"]:checked'
        );
  
        // Display feedback based on the selected answer
        if (selectedAnswer) {
          const feedback = document.getElementById("feedback");
          if (selectedAnswer.value === "a conformist in") {
            feedback.innerText = "Correct answer!";
            feedback.style.color = "white";
          } else {
            feedback.innerText = "Incorrect answer!";
            feedback.style.color = "red";
          }
        }
      });
    });
  });
  
