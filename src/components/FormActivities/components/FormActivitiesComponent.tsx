import React from 'react';
import {
  CLIMATE_IMPACT,
  SOCIAL_IMPACT,
  SUSTAINABLE_IT,
  TEAM_SPIRIT,
} from '../../../utils/constants';
import './FormActivitiesStyle.css';
import selecFile from '../../../../src/assets/formImages/Vector.svg';
const categories = [SOCIAL_IMPACT, TEAM_SPIRIT, CLIMATE_IMPACT, SUSTAINABLE_IT];
import { getXSVG } from '../../../assets/formImages/getXs';
import files_icon from '../../../assets/formImages/files_icon.svg';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../elements/Dropdown/Dropdown';
interface Props {
  publishMyCard: () => void;
  canPublishCard: boolean;
  setTitle: (title: string) => void;
  setCategory: (category: string) => void;
  setDescription: (description: string) => void;
  setDate: (dateTime: string) => void;
  setTimeStart: (time: string) => void;
  setTimeEnd: (time: string) => void;

  online: boolean;
  setOnline: (online: boolean) => void;
  onlineLink: string;
  setOnlineLink: (onlineLink: string) => void;
  presential: boolean;
  setPresential: (presential: boolean) => void;
  placeName: string;
  setPlaceName: (placeName: string) => void;
  setPlaceURL: (placeURL: string) => void;
  setAvailablePlaces: (availablePlaces: number) => void;

  setEmail: (email: string) => void;
  canAddOrganizer: boolean;
  organizers: string[];
  handleOrganizerAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleOrganizerRemove: (
    event: React.MouseEvent<HTMLButtonElement>,
    category: string,
  ) => void;
}

