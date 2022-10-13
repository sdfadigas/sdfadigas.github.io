var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
var userInput;
var opt = document.querySelectorAll("input[name=rate]");
for (let i of opt) {
  i.addEventListener("click", function () {
    userInput = i.value;
    let rateNum = "label[for=rate" + i.value + "]";
    console.log(rateNum);
    let optBtn = document.querySelector(rateNum);
    console.log(optBtn);
    optBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    optBtn.style.color = "white"
    let sib = getSiblings(optBtn);
    // console.log(sib);
    for (let i in sib) {
      console.log(sib[i]);
      sib[i].style.backgroundColor = "hsl(217, 11%, 43%, 0.2)";
      
    }
  });
}
var value = document.querySelector(".value");
var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", function () {
  event.preventDefault();
  value.innerHTML = userInput;
  console.log("Usersays: " + userInput);
  let pop = document.getElementById("after-click");
  pop.style.display = "block";
  front.style.display = "none";
});