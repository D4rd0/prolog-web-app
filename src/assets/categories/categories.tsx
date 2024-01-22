import {
  CLIMATE_IMPACT,
  SOCIAL_IMPACT,
  TEAM_SPIRIT,
  SUSTAINABLE_IT,
} from '../../utils/constants';
import ClimateImpact from './climate_impact.svg';
import SocialImpact from './social_impact.svg';
import TeamSpirit from './team_spirit.svg';

export const getTagSVG = (tag: string) => {
  switch (tag) {
    case SOCIAL_IMPACT:
      return SocialImpact;
    case TEAM_SPIRIT:
      return TeamSpirit;
    case CLIMATE_IMPACT:
      return ClimateImpact;
    case SUSTAINABLE_IT:
      return ClimateImpact;
    default:
      return '';
  }
};
export default getTagSVG;
