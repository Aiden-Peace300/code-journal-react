import { data } from './data.js';
import './Form.css';

export default function EntryList() {
  const newEntry = data.entries.map((entry) => (
    <li key={data.entries.entryId} className="row">
      <div className="column-half">
        <img src={entry.photoUrl} className="input-b-radius form-image" />
      </div>
      <div className="column-half">
        <h3>{entry.title}</h3>
        <p>{entry.notes}</p>
      </div>
    </li>
  ));
  return (
    <>
      <button>New</button>
      <ul>{newEntry}</ul>;
    </>
  );
}
