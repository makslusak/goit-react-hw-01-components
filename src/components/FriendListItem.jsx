import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friendObj }) => {
  const { isOnline, avatar, name } = friendObj;
  return (
    <li class="item">
      <span class="status">{isOnline ? 'Online' : 'Ofline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
