import './ManageActivities.css';
import SearchBarIcon from '../../../assets/manage_activities/search_icon.svg';
import PlusIconWhite from '../../../assets/manage_activities/plus_icon_white.svg';
import PlusIconBlue from '../../../assets/manage_activities/plus_icon_blue.svg';

import Colors from '../../../assets/colors.tsx';
import React, { useEffect, useState } from 'react';
import { CardActivity } from '../../elements/index.tsx';
import { CardActivity as CA } from '../../../models/CardActivity.ts';
import { ReusableButton } from '../../elements/ReusableButton/ReusableButton.tsx';
import { NavLink } from 'react-router-dom';

interface Props {
  updateCards: () => void;
  filterCards: CA[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const ManageActivitiesComponent: React.FC<Props> = ({
  filterCards,
  updateCards,
  search,
  setSearch,
}) => {
  const [activeButton, setActiveButton] = useState<string>('draftsButton');
  const isActive = (id: string) => id === activeButton;

  filterCards.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  useEffect(() => {
    updateCards();
  }, [search]);

  const handleClick = (id: string) => {
    setActiveButton(id);
  };

  return (
    <>
      <div
        className="page"
        style={{ backgroundColor: Colors.tags.light_mode_background }}
      >
        <div className="topRow">
          <h2>Manage activities</h2>
          <div className="searchBarCreateActivity">
            <div>
              <button
                className="searchButton"
                type="submit"
                name="searchButton"
              >
                <img src={SearchBarIcon} alt="Search Icon" />
              </button>
              <input
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                className="searchBar"
                type="text"
                placeholder="Search activity or category"
              />
            </div>
            <div>
              <NavLink to="/manage/activities/form">
                <ReusableButton
                  className="createActivity"
                  label="Create new activity"
                  img={PlusIconWhite}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="scenarios">
          <ReusableButton
            className="scenariosButton"
            label="DRAFTS"
            isActive={isActive('draftsButton')}
            onClick={() => handleClick('draftsButton')}
          />
          <ReusableButton
            className="scenariosButton"
            label="PUBLISHED ACTIVITIES"
            isActive={isActive('publishedActivitiesButton')}
            onClick={() => handleClick('publishedActivitiesButton')}
          />
          <ReusableButton
            className="scenariosButton"
            label="ACTIVITY REPORT"
            isActive={isActive('activityReportButton')}
            onClick={() => handleClick('activityReportButton')}
          />
          <ReusableButton
            className="scenariosButton"
            label="CLOSED ACTIVITIES"
            isActive={isActive('closedActivitiesButton')}
            onClick={() => handleClick('closedActivitiesButton')}
          />
        </div>
        <div className="cards">
          {filterCards.length === 0 ? (
            <div className="noMatching">
              <p className="noMatchingText">
                Oh! It seems there's nothing planned, should we start creating
                an activity?
              </p>
              <NavLink
                to="/manage/activities/form"
                className="noMatchCreateActivity"
              >
                <ReusableButton
                  className="noMatchingCreateActivity"
                  label="Create new activity"
                  isActive={false}
                  img={PlusIconBlue}
                />
              </NavLink>
            </div>
          ) : (
            filterCards.map((card, index) => (
              <CardActivity
                title={card.title}
                tag={card.tag}
                date={card.date}
                key={index}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
