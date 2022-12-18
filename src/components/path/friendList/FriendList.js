import PropTypes from 'prop-types';
import { FriendCard } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendCard>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendCard>
  );
};
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
