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
    
    console.log(e.key);
    
    const input = document.querySelector('input');
 
    input.addEventListener('keydown', function(e) {
      console.log(e.key);
    });
    
    
    
  })
}
