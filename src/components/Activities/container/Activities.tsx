import '../components/ActivitiesStyle.css';
import { useState } from 'react';
import ActivitiesComponent from '../components/ActivitiesComponent';
import {
  CLIMATE_IMPACT,
  SOCIAL_IMPACT,
  SUSTAINABLE_IT,
  TEAM_SPIRIT,
} from '../../../utils/constants';
import { CategoryDisplayedObject } from '../../../models/DisplayedCategory';
const currentDate = new Date(new Date().getTime() + 10 * 60000);
//will be replaced with back
const cardTemplate = [
  {
    title: 'Sustainability in Product Design',
    date: new Date(2024, 11, 4, 12, 30, 0, 0),
    tag: SOCIAL_IMPACT,
  },
  {
    title: 'Rugby and Agility Session',
    date: currentDate,
    tag: CLIMATE_IMPACT,
  },
  {
    title:
      'Collaboration with Cruz Roja Murcia - Christmas Solidarity Programm',
    date: currentDate,
    tag: SUSTAINABLE_IT,
  },
  {
    title: 'Sustainability in Product Design',
    date: currentDate,
    tag: SUSTAINABLE_IT,
  },
  {
    title: 'Sustainability in Product Design',
    date: new Date(2024, 11, 15, 12, 30, 0, 0),
    tag: TEAM_SPIRIT,
  },
  {
    title: 'Sustainability in Product Design',
    date: new Date(2024, 7, 6, 12, 30, 0, 0),
    tag: TEAM_SPIRIT,
  },
  {
    title: 'Sustainability in Product Design',
    date: new Date(2024, 11, 31, 12, 30, 0, 0),
    tag: SUSTAINABLE_IT,
  },
  {
    title: 'Sustainability in Product Design',
    date: new Date(2023, 11, 23, 12, 30, 0, 0),
    tag: SUSTAINABLE_IT,
  },
];

const categories = [TEAM_SPIRIT, CLIMATE_IMPACT, SUSTAINABLE_IT, SOCIAL_IMPACT];

export const Activities = () => {
  const CategoriesDisplayed = [];

  for (let i = 0; i < categories.length; i++) {
    CategoriesDisplayed.push({ category: categories[i], display: true });
  }
  //TO MINIMIZE CONTENT
  const [categoriesDisplayedState, setCategoriesDisplayedState] =
    useState<CategoryDisplayedObject[]>(CategoriesDisplayed);

  const toggleCategory = (category: string) => {
    const newCategoriesDisplayed = [...categoriesDisplayedState];
    const categoryDisplayed = newCategoriesDisplayed.find(
      (categoryDisplayed) => categoryDisplayed.category === category,
    );
    if (categoryDisplayed) {
      categoryDisplayed.display = !categoryDisplayed.display;
      setCategoriesDisplayedState(newCategoriesDisplayed);
    }
  };
  return (
    <>
      <ActivitiesComponent
        categories={categories}
        cardTemplate={cardTemplate}
        categoryTogled={categoriesDisplayedState}
        toggleCategory={toggleCategory}
      />
    </>
  );
};
