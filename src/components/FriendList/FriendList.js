import React from 'react';
import css from'./FriendsList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types'

function FriendList({ friends }) {

  return (
    <>
      <ul className={css.friendsBlock}>
        {friends.map(data => (
        <FriendListItem key={data.id}
        avatar={data.avatar}
        name={data.name} 
        isOnline={data.isOnline} />
        ))}
      </ul>
    </>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired

    })
  )
}



