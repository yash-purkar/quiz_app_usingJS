const questions = [
  {
    que: "Everything in React is a ________",
    a: "Module",
    b: "Component",
    c: "Package",
    d: "Class",
    correct: "b"
  },
  {
    que: "React JS was found in the year of",
    a: "2012",
    b: "2014",
    c: "2013",
    d: "2016",
    correct: "c"
  },
  {
    que: "How many elements does a react component return?",
    a: "5",
    b: "3",
    c: "1",
    d: "Multiple",
    correct: "c"
  },
  {
    que: "What is Babel?",
    a: "A transpiler",
    b: "An interpreter",
    c: "A Compiler",
    d: "none of the above",
    correct: "c"
  },
  {
    que: "Which of the following method is true about referring parent class in React.js?",
    a: "self()",
    b: "inherits()",
    c: "this()",
    d: "super()",
    correct: "d"
  },
];

let questionBox = document.getElementById("question");
let options = document.querySelectorAll(".options");
// console.log(options);
let submitBtn = document.getElementById("submitBtn");
let errMsg = document.getElementById("errMsg");
let trueAns = document.getElementById("true");
let falseAns = document.getElementById("false");
console.log(falseAns)
trueAns.style.color = "white";
falseAns.style.color = "white";

let rightAnswers = 0;
let wrongAnswers = 0;
let total = questions.length;

let index = 0;
const loadQuestion = () => {
  // console.log(total)
  if (index === total) {
    endQuiz();
  }
  reset();//IMP reset() fn will reset the input checks.
  let data = questions[index];
  questionBox.innerText = `${index + 1}. ${data.que}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
  // IMP -> The "nextElementSibling" property returns the next element in the same tree level.In this case it'll be <label>
}

const handleSubmit = () => {
  console.log(index)
  let data = questions[index];
  let userAnswer = getUserAnswer();
  // console.log(userAnswer);
  if (userAnswer === undefined) {
    errMsg.style.color = "red"
  }
  else {
    if (userAnswer === data.correct) {
      trueAns.style.color = "green";
      // falseAns.innerText = "";
      rightAnswers++;

    }
    else {
      wrongAnswers++;
      falseAns.style.color = "red"
    }
    index++;
    setTimeout(() => {
      falseAns.style.color = "white";
      trueAns.style.color = "white";
      loadQuestion();
    }, 1000)
    errMsg.style.color = "#fff"
  }

}

const getUserAnswer = () => {
  let userAns;
  options.forEach((input) => {
    if (input.checked) {
      // console.log(input.value);
      userAns = input.value;
    }
    // IMP .checked - Specifies whether a checkbox should be checked or not. It returns true or false.
    // true - The checkbox is checked
    // false - Default. The checkbox is not checked
  });
  return userAns;
}

const reset = () => {
  return options.forEach((input) => {
    input.checked = false;
  })
}



const endQuiz = () => {
  if (rightAnswers < 3) {
    document.querySelector(".row").innerHTML = `
    <div  id="score">
    <h1>Ohh! You scored😞 ${rightAnswers}/${total}</h1>
    <div class="btnsDiv">
    <button onclick="playAgain()">Play Again</button>
    </div>
    </div>
    `
  }
  else {
    document.querySelector(".row").innerHTML = `
  <div  id="score">
  <h1>Great, You scored🚀 ${rightAnswers}/${total}</h1>
  <div class="btnsDiv">
  <button onclick="playAgain()">Play Again</button>
  </div>
  </div>
  `
  }
}

const playAgain = () => {
  setTimeout(() => {
    document.querySelector(".row").innerHTML = "<h3>LOADING...</h3>"
  })
  setTimeout(() => {
    location.reload();
  }, 2000)
}

submitBtn.addEventListener("click", handleSubmit);

loadQuestion();


