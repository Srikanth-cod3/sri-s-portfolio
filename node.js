const skills = document.querySelector(".skills");
const contact = document.querySelector(".contact");
const call = document.querySelector(".call");
function triger() {
  skills.classList.add("block");
}
function remover() {
  skills.classList.remove("block");
}
function hire() {
  contact.style.transform = "translateY(70px)";
}
const username = document.querySelector("#username");
function trans() {
  contact.style.transform = "translatey(-700px)";
  alert("thankyou for Contact us Mr." + username.value);
}

function look() {
  call.style.transform = "translateY(10px)";
  // call.classList.toggle("block");
}
function remove() {
  call.style.transform = "translateY(-400px)";
}
