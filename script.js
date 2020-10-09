const inp = document.getElementById("inp");
const ansBtn = document.getElementById("ans-btn");
const ans = document.getElementById("ans");

ansBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var x = inp.value;
  if (x == "") {
    alert("Please enter a number.");
  } else {
    if (x % 2 == 0) {
      ans.textContent = `${x} is an even number.`;
    } else {
      ans.textContent = `${x} is an odd number.`;
    }
  }
});
