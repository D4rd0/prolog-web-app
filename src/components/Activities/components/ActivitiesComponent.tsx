import React from 'react';
import { CardActivity } from '../../elements';
import { getTagSVG } from '../../../assets/categories/categories';
import getArrowSVG from '../../../assets/arrows/arrows';
import { CardActivity as CA } from '../../../models/CardActivity.ts';
import { CategoryDisplayedObject } from '../../../models/DisplayedCategory.ts';

interface Props {
  categories: string[];
  cardTemplate: CA[];
  categoryTogled: CategoryDisplayedObject[];
  toggleCategory: (category: string) => void;
}

export const ActivitiesComponent: React.FC<Props> = (props) => {
  const { categories, cardTemplate, categoryTogled, toggleCategory } = props;

  const filterCards = (category: string) => {
    const filteredCards = cardTemplate
      .filter((card) => card.tag === category && card.date >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return filteredCards;
  };
  const isDisplayed = (category: string) => {
    const categoryDisplayed = categoryTogled.find(
      (categoryDisplayed) => categoryDisplayed.category === category,
    );
    if (categoryDisplayed) {
      return categoryDisplayed.display;
    }
    return false;
  };
  const addClassGrid = (category: string) => {
    return `cardsGrid ${!isDisplayed(category) ? 'hideCategory' : ''}`;
  };
  return (
    <>
      <div className="activities">
        <div>
          <div className="titleofPage">
            <h2 className="title">Activities</h2>
          </div>
        </div>

        <div>
          {categories.map((category) => {
            return (
              <div key={category}>
                <div className="titleOfCategory">
                  <div className="nameOfCategory">
                    <p>{category}</p>
                    <img
                      src={getTagSVG(category)}
                      className="svgImg"
                      alt="Category Icon"
                    />
                  </div>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="categoryDisplayButton"
                  >
                    {getArrowSVG(isDisplayed(category) ? 'up' : 'down')}
                  </button>
                </div>
                <div className={addClassGrid(category)}>
                  {filterCards(category).map((card, index) => {
                    return (
                      <CardActivity
                        key={index}
                        title={card.title}
                        date={card.date}
                        tag={card.tag}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ActivitiesComponent;
