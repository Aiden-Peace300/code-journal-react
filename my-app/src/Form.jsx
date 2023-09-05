import './Form.css';
import image from './images/placeholder-image-square.jpg';
import { useState } from 'react';

// form component
export default function Form() {
  const [photoUrl, setPhotoUrl] = useState(image);

  //
  function handlePhotoUrl(event) {
    // BOOOOOKMARK COME BACK TO THIS
    photoUrl = setPhotoUrl(photoUrl.value);
    $image.src = photoUrl;
  }

  return (
    <form id="entryForm">
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={image}
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
              value={image}
              onChange={handlePhotoUrl}
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
