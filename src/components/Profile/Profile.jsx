import PropTypes from 'prop-types';
import css from './Profile.module.css';
import Stats from './Stats';
import user from './user.json'
const Profile = (
    {
        username,
        tag,
        location,
        avatar
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
     <Stats followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
  </div>
</div>
);

    Profile.propTypes = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string
    };

    export default Profile;