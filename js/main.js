var $photourl = document.querySelector('.photourl');
var $img = document.querySelector('.placeImage');
var $form = document.querySelector('.view-form');
var $title = document.querySelector('.title');
var $note = document.querySelector('.note');

$photourl.addEventListener('input', $photoInput);
function $photoInput(event) {
  $img.setAttribute('src', event.target.value);
}

$form.addEventListener('submit', $submit);
function $submit(event) {
  event.preventDefault();
  var $object = {
    title: $title.value,
    photourl: $photourl.value,
    note: $note.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift($object);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  var $li = renderEntry($object);
  $ulEntries.prepend($li);
  $form.reset();
  viewSwap('entries');
  toggleNoEntries();
}

function renderEntry($object) {
  var $li = document.createElement('li');
  $li.setAttribute('data-entry-id', $object.entryId);

  var $row = document.createElement('div');
  $row.className = 'row class';
  $li.appendChild($row);

  var $columnHalf = document.createElement('div');
  $columnHalf.className = 'column-half';
  $row.appendChild($columnHalf);

  var $imgTwo = document.createElement('img');
  $imgTwo.setAttribute('src', $object.photourl);
  $imgTwo.setAttribute('alt', 'placeholder');
  $columnHalf.appendChild($imgTwo);

  var $columnHalfTwo = document.createElement('div');
  $columnHalfTwo.className = 'column-half';
  $row.appendChild($columnHalfTwo);

  var h3 = document.createElement('h3');
  h3.textContent = $object.title;
  $columnHalfTwo.appendChild(h3);

  var $newIcon = document.createElement('i');
  $newIcon.setAttribute('class', 'fa fa-pen');
  $columnHalfTwo.appendChild($newIcon);

  var $p = document.createElement('p');
  $p.textContent = $object.note;
  $columnHalfTwo.appendChild($p);

  return $li;
}

document.addEventListener('DOMContentLoaded', function (entry) {

  for (var i = 0; i < data.entries.length; i++) {
    var renderEntryTest = renderEntry(data.entries[i]);
    $ulEntries.appendChild(renderEntryTest);
  }
  viewSwap(data.view);
  toggleNoEntries();
}
);

var $startButton = document.querySelector('.switch-entries');
$startButton.addEventListener('click', function (e) {
  viewSwap('entries');
});

var $newButton = document.querySelector('.btn-two');
$newButton.addEventListener('click', function (e) {
  viewSwap('entry-form');
});

var $saveButton = document.querySelector('.save-button');
$saveButton.addEventListener('click', function (e) {
  viewSwap('entries');
});

var $noEntries = document.querySelector('.zero-entries');
var $ulEntries = document.querySelector('.more-entries');

function toggleNoEntries() {
  if (data.entries.length) {
    $noEntries.classList.add('hidden');
    $ulEntries.classList.remove('hidden');

  } else {
    $noEntries.classList.remove('hidden');
    $ulEntries.classList.add('hidden');
  }
}

var $viewEntries = document.querySelectorAll('[data-view]');

function viewSwap(view) {
  data.view = view;
  for (var i = 0; i < $viewEntries.length; i++) {
    if ($viewEntries[i].getAttribute('data-view') === view) {
      $viewEntries[i].className = '';
    } else {
      $viewEntries[i].className = 'hidden';
    }
  }
}
