var socket = io()
var $requestForm = $('#request')
var $results = $('#results')

$requestForm.on('click', function(event) {
  event.preventDefault()
  socket.emit('showInfo')
  $requestForm.hide()
  document.getElementById("placeholder").innerHTML = "here is the info you seek";
})
