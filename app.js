
let counter = 0;
let winVar = 0;
let loseVar = 0;
let timeCount = 15;
var timerBaby;
let timerReset = true
let musicCounter = 0
let audio = document.getElementById("theme-song")

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



//timerfunction used to declare and call the timout function
let startTimer = (timerReset) => {
  console.log(timeCount)
  if (timerReset === 0) {
    timerBaby = setInterval(function () {
      if (timeCount > 0) {

        $("#append-timer").empty();
        $("#append-timer").append(timeCount);
        timeCount--


      }
      else if (timeCount === 0) {
        $("#append-timer").empty();
        clearInterval(timerBaby)
        displayTimerLose()
      }
    }
      , 1000);
  }
  else if (timerReset === 1) {
    clearInterval(timerBaby)
  }
}



//populates the quiz field with the next object of questions and potential answers 

let genQuestion = (i) => {
  if (counter < questionBanks.length) {
    $("#question").html(questionBanks[i].question)
    $("#answer1").html(questionBanks[i].answers[0])
    $("#answer2").html(questionBanks[i].answers[1])
    $("#answer3").html(questionBanks[i].answers[2])
    $("#answer4").html(questionBanks[i].answers[3])
  }
}



//button that reveals and hides approproate header content, calls genquestion for its origin

$("#start-button").click(function () {
  
  audio.play()
  startTimer(0)
  genQuestion(0)
  $("#start-button").css("display", "none")
  $("#hide-me").css("display", "none")
  $(".clickable").css("display", "block")
  $(".card").css("display", "block")
})

//Function used to empty all fields after questions is selected, then will repopulate by calling genQuestion at its counted indices (counter adds up in checked answers function)

let newQuestions = () => {
  timeCount = 15;
  startTimer(0)

  $("#append-header").empty()
  $(".clickable").css("display", "block")
  $("#question").empty()
  $("#answer1").empty()
  $("#answer2").empty()
  $("#answer3").empty()
  $("#answer4").empty()
  genQuestion(counter)
  $("#append-timer").css("display", "block")
}


// 4 different answer fields that will all append themselves to the header upon choice and then will call check answer for a string comparison


$("#answer1").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer1").text())
  checkAnswer(answer)
  timeCount = 15
  startTimer(1)


})
$("#answer2").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer2").text())
  checkAnswer(answer)
  timeCount = 15
  startTimer(1)
})
$("#answer3").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer3").text())
  checkAnswer(answer)
  timeCount = 15
  startTimer(1)

})
$("#answer4").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer4").text())
  checkAnswer(answer)
  timeCount = 15
  startTimer(1)
})


// string comparison of choices vs Correct Answer
let checkAnswer = (x) => {
  if (x === questionBanks[counter].rightAnswer) {

    counter++
    // console.log("youre the winner")
    displayWin();
    $("#append-timer").css("display", "none")
    if (counter < questionBanks.length) {
      setTimeout(newQuestions, 3000)
    }
    else{
      setTimeout(finalScreen,3000)
    }
  }
  else {

    counter++
    // console.log("youre a loser")
    $("#append-timer").css("display", "none")

    displayLose()
    if (counter < questionBanks.length) {
      setTimeout(newQuestions, 3000)
    }
    else{
      setTimeout(finalScreen,3000)
    }
  }

}
//Appended winner header based on chosen div string matching answer string

let displayWin = () => {
  winVar++
  $("#right-guess").text(winVar)
  $(".clickable").css("display", "none")
  let winnerHeader = $("<h1>")
  winnerHeader.text("Correct!!!")
  winnerHeader.css("color", "green")
  $("#append-header").append(winnerHeader)
  $("#question").empty()

  $("#question").append(questionBanks[counter - 1].rightAnswer)
  let swish = document.getElementById("swish")
  swish.play()

}

// same as winner header but a loser choice if strimng comaprison does not match

let displayLose = () => {
  loseVar++
  $("#wrong-guess").text(loseVar)
  $(".clickable").css("display", "none")
  let loserHeader = $("<h1>")
  loserHeader.text("Wrong")
  loserHeader.css("color", "red")
  $("#append-header").append(loserHeader)
  $("#question").empty()
  $("#question").append(`The Correct Answer is ${questionBanks[counter - 1].rightAnswer}`)
  let sadness = document.getElementById("sadness")
  sadness.play()
  // console.log(counter)

}
//loss screen based on losing due to timer timeOut
let displayTimerLose = () => {
  loseVar++;
  counter++
  $("#wrong-guess").text(loseVar)
  $(".clickable").css("display", "none")
  let loserHeader = $("<h1>")
  loserHeader.text("Out of Time")
  loserHeader.css("color", "red")
  $("#append-header").append(loserHeader)
  $("#question").empty()
  console.log(counter)
  console.log(questionBanks[counter - 1].rightAnswer)
  $("#question").append(`The Correct Answer is ${questionBanks[counter - 1].rightAnswer}`)
  setTimeout(newQuestions, 3000)
  sadness.play()

}

let finalScreen = () => {
  
}

$("#music-button").click(function(){
  if(musicCounter === 0){
    audio.pause()
    $("#music-button").empty()
    $("#music-button").text("Play Music")
    musicCounter++
  }
  else{
    audio.play()
    $("#music-button").empty()
    $("#music-button").text("Pause Music")
    musicCounter--

  }
})









