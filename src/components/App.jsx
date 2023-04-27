import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Stats from './Stats/Stats'
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
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
 <Stats
    followers={user.stats.followers} 
     views={user.stats.views} 
     likes= {user.stats.likes }
      />

      <Statistics
        title
        label = {data.label}
        percentage ={data.percentage} 
      />
    </div>
  );
};
