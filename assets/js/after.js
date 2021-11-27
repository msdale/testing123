var getData = async function () {
  const someJson = await walmartProductLocator ("crayola crayons 24 count");
  console.log(someJson);
};

var buttonEl = document.createElement("button");
buttonEl.textContent = "PUSH";
buttonEl.style.backgroundColor = "yellow";
buttonEl.style.fontSize = "x-large";
buttonEl.style.fontWeight = "900";
buttonEl.style.padding = "15px 32px";

var bodyEl = document.querySelector("body");
bodyEl.appendChild(buttonEl);

buttonEl.addEventListener("click", getData);
