import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendListItem/friends.json';
import FriendList from './FriendListItem/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from './Statistics/data.json';
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
      
      <Statistics title="UPLOAD STATS" stats={ data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={ transactions} />;
    </div>
  );
};
