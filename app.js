
let counter = 0;
let winVar = 0;
let loseVar = 0;
let timer = 30;

//Array of objects containing all of the displayed content

let questionBanks = [
  {
    question: "Who won the 2012 NBA MVP?",
    answers: ["Wilt The Stilt", "Lebron James", "Kobe Bryant", "Dwyane Wade"],
    rightAnswer: "Lebron James"

  },

  {
    question: "What is the record for most points scores in a single NBA game?",
    answers: ["75", "81", "100", "92"],
    rightAnswer: "100"
  },
  {
    question: "Which NBA team won the 2006 NBA Championship?",
    answers: ["Golden State", "Spurs", "Mavericks", "Heat"],
    rightAnswer: "Heat"
  }
  ,
  {
    question: "Which NBA team has the best franchise win %, without ever making the NBA finals?",
    answers: ["Grizzlies", "Suns", "Hornets", "TrailBlazers"],
    rightAnswer: "Suns"
  }
  ,
  {
    question: "Who is the NBA all time assist leader?",
    answers: ["Isiah Thomas", "Magic Johnson", "John Stockton", "Chris Paul"],
    rightAnswer: "John Stockton"
  }
  ,
  {
    question: "During the 2007 season, which single NBA player was traded for 5 players and 3 picks?",
    answers: ["Kobe Bryant", "Kevin Garnett", "Shaq", "Lebron James"],
    rightAnswer: "Kevin Garnett"
  }
  ,
  {
    question: "Which NBA player starred in the greates movie of all time?",
    answers: ["Michael Jordan", "Larry Legend", "Bill Russell", "Oscar Robertson"],
    rightAnswer: "Michael Jordan"
  }
]


// let genQuestion = () => {
//   for(var i = 0; i < questionBanks.length; i++){
//     let chosenQuestion = questionBanks[i]
//     for (var j = 0; j < 4; j++){
//       let answerGen = chosenQuestion.answers[j]
//       console.log(answerGen)
//     }
//   }

// }
// genQuestion()

//populates the quiz field with 

let genQuestion = (i) => {
  // document.getElementById("question").innerHTML= (questionBanks[0].question)
  if(counter < questionBanks.length){
  $("#question").html(questionBanks[i].question)
  $("#answer1").html(questionBanks[i].answers[0])
  $("#answer2").html(questionBanks[i].answers[1])
  $("#answer3").html(questionBanks[i].answers[2])
  $("#answer4").html(questionBanks[i].answers[3])
  }

}

// genQuestion(0);

$("#start-button").click(function () {
  genQuestion(0)
  timerDisplay()
  $("#start-button").css("display", "none")
  $("#hide-me").css("display", "none")
  $(".clickable").css("display", "block")
  $(".card").css("display", "block")
})

let newQuestions = () => {
  $("#append-header").empty()
  $(".clickable").css("display", "block")
  $("#question").empty()
  $("#answer1").empty()
  $("#answer2").empty()
  $("#answer3").empty()
  $("#answer4").empty()
  genQuestion(counter)
}



$("#answer1").click(function(){
  $("#append-header").empty()
  let answer = ($("#answer1").text())
  checkAnswer(answer)

})
$("#answer2").click(function(){
  $("#append-header").empty()
  let answer = ($("#answer2").text())
  checkAnswer(answer)
 
})
$("#answer3").click(function(){
  $("#append-header").empty()
  let answer = ($("#answer3").text())
  checkAnswer(answer)
 
})
$("#answer4").click(function(){
  $("#append-header").empty()
  let answer = ($("#answer4").text())
  checkAnswer(answer)
 
})



let checkAnswer = (x) => {
  if (x === questionBanks[counter].rightAnswer){
    counter++
    console.log("youre the winner")
    displayWin();
    
    setTimeout(newQuestions, 3000)
  }
  else{
    counter++
    console.log("youre a loser")
    
    displayLose()
    setTimeout(newQuestions,3000)
  }

}

let displayWin = () => {
  winVar++
  $("#right-guess").text(winVar)
  $(".clickable").css("display", "none")
  let winnerHeader = $("<h1>")
  winnerHeader.text( "Correct!!!")
  winnerHeader.css("color" , "green")
  $("#append-header").append(winnerHeader)
  $("#question").empty()
  $("#question").append(questionBanks[counter-1].rightAnswer)
}

let displayLose = () => {
  loseVar++
  $("#wrong-guess").text(loseVar)
  $(".clickable").css("display", "none")
  let loserHeader = $("<h1>")
  loserHeader.text( "Wrong")
  loserHeader.css("color" , "red")
  $("#append-header").append(loserHeader)
  $("#question").empty()
  $("#question").append(`The Correct Answer is ${questionBanks[counter-1].rightAnswer}`)
}

let timerDisplay = () => {
  let timerBlock = $("<h2>")
  timerBlock.attr("id", "timer")
  $("#append-header").append(timerBlock)
  let timer = setInterval(countDown, 1000)
  
  

}

let timeLeft = 29

let countDown = () => {
  if(timeLeft === 0){
    clearTimeout(timer)
    console.log("you lose")
  }
  else{
    $("#timer").empty()
    $("#timer").text(timeLeft)
    timeLeft--
  }
  
}

