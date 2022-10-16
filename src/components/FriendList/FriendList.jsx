import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friendsArr }) => {
  return (
    <ul className={css.friendList}>
      {friendsArr.map(friend => (
        <FriendListItem key={friend.id} friendObj={friend} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friendsArr: PropTypes.array.isRequired,
};
