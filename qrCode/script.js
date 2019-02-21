var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
 
QRCode.toCanvas(canvas, 'https://dghubbox.github.io', function (error) {
  if (error) console.error(error)
  console.log('success!');
})