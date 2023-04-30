import friends from './friends.json';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
};

export default FriendListItem;
