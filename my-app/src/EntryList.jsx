import { data } from './data.js';

export default function EntryList() {
  const newEntry = data.entries.map((entry) => (
    <li key={data.entryId} className="row">
      <div className="column-half">
        <img src={entry.photoUrl} className="input-b-radius form-image" />
      </div>
      <div className="column-half">
        <h3>{entry.title}</h3>
        <p>{entry.notes}</p>
      </div>
    </li>
  ));
  return <ul>{newEntry}</ul>;
}
