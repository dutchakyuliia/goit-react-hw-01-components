import FriendListItem from './FriendListItem';
import friends from './friends.json';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
const FriendList = ({ friend }) => (
    <ul className={css.list}>
    {' '}
    {friend}
    <FriendListItem
      avatar={friends.avatar}
      name={friends.name}
      isOnline={friends.isOnline}
    />
  </ul>
);
export default FriendList;
FriendList.propTypes = {
  friend: PropTypes.string,
};
