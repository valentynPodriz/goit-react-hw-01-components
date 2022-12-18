import PropTypes from 'prop-types';
import { FriendItem, Status } from './FriendListItem.styled';
const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <Status status={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
