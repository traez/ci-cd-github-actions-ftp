(function () {
    const button = document.getElementById("colorToggleBtn");
    let isBlue = true;
    
    button.addEventListener("click", function () {
      // Toggle between lightblue and lightcoral
      document.body.style.backgroundColor = isBlue ? "lightcyan" : "lightblue";
      isBlue = !isBlue; // Flip the boolean
    });
    
})();

/*
import ReactModal from 'react-modal';
*/