export const FormActivitiesComponent: React.FC<Props> = (props) => {
  const {
    publishMyCard,
    canPublishCard,
    setTitle,
    setCategory,
    setDescription,
  } = props;
  const { setDate, setTimeStart, setTimeEnd } = props;
  const {
    setEmail,
    canAddOrganizer,
    organizers,
    handleOrganizerAdd,
    handleOrganizerRemove,
  } = props;
  const {
    online,
    setOnline,
    onlineLink,
    setOnlineLink,
    presential,
    setPresential,
  } = props;
  const { placeName, setPlaceName, setPlaceURL, setAvailablePlaces } = props;
  const checkPublish = (event: React.MouseEvent<HTMLInputElement>) => {
    const form = event.currentTarget.form;
    if (form) {
      const inputs = form.elements;

      // Check if all required inputs are filled
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i] as HTMLInputElement;

        if (input.required && !input.value) {
          return;
        } else if (input.type === 'url' && input.value.trim() !== '') {
          if (
            !input.value.startsWith('http://') &&
            !input.value.startsWith('https://')
          ) {
            alert('URL must start with http:// or https://');
            event.preventDefault();
            return;
          }
        }
      }

      // Check if at least one location is selected
      if (online === false && presential === false) {
        alert('At least one location must be selected');
        event.preventDefault();
        return;
      }
      event.preventDefault();
      // If all checks pass, call publishMyCard
      publishMyCard();
    }
  };

  return (
    <div className="FormActivitie">
      <div className="topForm">
        <div>
          <h2>Create new activity</h2>
          <div className='buttonContainer'>
            <button>
              <img src={files_icon}></img>Save as draft
            </button>
            <NavLink to="/manage/activities">
              <button>{getXSVG('CLOSE')}Close </button>
            </NavLink>
          </div>
        </div>
        <small>*Mandatory</small>
        <p>
          You are about to create a new activity. Please note that some of the
          following fields describing the activity cannot be modified once it
          has been published.
        </p>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="required">Activity name</label>
            <input
              type="text"
              placeholder="Activity name"
              maxLength={150}
              onChange={(event) => {
                setTitle(event.target.value);
                event.target.setCustomValidity('');
              }}
              onInvalid={(event) => {
                const inputElement = event.target as HTMLInputElement;
                inputElement.setCustomValidity(
                  'Activity name is a required field',
                );
              }}
              required
            />
            <small>
              &#9432; Max 150 characters. This field cannot be modified once it
              has been published.
            </small>
          </div>
          <div>
            <label htmlFor="required">Select category</label>
            <Dropdown
              type="category"
              valueList={categories}
              setCategory={setCategory}
            />
          </div>

          <div className="descriptionDiv">
            <label htmlFor="required">Description</label>
            <textarea
              placeholder="Description"
              onChange={(event) => {
                setDescription(event.target.value);
                event.target.setCustomValidity('');
              }}
              onInvalid={(event) => {
                const inputElement = event.target as HTMLInputElement;
                inputElement.setCustomValidity(
                  'Description is a required field',
                );
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="notRequired">Tags</label>
            <input
              type="text"
              style={{ width: '100%' }}
              placeholder="Create a tag to define the event"
            />
          </div>
          <div className="imageUploadContainer">
            <label htmlFor="imageUpload">Upload Image</label>
            <div>
              <button
                className="selectFileButton"
                onClick={(event) => event.preventDefault()}
              >
                <img
                  src={selecFile}
                  alt="selectFileIcon"
                  className="selectFileIcon"
                />
                Select File
              </button>
              <span>No file selected</span>
            </div>
          </div>
          <div>
            <label htmlFor="required">Date</label>
            <input
              type="date"
              name="date"
              onChange={(event) => {
                setDate(event.target.value);
                event.target.setCustomValidity('');
              }}
              required
            />
            <div className="timeDiv">
              <div>
                <label htmlFor="required">From</label>
                <input
                  type="time"
                  name="timeStart"
                  onChange={(event) => {
                    setTimeStart(event.target.value);
                    event.target.setCustomValidity('');
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="required">To</label>
                <input
                  type="time"
                  name="timeEnd"
                  onChange={(event) => {
                    setTimeEnd(event.target.value);
                    event.target.setCustomValidity('');
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div></div>
          <div className="expandableInputs">
            <div>
              <div>
                <label htmlFor="required">Location</label>
                <small>&#9432; At least one location must be selected</small>
              </div>

              <div className="checkBoxRow">
                <div className="checkRow">
                  <input
                    type="checkbox"
                    name="location"
                    className="checkinput"
                    value={online ? 'Online' : 'Not Online'}
                    onClick={() => setOnline(!online)}
                  ></input>
                  <label>Online event</label>
                </div>
                {online ? (
                  <>
                    <label htmlFor="required">Online meeting URL </label>
                    <input
                      type="url"
                      value={onlineLink}
                      placeholder="Enter the link"
                      onChange={(event) => {
                        setOnlineLink(event.target.value);
                        event.target.setCustomValidity('');
                      }}
                      onInvalid={(event) => {
                        const inputElement = event.target as HTMLInputElement;
                        inputElement.setCustomValidity(
                          'URL meeting is a required field',
                        );
                      }}
                      required
                    />
                  </>
                ) : null}
              </div>

              <div className="checkBoxRow">
                <div className="checkRow">
                  <input
                    type="checkbox"
                    name="location"
                    className="checkinput"
                    value={presential ? 'Presential' : 'NotPresential'}
                    onClick={() => setPresential(!presential)}
                  />
                  <label>Presential event</label>
                </div>
                {presential ? (
                  <>
                    <div className="checkInput">
                      <label htmlFor="required">Location Name</label>
                      <input
                        type="text"
                        value={placeName}
                        onChange={(event) => {
                          setPlaceName(event.target.value);
                          event.target.setCustomValidity('');
                        }}
                        required
                        placeholder="Enter the location"
                      />
                    </div>
                    <div className="checkInput">
                      <label htmlFor="notRequired">URL Location</label>
                      <input
                        type="url"
                        onChange={(event) => setPlaceURL(event.target.value)}
                        placeholder="Enter the URL"
                      />
                    </div>
                    <div className="checkInput">
                      <label htmlFor="required">Available Places </label>
                      <input
                        type="number"
                        min="0"
                        onChange={(event) =>
                          setAvailablePlaces(event.target.valueAsNumber)
                        }
                        required
                        placeholder="Set available places"
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="organizers">
              <label htmlFor="required">Organizers</label>
              <input
                type="email"
                placeholder="example@capgemini.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                  event.target.setCustomValidity('');
                }}
              />

              <button
                className={`addOrganizer ${
                  canAddOrganizer ? 'canAddOrganizer' : 'cantAddOganizer'
                }`}
                onClick={(event) => handleOrganizerAdd(event)}
                disabled={canAddOrganizer === false}
              >
                {getXSVG(canAddOrganizer ? 'ADD' : 'ADDDisabled')}
                <p>Add Organizer</p>
              </button>
              {organizers.map((organizer, index) => (
                <>
                  <div key={index} className="organizer">
                    <p>{organizer}</p>

                    <button
                      onClick={(event) =>
                        handleOrganizerRemove(event, organizer)
                      }
                      disabled={index === 0 && organizers.length === 1}
                    >
                      {getXSVG('REMOVE')}
                    </button>
                  </div>
                  {index === 0 ? (
                    <small style={{ marginTop: '-1rem' }}>
                      &#9432; The activity is automatically assigned to you. You
                      will be able to remove yourself as an organizer once you
                      assign someone else to the activity.
                    </small>
                  ) : null}
                </>
              ))}
            </div>
          </div>
          <input
            className={`publishButton ${canPublishCard ? 'canPublish' : ''}`}
            type="submit"
            value="Publish"
            onClick={(event) => checkPublish(event)}
            disabled={!canPublishCard}
          />
        </form>
      </div>
    </div>
  );
};
