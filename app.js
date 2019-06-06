
let counter = 0;
let winVar = 0;
let loseVar = 0;
let timeCount = 15;
var timerBaby;

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
let startTimer = () => {
  var timerBaby = setInterval(myTimer, 1000);
}


let myTimer = () => {
  $("#append-timer").empty();
  $("#append-timer").append(timeCount);
  timeCount --
}

function myStopFunction() {
  timeCount = 15
  clearInterval(timerBaby);
}


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

//populates the quiz field with the next object of questions and potential answers 

let genQuestion = (i) => {
  // document.getElementById("question").innerHTML= (questionBanks[0].question)
  if (counter < questionBanks.length) {
    myStopFunction()
    $("#question").html(questionBanks[i].question)
    $("#answer1").html(questionBanks[i].answers[0])
    $("#answer2").html(questionBanks[i].answers[1])
    $("#answer3").html(questionBanks[i].answers[2])
    $("#answer4").html(questionBanks[i].answers[3])
    

  }

}

// genQuestion(0);

//button that reveals and hides approproate header content, calls genquestion for its origin

$("#start-button").click(function () {
  genQuestion(0)
  startTimer();
  $("#start-button").css("display", "none")
  $("#hide-me").css("display", "none")
  $(".clickable").css("display", "block")
  $(".card").css("display", "block")
})

//Function used to empty all fields after questions is selected, then will repopulate by calling genQuestion at its counted indices (counter adds up in checked answers function)

let newQuestions = () => {

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

})
$("#answer2").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer2").text())
  checkAnswer(answer)
})
$("#answer3").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer3").text())
  checkAnswer(answer)

})
$("#answer4").click(function () {
  $("#append-header").empty()
  let answer = ($("#answer4").text())
  checkAnswer(answer)
})


// string comparison of choices vs Correct Answer
let checkAnswer = (x) => {
  if (x === questionBanks[counter].rightAnswer) {
    myStopFunction()

    counter++
    // console.log("youre the winner")
    displayWin();
    $("#append-timer").css("display", "none")

    setTimeout(newQuestions, 3000)
  }
  else {
    myStopFunction()

    counter++
    // console.log("youre a loser")
    $("#append-timer").css("display", "none")

    displayLose()
    setTimeout(newQuestions, 3000)
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
}






// var files = [
//   "pavans_first_birthday.mov",
//   "owens_asleep_at_the_computer.jpg",
//   "michael_fights_a_polar_bear.mp4",
//   "nate_road_rage.avi",
//   "ruby_skydiving.jpeg",
//   "ken_getting_his_black_belt.png",
//   "dan_winning_underground_street_race.mov",
//   "its_hard_to_come_up_with_file_names.gif",
//   "seriously_this_is_taking_too_long.mpg",
//   "i_wonder_how_many_of_these_i_should_have.png",
//   "probably_a_few_more.avi",
//   "nutmeg_is_clawing_my_sneakers_again.mp4",
//   "cat_i_will_destroy_you.gif",
//   "i_wish_we_had_a_dog.jpeg",
//   "stop_looking_at_me_like_that_nutmeg.mpeg",
//   "aww_i_cant_hate_you.png",
//   "omg_my_sneakers.avi",
//   "cat_you_are_the_worst.mp4"
// ]

// let fileSorter = (files)=>{
//   let movieArray = []
//   let musicArray = []
//   for (var i = 0; i <files.length;i++ ){
//     let currentFile = files[i]

//     if(currentFile[currentFile.length-4]!== "."){
//       if (currentFile[currentFile.length-4]=== "m"){
//         movieArray.push(currentFile)
//       }
//       else{
//         musicArray.push(currentFile)
//       }
//     }

//     else if (currentFile[currentFile.length-3]==="m" ||currentFile[currentFile-3]==="a"){
//       movieArray.push(files[i])
//       console.log(movieArray)
//     }
//     else if (currentFile[currentFile.length-3]==="j" ||currentFile[currentFile-3]==="p" || currentFile[currentFile.length-3]==="p"){
//       musicArray.push(files[i])
//       console.log(musicArray)
//     }

//   }
// }

// fileSorter(files)


