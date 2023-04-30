import FriendListItem from './FriendListItem'
import friends from './friends.json';

const FriendList = ({ friend }) => (
    <ul className="friend-list"> {friend}
        <FriendListItem avatar={friends.avatar} name={friends.name} isOnline={friends.isOnline}
        />
</ul>
);
export default FriendList;