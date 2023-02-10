/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', $serializedData);
function $serializedData(event) {
  var JSONstorage = window.localStorage;
  var JSONdata = JSON.stringify(data);
  JSONstorage.setItem('local-storage', JSONdata);
}

var $data = localStorage.getItem('local-storage');
if ($data !== null) {
  data = JSON.parse($data);
}
