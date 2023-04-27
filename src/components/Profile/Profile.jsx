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
            <p className="location">{location}</p>
            
  </div>
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