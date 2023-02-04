const questions = [
  {
    que: "Whis one is the Scripting language?",
    a: "Javascript",
    b: "CSS",
    C: "HTML",
    d: "Python",
    correct: "a"
  },
  {
    que: "Whis one is the Markup language?",
    a: "Javascript",
    b: "CSS",
    C: "HTML",
    d: "Python",
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
console.log(options);
let index = 1;
const loadQuestion = () => {
  let data = questions[index];
  questionBox.innerText = data.que;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
  // IMP -> The "nextElementSibling" property returns the next element in the same tree level.In this case it'll be <label>
}

loadQuestion();
