let ratingList = document.querySelectorAll("button.circle");
var num = undefined;
for (let i = 1; i <= 5; i++) {
  ratingList[i - 1].setAttribute("value", i);
  ratingList[i - 1].addEventListener("click", () => {
    num = ratingList[i - 1].getAttribute("value");
    ratingList.forEach((node) => {
      node.style.color = "hsl(215, 8%, 48%)";
      node.style.backgroundColor = "hsl(210, 19%, 18%)";
    });
    ratingList[i-1].style.color = "white";
    ratingList[i-1].style.backgroundColor = "hsl(25, 97%, 53%)";
  });
}

var submit = document.querySelector("button[type='submit']");
submit.addEventListener("click", () => {
  if (num) {
    document.querySelectorAll(".primary").forEach((x) => {
      x.style.display = "none";
    });
    document.querySelector("#secondary").style.display = "block";
    document.querySelector(
      "#secondary p"
    ).innerHTML = `You selected ${num} out of 5`;
    document.querySelector(".text h1").innerHTML = "Thank you";
    document.querySelector(".text p").innerHTML =
      "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  }
});
