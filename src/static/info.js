var socket = io()
var $typeForm = $('#questionType')
var $questionField = $('#qtype')
var $lengthForm = $('#gameLength')
var $lengthField = $('#numquestions')
var data = {
  category = null,
  gamelength  = 15
}

$typeForm.on('submit', function(event) {
  event.preventDefault()
  $typeForm.hide()
  data.category = $questionField.val()
  socket.emit(changeCat, data)
})

$typeForm.on('submit', function(event) {
  event.preventDefault()
  $lengthForm.hide()
  data.gamelength = $lengthField.val()
  socket.emit(changeLen, data)
})
