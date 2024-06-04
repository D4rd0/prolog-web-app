import React from 'react';
import { NavLink } from 'react-router-dom';


const navLinkStyle = {
  color: '#707070',
  display: 'flex',
  alignItems: 'center',
};

const ReusableNavLink = (props) => {
  const { url, src, filter, page, color = '#707070' } = props;
  const linkStyle = { color, display: 'flex', alignItems: 'center' };

  return (
    <NavLink
      to={url}
      style={({ isActive }) => {
        return isActive
          ? { ...linkStyle, fontWeight: 'bold' }
          : linkStyle;
      }}
    >
      <img
        src={src}
        className="iconMargin"
        style={{
          filter: filter
            ? 'brightness(0) saturate(100%) invert(22%) sepia(65%) saturate(5315%) hue-rotate(186deg) brightness(93%) contrast(103%)'
            : 'none',
        }}
      />
      {page ? (
        <span>
          {page}
        </span>
      ) : (
        ''
      )}
    </NavLink>
  );
};

const ReusableNavLinkAvatar = (props) => {
  const { url, src, alt } = props;
  return (
    <NavLink
      to={url}
      style={({ isActive }) => {
        return isActive
          ? { ...navLinkStyle, color: '#0070AD', fontWeight: 'bold' }
          : navLinkStyle;
      }}
    >
      <img src={src} alt={alt} className="avatarImg" />
    </NavLink>
  );
};

export { ReusableNavLink, ReusableNavLinkAvatar };
