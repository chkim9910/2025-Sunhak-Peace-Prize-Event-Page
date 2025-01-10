// Function to check if today is the target date
function isTargetDate() {
  const targetDate = new Date(2025, 0, 10); // 2025년 1월 15일 (월은 0부터 시작)
  const today = new Date();
  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
}

// // Function to show the popup
// function showPopup() {
//   const popup = document.getElementById("popup");
//   const overlay = document.getElementById("popup-overlay");
//   popup.style.display = "block";
//   overlay.style.display = "block";
// }

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
}

// jQuery to display the popup only on the target date
$(function () {
  // Display the popup if today is the target date
  if (isTargetDate()) {
    showPopup();
  }
});
