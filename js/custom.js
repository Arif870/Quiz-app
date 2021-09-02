// reply quiz

document.getElementById("replay").addEventListener("click", () => {
  document.getElementById("result").style.display = "none";
});

document.getElementById("startQuiz").addEventListener("click", () => {
  document.getElementById("question").style.display = "block";
  quizQuestion(0);
});
// get questions and ans

let index = 0;
document.getElementById("next").addEventListener("click", () => {
  let questionLength = questions.length;

  if (index < questionLength - 1) {
    index++;
    quizQuestion(index);
  } else {
    document.getElementById("question").style.display = "none";
    document.getElementById("result").style.display = "block";
    index = 0;
  }
});
function quizQuestion(index) {
  return (document.getElementById(
    "questionsSetion"
  ).innerHTML = `<h2 class= 'my-4'>${questions[index].id}. ${questions[index].question}</h2>
              <ul>
                <li>${questions[index].options[0]}</li>
                <li>${questions[index].options[1]}</li>
                <li>${questions[index].options[2]}</li>
                <li>${questions[index].options[3]}</li>
              </ul>`);
}
document.getElementById("quit").addEventListener("click", () => {
  window.location.href = "index.html";
});

// question load
let xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  localStorage.setItem("questions", this.response);
};
xhttp.open("GET", "../question.json");
xhttp.send();

// get question

function getQuestion() {
  return localStorage.getItem("questions");
}

let questions = JSON.parse(getQuestion());

document.getElementById("");
