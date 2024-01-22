import moment from 'moment';
import { Tag } from '../Tag/Tag.tsx';
import { getTagColor } from '../../../assets/colors.tsx';
import './CardActivityStyle.css';

import { CardActivity as CA } from '../../../models/CardActivity.ts';

export const CardActivity: React.FC<CA> = (cardActivity) => {
  const { title, date, tag } = cardActivity;

  return (
    <>
      <div className="cardActivity">
        <div className="partsCards">
          <div>
            <time>{moment(date).format('DD/MM/YYYY · LT')}</time>
            <div className="tagsInsideCard">
              <Tag
                name={tag}
                selected={false}
                isSelectable={false}
                color={getTagColor(tag)}
              />
            </div>
          </div>
          <div>
            <h4 className="cardsName">{title}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
