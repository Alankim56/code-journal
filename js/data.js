/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (e) {
  var JSONdata = JSON.stringify(data);
  localStorage.setItem('new-storage2', JSONdata);
});

var $previousData = localStorage.getItem('new-storage2');
if ($previousData !== null) {
  data = JSON.parse($previousData);
}
