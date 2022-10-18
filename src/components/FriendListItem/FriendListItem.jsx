import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friendObj }) => {
  const { isOnline, avatar, name } = friendObj;
  return (
    <li className={css.item}>
      <span className="status">{isOnline ? 'Online' : 'Ofline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friendObj: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
