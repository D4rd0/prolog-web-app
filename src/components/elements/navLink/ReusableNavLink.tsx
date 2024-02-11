import { NavLink } from 'react-router-dom';

const navLinkStyle = {
  color: '#707070',
  display: 'flex',
  alignItems: 'center',
};

const activeNavLinkStyle = {
  color: '#0070AD',
  display: 'flex',
  alignItems: 'center',
};

interface reusable {
  url: string;
  src?: string;
  filter: boolean;
  page?: string;
}

interface reusableAvatar {
  url: string;
  src: string;
  alt: string;
}

export const ReusableNavLink = (reusable: reusable) => {
  return (
    <NavLink
      to={reusable.url}
      style={({ isActive }) => {
        return isActive
          ? { ...navLinkStyle, ...activeNavLinkStyle }
          : navLinkStyle;
      }}
    >
      <img
        src={reusable.src}
        className="iconMargin"
        style={{
          filter: reusable.filter
            ? 'brightness(0) saturate(100%) invert(22%) sepia(65%) saturate(5315%) hue-rotate(186deg) brightness(93%) contrast(103%)'
            : 'none',
        }}
      />
      {reusable.page ? (
        <span>
          {reusable.page}
        </span>
      ) : (
        ''
      )}
    </NavLink>
  );
};

export const ReusableNavLinkAvatar = (reusable: reusableAvatar) => {
  return (
    <NavLink
      to={reusable.url}
      style={({ isActive }) => {
        return isActive
          ? { ...navLinkStyle, ...activeNavLinkStyle }
          : navLinkStyle;
      }}
    >
      <img src={reusable.src} alt={reusable.alt} className="avatarImg" />
    </NavLink>
  );
};
