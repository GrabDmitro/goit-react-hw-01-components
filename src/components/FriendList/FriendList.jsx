import PropTypes from 'prop-types';
import { Item, List, Name, Status } from './FriendList.styled';

const FriendListItem = ({ friendData }) => {
  return (
    <Item>
      <Status isOnline={friendData.isOnline} />
      <img src={friendData.avatar} alt="User avatar" width="48" />
      <Name>{friendData.name}</Name>
    </Item>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendListItem friendData={friend} key={friend.id} />;
      })}
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
