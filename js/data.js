/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (e) {
  var JSONdata = JSON.stringify(data);
  localStorage.setItem('code-storage', JSONdata);
});

var $previousData = localStorage.getItem('code-storage');
if ($previousData !== null) {
  data = JSON.parse($previousData);
}
