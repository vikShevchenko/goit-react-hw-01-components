import React from 'react';
import css from'./FriendsList.module.css';
import FriendCard from './FriendCard';

function FriendList({ friends }) {
  return (
    <>
      <ul className={css.friendsBlock}>
        {friends.map(data => (
        <FriendCard key={data.id}
        avatar={data.avatar}
        name={data.name} 
        isOnline={data.isOnline} />
        ))}
      </ul>
    </>
  );
}

export default FriendList;
