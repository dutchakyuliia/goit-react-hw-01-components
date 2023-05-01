import PropTypes from 'prop-types';
import css from './Profile.module.css';
import Stats from './Stats';
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
    <div className={css.description}>
    <img 
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p  className={css.name}>{username}</p>
     <p  className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
     <Stats followers={stats.followers}
        views={stats.views}
        likes={stats.likes}/>
  </div>
</div>
);

    Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    };

    export default Profile;