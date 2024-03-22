//Event listener
document.getElementById("mad-lib-btn").addEventListener("click", madLib);

//Event function
function madLib() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let actionVerb = document.getElementById("action").value;
  let cities = document.getElementById("city").value;
  //process
  let result =
    '" There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!", I screamed "Somebody has to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem." Oh no the plane is going to ' +
    actionVerb +
    " into " +
    cities +
    " help! ";
  //Output
  document.getElementById("results").innerHTML = result;
  document.getElementById("results").style.border = "0px solid black";
  document.getElementById("results").style.fontFamily = "Arial";
  document.body.style.fontFamily = "Arial";
  document.getElementById("hello").style.background = "URL(images/plane.jpg)";
  document.getElementById("hello").style.backgroundSize = "cover";
}

document.getElementById("mad-lib-btn2").addEventListener("click", madLib2);

function madLib2() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let actionVerb = document.getElementById("action").value;
  let cities = document.getElementById("city").value;

  //Process
  let progress = `Help the ${pluralNoun} ${verb} to this ${adjective} school. They are going to break the ${adjective} room with a ${noun} .
    Now they are going to ${actionVerb} city of ${cities} `;
  //Output
  document.getElementById("results").innerHTML = progress;
  let progress1 = (document.getElementById("results").style.fontFamily =
    "monospace");
  let progress2 = (document.getElementById("results").style.border =
    "2px solid green");
  document.getElementById("hello").style.background = "URL(images/School.jpg)";
  document.body.style.fontFamily = "Arial";
}

document.getElementById("mad-lib-btn3").addEventListener("click", madLib3);

function madLib3() {
  document.body.style.fontFamily = "fantasy";
  document.getElementById("results").style.fontFamily = "fantasy";
}
