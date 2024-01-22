import {
  CLIMATE_IMPACT,
  SOCIAL_IMPACT,
  TEAM_SPIRIT,
  SUSTAINABLE_IT,
} from '../utils/constants';

const colors = {
  tags: {
    sustainable_it: '#57CF80',
    team_spirit: '#FFDA80',
    social_impact: '#AEE8C6',
    climate_impact: '#6BD6D6',
    white: '#FFFFFF',
    light_mode_blue: '#0070AD',
    light_mode_background: '#F4F8FB',
    dark_mode_light_blue: '#B2E4FF',
    dark_mode_card: '#003D61',
    dark_mode_background: '#002539',
    dark_mode_button: '#0070AD',
    dark_mode_button_border: '#009CF1',
    dark_mode_scenarios: '#00314D',
  },
};

export const getTagColor = (tag: string) => {
  switch (tag) {
    case SOCIAL_IMPACT:
      return colors.tags.social_impact;
    case TEAM_SPIRIT:
      return colors.tags.team_spirit;
    case CLIMATE_IMPACT:
      return colors.tags.climate_impact;
    case SUSTAINABLE_IT:
      return colors.tags.sustainable_it;
    default:
      return colors.tags.sustainable_it;
  }
};

export default colors;
