function checkEligibility() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("eligibilityResult").innerText = "You are eligible to vote!";
  } else {
    document.getElementById("eligibilityResult").innerText = "Sorry, you are too young to vote.";
  }
}

function addNumbers(a, b) {
  return a + b;
}

function calculateSum() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);

  let sum = addNumbers(n1, n2);
  document.getElementById("sumResult").innerText = `Sum = ${sum}`;
}

function showCountdown() {
  let result = "";
  for (let i = 5; i >= 1; i--) {
    result += i + " ";
  }
  result += "Lift Off!";
  document.getElementById("countdownResult").innerText = result;
}

document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("textToChange").innerText = "The text has been changed!";
});

document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("textToChange").classList.toggle("highlight");
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.innerText = "New dynamic item";
  document.getElementById("dynamicList").appendChild(li);
});
