import React from 'react';
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

const ReusableNavLink = (props) => {
  const { url, src, filter, page } = props;
  return (
    <NavLink
      to={url}
      style={({ isActive }) => {
        return isActive
          ? { ...navLinkStyle, ...activeNavLinkStyle }
          : navLinkStyle;
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
          ? { ...navLinkStyle, ...activeNavLinkStyle }
          : navLinkStyle;
      }}
    >
      <img src={src} alt={alt} className="avatarImg" />
    </NavLink>
  );
};

export { ReusableNavLink, ReusableNavLinkAvatar };
