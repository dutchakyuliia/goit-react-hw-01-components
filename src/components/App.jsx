import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendListItem/friends.json';
import FriendList from './FriendListItem/FriendList';
import TransactionTable from './TransactionHistory/TransactionTable';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics />
      <FriendList friends={friends} />;
      <TransactionTable />;
    </div>
  );
};
