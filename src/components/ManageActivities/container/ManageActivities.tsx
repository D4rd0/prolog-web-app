import { ManageActivitiesComponent } from '../components/ManageActivitiesComponent';
import {
  CLIMATE_IMPACT,
  SOCIAL_IMPACT,
  TEAM_SPIRIT,
  SUSTAINABLE_IT,
} from '../../../utils/constants';
import { useState } from 'react';
import { CardActivity as CA } from '../../../models/CardActivity.ts';

const currentDate = new Date();
currentDate.setMinutes(currentDate.getMinutes() + 10);
const cards = [
  {
    title: 'Sustainability in Product Design',
    date: new Date(2030, 11, 4, 12, 30, 0, 0),
    tag: TEAM_SPIRIT,
  },
  {
    title: 'Rugby and Agility Session',
    date: new Date(2027, 11, 4, 12, 30, 0, 0),
    tag: SOCIAL_IMPACT,
  },
  {
    title:
      'Collaboration with Cruz Roja Murcia - Christmas Solidarity Programm',
    date: new Date(2023, 11, 4, 12, 30, 0, 0),
    tag: SUSTAINABLE_IT,
  },
  {
    title: 'Sustainability in Product Design',
    date: new Date(2025, 11, 4, 12, 30, 0, 0),
    tag: CLIMATE_IMPACT,
  },
];

export const ManageActivities = () => {
  const [filterCards, setFilterCards] = useState<CA[]>(cards);
  const [search, setSearch] = useState<string>('');
  const updateCards = () => {
    const newCards = cards.filter(
      (card) =>
        card.title.toLocaleLowerCase().includes(search.toLowerCase()) ||
        card.tag.toLocaleLowerCase().includes(search.toLowerCase()),
    );
    setFilterCards(newCards);
  };
  return (
    <>
      <ManageActivitiesComponent
        updateCards={updateCards}
        filterCards={filterCards}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
};
