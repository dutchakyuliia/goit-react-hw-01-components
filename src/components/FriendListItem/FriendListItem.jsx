import friends from './friends.json';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  
  return friends.map(friend => {
    return (<li className={css.item} key={friend.id}>
      {friend.isOnline ? (
        <span className={css.active}>{friend.isOnline}</span>
      ) : (
        <span className={css.nonActive}>{friend.isOnline}</span>
      )}

      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>)
    
});
};

export default FriendListItem;
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
