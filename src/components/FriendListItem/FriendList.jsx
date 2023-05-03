import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
const FriendList = ({ friends }) => (
    <ul className={css.list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ))}
    
  </ul>
);
export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
};
