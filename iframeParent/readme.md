# Cross Domain post.message();

## Child (iframe / widget)
* On submit queries the public HubBox API
* Posts message to parent 

## Parent
* Hosted here - https://dghubbox.neocities.org/
* Links to iframe on github pages
* Post with neocities API https://neocities.org/api
* `curl -F "index.html=@parent/index.html" "https://dghubbox:PASS@neocities.org/api/upload"`

```js
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
```