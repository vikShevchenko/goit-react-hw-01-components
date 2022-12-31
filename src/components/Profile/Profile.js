import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({
  username,
  tag,
  location,
  avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <div className="profile">
        <div className="description">
          <img
            src={avatar} // 
            alt="User avatar"
            className="avatar"
          />
          <h1 className="name">{username}</h1>
          <h3 className="tag">@{tag}</h3>
          <h3 className="location">{location}</h3>
        </div>

        <ul className="stats">
          <li>
            <h4 className="label">Followers </h4>
            <h3 className="quantity">{followers}</h3>
          </li>
          <li>
            <h4 className="label">Views</h4>
            <h3 className="quantity">{views}</h3>
          </li>
          <li>
            <h4 className="label">Likes</h4>
            <h3 className="quantity">{likes}</h3>
          </li>
        </ul>
      </div>
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
