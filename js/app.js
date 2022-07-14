"use strict";

// console.log("hello world");
// Greet user
function greetings(){
  let username = prompt("Hi, what is your name?");
alert(
  "Welcome " +
    username +
    ", to my about me page. There will be a short fun quiz that will start in 10 seconds."
);
}

// setTimeout to delay quiz to give time to read the material before quiz
let timeOut = setTimeout(quiz, 10000);

function quiz() {
  let score = 0;
  // Quiz Game
  function questionOne(){
    let origin = prompt("I'm a from Massachusetts").toLowerCase();

  if (origin === "yes" || origin === "y") {
    // console.log("Yes, I'm from Massachusetts.");
    alert("Yes, I'm from Massachusetts.");
    score++;
    console.log(score);
  } else if (origin === "no" || origin === "n") {
    // console.log("Sorry, you are wrong. I'm from Massachusetts.");
    alert("Sorry, you are wrong. I'm from Massachusetts.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
  }

function questionTwo(){
  let firstDutyStation = prompt(
    "Was Japan my first duty station in the Marion Corps?"
  ).toLowerCase();

  if (firstDutyStation === "yes" || firstDutyStation === "y") {
    // console.log("Yes, it was Japan.");
    alert("Yes, it was Japan.");
    score++;
    console.log(score);
  } else if (firstDutyStation === "no" || firstDutyStation === "n") {
    // console.log("Sorry, you are wrong. It was Japan.");
    alert("Sorry, you are wrong. It was Japan.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
}

function questionThree(){
  let secondDutyStation = prompt(
    "Was New York my second duty station in the Marine Corps?"
  ).toLowerCase();

  if (secondDutyStation === "yes" || secondDutyStation === "y") {
    // console.log(
    //   "Sorry, California was my second duty station in the Marine Corps."
    // );
    alert("Sorry, California was my second duty station in the Marine Corps.");
  } else if (secondDutyStation === "no" || secondDutyStation === "n") {
    // console.log(
    //   "Right!, New York was not my second duty station in the Marine Corps."
    // );
    alert(
      "Right!, New York was not my second duty station in the Marine Corps."
    );
    score++;
    console.log(score);
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
}

function questionFour(){
  let shop = prompt("Did I work as a Barber for while?").toLowerCase();

  if (shop === "yes" || shop === "y") {
    // console.log(
    //   "Correct! I was Barber making people look their best for a while."
    // );
    alert("Correct! I was Barber making people look their best for a while.");
    score++;
    console.log(score);
  } else if (shop === "no" || shop === "n") {
    // console.log(
    //   "Wrong, I was a Barber of a while making people look there best."
    // );
    alert("Wrong, I was a Barber of a while making people look there best.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
}

  let codeFellows = prompt("Am I a Code Fellow?").toLowerCase();

  if (codeFellows === "yes" || codeFellows === "y") {
    // console.log("Yes, I am a Code fellow");
    alert("Yes, I am a Code fellow");
    score++;
    console.log(score);
  } else if (codeFellows === "no" || codeFellows === "n") {
    // console.log("Sorry, I am a Code Fellow.");
    alert("Sorry, I am a Code Fellow.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
  // alert("Thank you for visiting and taking my quiz " + username);
  console.log(score);

  // Number Game

  let attempts = 4;

  // Generate random number
  let minimum = 1;
  let maximum = 5;
  let randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
  console.log(randomNum);
  console.log(typeof randomNum);

  // Do Loop while attemps remain
  while (attempts > 0) {
    // Prompt user for input
    let userNumber = parseInt(
      prompt(
        `${username} Please pick a number from ${minimum} to ${maximum}. You have ${attempts} left to get it right.`
      )
    );
    console.log(userNumber);
    console.log(typeof userNumber);

    attempts--;
    // check to see if userNumber is the same as randomNum
    if (userNumber === randomNum) {
      // console.log(`Correct you guessed right! The number is ${randomNum}`);
      alert(`Correct you guessed right! The number is ${randomNum}`);
      score++;
      break;
    } else if (userNumber < randomNum) {
      // console.log(`Close, but ${userNumber} is too low.`);
      alert(`Close, but ${userNumber} is too low.`);
    } else if (userNumber > randomNum) {
      // console.log(`Closes, but ${userNumber} is too high`);
      alert(`Closes, but ${userNumber} is too high`);
    } else {
      console.log(
        `Sorry, you need to guess a number from ${minimum} to ${maximum}`
      );
    }

    // Check if user ran out of attempts
    if (attempts === 0) {
      alert(
        "Sorry your ran out if attemps. You can refresh the page to try again."
      );
    }
  }
  console.log(score);

  // JDM Game
  // possible answers
  let jdmFav = [
    "mazda rx-7",
    "mazda rx7",
    "rx7",
    "mazda rx-8",
    "mazda rx8",
    "rx8",
    "honda nsx",
    "nsx",
    "honda s2000",
    "s2000",
    "nissian s15",
    "s15",
    "mitsubishi lancer evolution 9",
    "evo 9",
    "nissan skyline r34",
    "r34",
    "nissan 300zx",
    "300zx",
    "toyota supra mk3",
    "supra mk3",
    "lexus sc300",
    "sc300",
  ];

  let jdmAttempts = 6;

  // Run while loop untill no attempts remain
  while (jdmAttempts > 0) {
    // Ask JDM question and save it
    let jdmAnswer = prompt(
      `What was one of my favorite JDM Cars? You have ${jdmAttempts} attempts left.`
    ).toLowerCase();
    // console.log(jdmAnswer);
    jdmAttempts--;

    // loop through jdmFav array
    let isCorrect = false;
    for (let i = 0; i < jdmFav.length; i++) {
      // Check to see if jdmAnswer is of jdmFav array
      if (jdmAnswer === jdmFav[i]) {
        // console.log(`Correct! ${jdmAnswer} is on of my favorite JDM cars.`);
        alert(`Correct! ${jdmAnswer} is on of my favorite JDM cars.`);
        score++;
        isCorrect = true;
        break;
      }
    }
    // check to see if answer if correct, if it is then break from while loop
    if (!isCorrect) {
      // console.log(`Sorry, ${jdmAnswer} is not one of my favorite JDM cars`);
      alert(`Sorry, ${jdmAnswer} is not one of my favorite JDM cars`);
    } else {
      break;
    }
  }

  // Display results
  console.log(score);
  alert(
    `Congradulation ${username}! You have finished this quiz game about me. Your score is ${score} out of seven`
  );
}
