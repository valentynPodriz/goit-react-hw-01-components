import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Info,
  Stats,
  StatsItem,
  Label,
} from './Profile.styled';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatsItem>
          <Label className="label">Followers</Label>
          <Label className="quantity">{followers}</Label>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Label className="quantity">{views}</Label>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Label className="quantity">{likes}</Label>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
