import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Stats from './Profile/Stats';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import friends from './FriendListItem/friends.json';
import FriendList from './FriendListItem/FriendList';
import TransactionTable from './TransactionHistory/TransactionTable';
import transactions from './TransactionHistory/transactions.json';
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
      
      <Statistics title stats />
      <FriendList friends={friends} />;
      <TransactionTable />;
    </div>
  );
};
