//questions
const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheets",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    que:"Which attribute is used to specify the source of an image in the “ img ” tag?",
    a: "src",
    b: "link",
    c: "href",
    d: "alt",
    correct: "a",
  },
  {
    que:"Which attribute is used to specify the link in a  “ a ” tag?",
    a: "src",
    b: "link",
    c: "href",
    d: "alt",
    correct: "c",
  },
  {
    que:"Can the “ img ”  tag have a closing tag?",
    a: "Yes",
    b: "NO",
    c: "none of the above",
    d: "both",
    
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
     if(index === total){
          return endQuiz()
     }
     reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

//checking Answers
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  play()
  return;
};


const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  })
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {input.checked = false});
};
 const endQuiz = () =>{
     document.getElementById("box").innerHTML = `
     <h3>Thank you for playing the quiz</h3>
     <h2>${right} / ${total} are correct</h2>
     `
}
const play = () =>{
  document.getElementById("totalqus").innerHTML = `
  <h3>${index}/ ${total}</h3>
  `
}
play()
loadQuestion();
