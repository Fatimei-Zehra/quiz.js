const questions = [
    {
      id: 1,
      title: "What is the chemical symbol for the element Gold?",
      answers: ["Go", "Au", "Dg", "Ag"],
      correct: "Au",
    },
    {
      id: 2,
      title: "Who was the first President of the United States?",
      answers: [
        "Thomas Jefferson ",
        "John Adams",
        "George Washington",
        "Benjamin Franklin",
      ],
      correct: "George Washington",
    },
    
  ];
  
  const questionsTitel = document.querySelector(".question-titel h2");
  const questionsAnswers = document.querySelectorAll(".question-answers span");
  const submintButton = document.querySelector("button");
  let successResult = 0;
  let failResult = 0;
  let index = 0;
  
  class Quiz {
    constructor() {
      this.displayQuestion();
    }
  
    displayQuestion() {
      const currentQuestions = questions[index];
  
      if (currentQuestions == undefined) {
    
        this.finishExam()
        return;
      }
      questionsTitel.innerText = currentQuestions.title;
      for (let i = 0; i < currentQuestions.answers.length; i++) {
        questionsAnswers[i].innerText = currentQuestions.answers[i];
  
        questionsAnswers[i].addEventListener("click", function () {
          questionsAnswers.forEach((span) => {
            span.classList.remove("selected");
          });
          questionsAnswers[i].classList.add("selected");
        });
      }
    }
  
    // selectAnswer(element) {}
  
    checkResult() {
      const currentQuestion = questions[index];
  
      const selectAnswer = document.querySelector("span.selected");
  
      return currentQuestion.correct == selectAnswer.innerText;
    }
    nextQuestion() {
      questionsAnswers.forEach((span) => {
        span.classList.remove("selected");
      });
      index++;
      this.displayQuestion();
    }
    finishExam(){
      alert("dogru cavab sayi : " +successResult + " |  Yanlis cavab sayi: "  + failResult )
     document.querySelector("#quiz-container").computedStyleMap.display ="none";
      return;
    }
  }