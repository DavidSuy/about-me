"use strict";

// console.log("hello world");
// Greet user
let username = prompt("Hi, what is your name?");
alert(
  "Welcome " +
    username +
    ", to my about me page. There will be a short fun quiz that will start in 10 seconds."
);

// setTimeout to delay quiz to give time to read the material before quiz
let timeOut = setTimeout(quiz, 10000);

function quiz() {
  let origin = prompt("I'm a from Massachusetts").toLowerCase();

  if (origin === "yes" || origin === "y") {
    // console.log("Yes, I'm from Massachusetts.");
    alert("Yes, I'm from Massachusetts.");
  } else if (origin === "no" || origin === "n") {
    // console.log("Sorry, you are wrong. I'm from Massachusetts.");
    alert("Sorry, you are wrong. I'm from Massachusetts.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }

  let firstDutyStation = prompt(
    "Was Japan my first duty station in the Marion Corps?"
  ).toLowerCase();

  if (firstDutyStation === "yes" || firstDutyStation === "y") {
    // console.log("Yes, it was Japan.");
    alert("Yes, it was Japan.");
  } else if (firstDutyStation === "no" || firstDutyStation === "n") {
    // console.log("Sorry, you are wrong. It was Japan.");
    alert("Sorry, you are wrong. It was Japan.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }

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
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }

  let shop = prompt("Did I work as a Barber for while?").toLowerCase();

  if (shop === "yes" || shop === "y") {
    // console.log(
    //   "Correct! I was Barber making people look their best for a while."
    // );
    alert("Correct! I was Barber making people look their best for a while.");
  } else if (shop === "no" || shop === "n") {
    // console.log(
    //   "Wrong, I was a Barber of a while making people look there best."
    // );
    alert("Wrong, I was a Barber of a while making people look there best.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }

  let codeFellows = prompt("Am I a Code Fellow?").toLowerCase();

  if (codeFellows === "yes" || codeFellows === "y") {
    // console.log("Yes, I am a Code fellow");
    alert("Yes, I am a Code fellow");
  } else if (codeFellows === "no" || codeFellows === "n") {
    // console.log("Sorry, I am a Code Fellow.");
    alert("Sorry, I am a Code Fellow.");
  } else {
    // console.log("You need to answer with a 'yes' or 'no'.");
    alert("You need to answer with a 'yes' or 'no'.");
  }
  alert("Thank you for visiting and taking my quiz " + username);
}
