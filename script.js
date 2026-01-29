const button = document.getElementsByTagName("button");
const input = document.getElementById("calculator");

let string = "";

let arr = Array.from(button);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "ERROR!";
        string = "";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML === "x") {
      string += "*";
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
arr.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  });
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "";
  });
});
