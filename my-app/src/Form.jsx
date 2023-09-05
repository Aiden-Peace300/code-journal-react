import './Form.css';
import image from './images/placeholder-image-square.jpg';
import { useState } from 'react';

// form component
export default function Form({ data }) {
  const [photoUrl, setPhotoUrl] = useState(image);
  const [formData, setFormData] = useState({
    title: '',
    notes: '',
  });

  const handlePhotoURLChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault(); // Preventing form submission

    const newEntry = {
      entryId: data.nextEntryId,
      title: formData.title,
      photoUrl,
      notes: formData.notes,
    };

    // Incrementing the nextEntryId for the next form submission
    data.nextEntryId++;

    // Adding the newEntry to the entries array
    data.entries.unshift(newEntry);

    // Resetting the preview image's src attribute back to the placeholder image
    setPhotoUrl(image);

    // Resetting the form (if you want to clear the form fields)
    // You can use the state to clear the form fields as well
    setFormData({
      title: '',
      notes: '',
    });
  }

  return (
    <form id="entryForm" onSubmit={handleSubmit({ data })}>
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={photoUrl}
            alt="image of entry image"
          />
        </div>
        <div className="row">
          <div className="column-half">
            <label className="margin-bottom-1 d-block" htmlFor="title">
              Title
            </label>

            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="form-title"
              name="form-title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
              Photo URL
            </label>

            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
              value={photoUrl}
              onChange={handlePhotoURLChange}
            />
          </div>
        </div>
      </div>
      <div className="row margin-bottom-1">
        <div className="column-full">
          <label className="margin-bottom-1 d-block" htmlFor="formNotes">
            Notes
          </label>
          <textarea
            required
            className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
            name="formNotes"
            id="formNotes"
            cols="30"
            rows="10"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="column-full d-flex justify-between">
          <button
            className="invisible delete-entry-button"
            type="button"
            id="deleteEntry">
            Delete Entry
          </button>
          <button className="input-b-radius text-padding purple-background white-text">
            SAVE
          </button>
        </div>
      </div>
    </form>
  );
}
