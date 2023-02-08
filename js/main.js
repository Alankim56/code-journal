var $photoUrl = document.querySelector('.photourl');
var $img = document.querySelector('.placeImage');
var $form = document.querySelector('.form');

$photoUrl.addEventListener('input', $photoInput);
function $photoInput(event) {
  $img.setAttribute('src', event.target.value);
}

var $title = document.querySelector('.title');
var $note = document.querySelector('.note');

$form.addEventListener('submit', $submit);
function $submit(event) {
  event.preventDefault();
  var $obj = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $note.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift($obj);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}
