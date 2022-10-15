import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friendsArr }) => {
  return (
    <ul class="friend-list">
      {friendsArr.map(friend => (
        <FriendListItem key={friend.id} friendObj={friend} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friendsArr: PropTypes.array,
};
