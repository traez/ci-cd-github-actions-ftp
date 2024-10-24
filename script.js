(function () {
    const button = document.getElementById("colorToggleBtn");
    const buttonColorToggleBtn = document.getElementById("buttonColorToggleBtn");
    let isBlue = true;
    let isButtonBlue = true;
    
    button.addEventListener("click", function () {
      // Toggle between lightblue and lightcoral
      document.body.style.backgroundColor = isBlue ? "lightcyan" : "lightblue";
      isBlue = !isBlue; // Flip the boolean
    });

     // Toggle button color
  buttonColorToggleBtn.addEventListener("click", function () {
    button.style.backgroundColor = isButtonBlue ? "#ff5733" : "#008cba"; // Toggle color
    isButtonBlue = !isButtonBlue;
  });
    
})();


