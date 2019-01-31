const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

const checkKeyCode = (event) => {
  const keyPressed = event.keyCode
  if (keyPressed === code[tracker]){
    tracker += 1
  } else {
    tracker = 0
  }
  console.log(tracker)
  if (tracker === code.length){
    alert("You've cracked the Konami Code!")
  }
}


function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', checkKeyCode)

}

init()