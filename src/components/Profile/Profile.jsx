import PropTypes from 'prop-types';

const Profile = (
    {
        username,
        tag,
        location,
        avatar,
        stats
    }
) => (
<div className="profile">
  <div className="description">
    <img 
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p  className="name">{username}</p>
     <p  className="tag">{tag}</p>
     <p   className="location">{location}</p>
  </div>

  <ul  className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats}1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats}2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats}3000</span>
    </li>
  </ul>
</div>
);

    Profile.propTypes = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.string,
    };

    export default Profile;