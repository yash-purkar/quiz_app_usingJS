const questions = [
  {
    que: "Whis one is the Scripting language?",
    a: "Javascript",
    b: "CSS",
    c: "HTML",
    d: "Python",
    correct: "a"
  },
  {
    que: "Whis one is the Markup language?",
    a: "Javascript",
    b: "Python",
    c: "HTML",
    d: "CSS",
    correct: "c"
  },
  {
    que: "Whis one is the JS library?",
    a: "AngularJS",
    b: "ExpressJS",
    c: "NodeJS",
    d: "ReactJS",
    correct: "d"
  },
];

let questionBox = document.getElementById("question");
let options = document.querySelectorAll(".options");
// console.log(options);
let submitBtn = document.getElementById("submitBtn");
let rightAnswers = 0;

let index = 0;
const loadQuestion = () => {
  let data = questions[index];
  questionBox.innerText = data.que;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
  // IMP -> The "nextElementSibling" property returns the next element in the same tree level.In this case it'll be <label>
}

const handleSubmit = () => {
  let data = questions[index];
  let userAnswer = getUserAnswer();
  // console.log(userAnswer);


  if (!userAnswer) {
    alert("fill the data")
  }

  else if (userAnswer === data.correct) {
    rightAnswers++;
    index++;
    loadQuestion();
  }
  else {
    index++;
    loadQuestion();
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

submitBtn.addEventListener("click", handleSubmit);

loadQuestion();


