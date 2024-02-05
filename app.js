// Sit number decrease
document.querySelectorAll(".courses button").forEach((button) => {
  button.addEventListener("click", function () {
    const course = button.closest(".courses");
    const seatCountElement = course.querySelector(".people p");
    let seatCount = parseInt(seatCountElement.textContent);
    if (seatCount > 0) {
      seatCount--;
      seatCountElement.textContent = `${seatCount}seats`;
    } else {
      alert("No more seats");
    }
  });
});

document.getElementById("buyButton").addEventListener("click", function () {
  addInputedValue();
});

// remove
document.querySelectorAll(".close img").forEach((img) => {
  img.addEventListener("click", function () {
    const cartItem = img.closest(".cart_section");
    cartItem.parentElement.remove();
    updateTotal();
  });
});