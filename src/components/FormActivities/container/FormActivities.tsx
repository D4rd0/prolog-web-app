import React, { useState } from 'react';
import { FormActivitiesComponent } from '../components/FormActivitiesComponent';
import { CardInfo, Duration } from '../../../models/CardInfo';

export const FormActivities = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>();
  const [canPublish, setCanPublish] = useState(false);
  const [title, setTitle] = useState('My Form Activities');
  const [category, setCategory] = useState('Social Impact');
  const [description, setDescription] = useState('My Form Activities');
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');

  const [online, setOnline] = useState(false);
  const [onlineLink, setOnlineLink] = useState('');
  const [presential, setPresential] = useState(false);
  const [placeName, setPlaceName] = useState('');
  const [placeURL, setPlaceURL] = useState('');
  const [availablePlaces, setAvailablePlaces] = useState(-1);

  const [email, setEmail] = useState('');
  const [canAddOrganizer, setCanAddOrganizer] = useState(false);
  const [organizers, setOrganizers] = useState<string[]>([
    'youremail@capgemini.com',
  ]);

  React.useEffect(() => {
    const checkEmail = (email: string) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return (
        emailRegex.test(email) &&
        email.includes('@capgemini.com') &&
        !organizers.includes(email)
      );
    };
    setCanAddOrganizer(checkEmail(email));
  }, [email, organizers]);
  const handleOrganizerAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOrganizers([...organizers, email]);
  };
  const handleOrganizerRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    organizer: string,
  ) => {
    event.preventDefault();

    setOrganizers(organizers.filter((org) => org !== organizer));
  };

  React.useEffect(() => {
    const canPublishCard = (): boolean => {
      return (
        title.trim() !== '' &&
        category.trim() !== '' &&
        description.trim() !== '' &&
        date != null &&
        timeStart.trim() !== '' &&
        timeEnd.trim() !== '' &&
        organizers.length > 0 &&
        ((online && onlineLink.trim() !== '') ||
          (presential && placeName.trim() !== '' && availablePlaces > 0))
        // Agrega aquí más campos si son necesarios
      );
    };
    const updateMyCard = () => {
      const newDate = new Date(date);
      newDate.setHours(Number(timeStart.split(':')[0]));
      const duration: Duration = {
        timeStart: timeStart,
        timeEnd: timeEnd,
      };
      const newCardInfo = new CardInfo(
        title,
        category,
        description,
        newDate,
        organizers,
        duration,
      );
      online
        ? (newCardInfo.onlineEvent = onlineLink)
        : (newCardInfo.onlineEvent = undefined);

      presential
        ? (newCardInfo.presentialEvent = {
            placeName: placeName,
            urlPlace: placeURL,
            availableSeats: availablePlaces ? availablePlaces : -1,
          })
        : (newCardInfo.presentialEvent = undefined);
      setCardInfo(newCardInfo);
      console.log('cardInfo Updated', newCardInfo);
    };
    updateMyCard();
    setCanPublish(canPublishCard());
  }, [
    title,
    category,
    description,
    date,
    timeStart,
    timeEnd,
    online,
    onlineLink,
    presential,
    placeName,
    placeURL,
    availablePlaces,
    organizers,
  ]);

  const publishMyCard = () => {
    console.log('cardInfo Publised', cardInfo);
    alert('Card Published ');
    //First a POP UP to confirmar
    //Sent cardInfo to the API
  };
  // const draftMyCard = (event: React.MouseEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   console.log('cardInfo draft', cardInfo);
  //   //Sent cardInfo to the API
  // };
  return (
    <FormActivitiesComponent
      publishMyCard={publishMyCard}
      setTitle={setTitle}
      setCategory={setCategory}
      setDescription={setDescription}
      setDate={setDate}
      setTimeStart={setTimeStart}
      setTimeEnd={setTimeEnd}
      online={online}
      setOnline={setOnline}
      onlineLink={onlineLink}
      setOnlineLink={setOnlineLink}
      presential={presential}
      placeName={placeName}
      setPlaceName={setPlaceName}
      setPlaceURL={setPlaceURL}
      setAvailablePlaces={setAvailablePlaces}
      setPresential={setPresential}
      organizers={organizers}
      handleOrganizerAdd={handleOrganizerAdd}
      handleOrganizerRemove={handleOrganizerRemove}
      setEmail={setEmail}
      canAddOrganizer={canAddOrganizer}
      canPublishCard={canPublish}
    />
  );
};

export default FormActivities;
