const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
    
    const key = e.key;
 
    if (key === alphabet[index]) {
      index++;
      
      if (index === alphabet.length) {
        alert("Hurray!");
 
        index = 0;
      }
    } else {
      index = 0;
    }
    
  })
}
