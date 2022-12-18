import user from '../to/user';
import data from '../to/data';
import friends from '../to/friends';
import Profile from './path/profile/Profile';
import Statistics from './path/statistics/Statistics';
import FriendList from './path/friendList/FriendList';
import transactions from '../to/transactions';
import TransactionHistory from './path/transactionHistory/TransactionHistory'


 const App = () => {
  return ( 
    <div
      style={{
        padding: '30px',
        backgroundColor: '#F5F5F5',
      }}>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
 
  );   
};

export default App;
