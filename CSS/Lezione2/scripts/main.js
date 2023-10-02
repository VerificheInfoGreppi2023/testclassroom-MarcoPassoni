// myHeading.textContent="Hello world!";
// let myVariable="Bob";
// let eta=25;
// let variabile=true;
// let vettore=[2, 3, "Pippo", false];
// let eta1="25";
// let confronto=(eta===eta1);
// alert(confronto);

// function mult(num1, num2){
//     let result = num1 * num2;
//     return result;
// }
// let ris = mult(3,4);

// document.querySelector("img").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
myButton.onclick=()=>{
    setUserName()
}