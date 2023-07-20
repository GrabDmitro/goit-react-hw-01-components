import { Profile } from 'components/Profile/Profile';
import user from '../../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data';
import friends from '../../friends';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../transactions';

export const App = () => {
  return (
    //<SectionContainer></SectionContainer>
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions} />
    </>
  );
};
