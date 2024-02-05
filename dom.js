// calculations
document.getElementById("subtotal").textContent = subtotal;
document.getElementById("total").textContent = total;

let subtotal = 0;
let items = 0;

function updateTotal() {
  subtotal = 1300 * getTotalCourses();
  total = subtotal;
}
function getTotalCourses() {
  let totalCourses = 0;
  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById("course_" + i);
    totalCourses += parseInt(input.value);
  }
  return totalCourses;
}

for (let i = 1; i <= 6; i++) {
  const input = document.getElementById("course_" + i);
  input.addEventListener("change", function () {
    updateTotal();
  });
}
console.log(updateTotal());