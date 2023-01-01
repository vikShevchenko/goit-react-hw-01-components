import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar} 
          alt="User avatar"
          className={css.avatar}
        />
        <h1 className={css.name}>{username}</h1>
        <h3 className={css.tag}>@{tag}</h3>
        <h3 className={css.location}>{location}</h3>
      </div>

      <ul className={css.stats}>
        <li>
          <h4 className={css.label}>Followers </h4>
          <h3 className={css.quantity}>{followers}</h3>
        </li>
        <li>
          <h4 className={css.label}>Views</h4>
          <h3 className={css.quantity}>{views}</h3>
        </li>
        <li>
          <h4 className={css.label}>Likes</h4>
          <h3 className={css.quantity}>{likes}</h3>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
