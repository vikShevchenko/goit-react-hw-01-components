import React from 'react';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types'

function FriendCard({ avatar, name, isOnline }) {
  return (
    <>
      <li className={css.frandItem}>
        <span className={css.status}>
          {isOnline ? (
            <span className={css.online} />
          ) : (
            <span className={css.ofline} />
          )}
        </span>
        <img
          className={css.frandAvatar}
          src={avatar}
          alt="User avatar"
        />
        <p className={css.friendName}>{name}</p>
      </li>
    </>
  );
}

export default FriendCard;

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}