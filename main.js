// Catch my Elements
let myContainer = document.getElementsByClassName("container")[0];
let myInput = document.getElementsByTagName("input")[0];
let saveBtn = document.getElementsByTagName("button")[0];
let myAllTasks = document.getElementsByClassName("tasks")[0];
// Get The Previous Data From Local Storage so when we reload or close the window get it again
myAllTasks.innerHTML = localStorage.getItem("data");
// make the function of the save btn
saveBtn.addEventListener("click", () => {
  if (myInput.value !== "") {
    let myLi = document.createElement("li");
    myLi.innerHTML = myInput.value;
    myAllTasks.append(myLi);
    let mySpan = document.createElement("span");
    mySpan.innerHTML = "X";
    mySpan.className = "spanning";
    myLi.append(mySpan);
    myInput.value = "";
    localStorage.setItem("data", myAllTasks.innerHTML);
  }
});
// Add the through line effect by Adding class "done" to the finished task when get clicked
myAllTasks.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.hasAttributes()) {
      e.target.removeAttribute("class");
    } else {
      e.target.classList.add("done");
    }
    //Remove the task when click on the span
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  // save All tasks in Local Storage
  localStorage.setItem("data", myAllTasks.innerHTML);
});
