submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(){
  postcodeField = document.getElementById('postcode').value;
  vanillaAJAX(postcodeField);
})

function vanillaAJAX(postcode){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://sandbox.api.hub-box.com/v1/public/collectpoints/nearest?postcode=${postcode}`);
  xhr.send(null);

  xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) 
      // console.log(xhr.responseText); // 'This is the returned text.'
      var data = JSON.parse(xhr.responseText);
      var firstResult = data._embedded.collectpoints[0]
      var addressName = firstResult.name;
      var addressLine1 = firstResult.address.street1;
      var addressLine2 = firstResult.address.street2;
      var addressPostcode = firstResult.address.postcode;
      // console.log(firstResult);
      parent.postMessage(`${addressName},<br>${addressLine1},<br>${addressLine2},<br>${addressPostcode}`,"*")
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};