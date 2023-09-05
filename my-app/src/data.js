let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
window.addEventListener('beforeunload', function () {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});
const localData = JSON.parse(localStorage.getItem('code-journal-data'));
if (localData) {
  data = localData;
}
