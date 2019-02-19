// Create IE + others compatible event handler
const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
const eventer = window[eventMethod];
const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
const messageDisplay = document.getElementById('display');

// Listen to message from child window
eventer(messageEvent,function(e) {
  messageDisplay.innerHTML = e.data;
  // console.log('parent received message!:  ',e.data);
},false);