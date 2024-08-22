let login = document.querySelector("#login");
let registration = document.querySelector("#registration");
// login.style.display = "none";
// console.dir(login.style);
let showLogin = document.querySelector("#showLogin");
let showRegistration = document.querySelector("#showRegistration");
let overly = document.querySelector(".overly");
let forgotPassword = document.querySelector("#forgotPassword");
// showLogin.addEventListener("onClick", () => {
//   alert("kjzkjc");
let showForgotPassword = document.querySelectorAll("#showForgotPassword");
// });
let xlog = document.querySelector("#xlog");
let xreg = document.querySelector("#xreg");
let xfor = document.querySelector("#xfor");

showLogin.onclick = () => {
  login.style.display = "block";
  overly.classList.add("overlyadd");
  //   alert("login");
};
showRegistration.onclick = () => {
  registration.style.display = "block";
  overly.classList.add("overlyadd");

  //   alert("registration");
};
showForgotPassword[0].onclick = () => {
  login.style.display = "none";
  forgotPassword.style.display = "block";
  overly.classList.add("overlyadd");
};
showForgotPassword[1].onclick = () => {
  login.style.display = "none";

  forgotPassword.style.display = "block";
  overly.classList.add("overlyadd");
};
xlog.onclick = () => {
  login.style.display = "none";
  overly.classList.remove("overlyadd");
};
xreg.onclick = () => {
  registration.style.display = "none";
  overly.classList.remove("overlyadd");
};
xfor.onclick = () => {
  forgotPassword.style.display = "none";
  overly.classList.remove("overlyadd");
};
