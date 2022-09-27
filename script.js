const quizDB=[
    {
        question:"Which country does the band Rammstein hail from?",
        a:"Austria",
        b:"Armenia",
        c:"Germany",
        d:"Belgium",
        ans:"ans3"
    },
    {   question:"Which European city has the highest mileage of canals in the world?",
        a:"Birmingham",
        b:"Venice",
        c:"Amsterdam",
        d:"Berlin",
        ans:"ans1"
    },
    {
        question:"Which of the following language families is the most controversial amongst modern linguists?",
        a:"Altaic",
        b:"Sino-Tibetan",
        c:"Dravidian",
        d:"Indo-European",
        ans:"ans1"
    }
];
const question= document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answer.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;

        }
       
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;
    if(questionCount < quizDB.lenght){
        loadQuestion(); 
    }
});