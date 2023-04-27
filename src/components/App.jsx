import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Stats from './Profile/Stats'

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
    followers={user.followers} 
     views={user.views} 
     likes= {user.likes }
      />
    </div>
  );
};
