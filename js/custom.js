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
  let queSec = (document.getElementById(
    "questionsSetion"
  ).innerHTML = `<h2 class= 'my-4'>${questions[index].id}. ${questions[index].question}</h2>
              <ul>
                <li>${questions[index].options[0]}</li>
                <li>${questions[index].options[1]}</li>
                <li>${questions[index].options[2]}</li>
                <li>${questions[index].options[3]}</li>
              </ul>`);

  let opts = document.querySelectorAll("ul li");
  for (let i = 0; i < opts.length; i++) {
    opts[i].setAttribute("onclick", "getAns(this, index)");
  }

  return queSec;
}

// check given ans

let totalMarks = 0;

let getAns = (ans, index) => {
  // pointer event validation
  let opts = document.querySelectorAll("ul li");

  for (let i = 0; i < opts.length; i++) {
    opts[i].classList.add("checked");
  }

  let givenAns = ans.innerText;
  let correctAns = questions[index].answer;
  if (givenAns === correctAns) {
    totalMarks += 1;
    ans.classList.add("bg-success");
    ans.classList.add("text-light");
    console.log(totalMarks);
  } else {
    ans.classList.add("bg-danger");
    ans.classList.add("text-light");

    for (let i = 0; i < opts.length; i++) {
      if (opts[i].innerText === correctAns) {
        opts[i].classList.add("bg-success");
        opts[i].classList.add("text-light");
      }
    }
  }
};
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
