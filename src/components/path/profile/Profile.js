
import PropTypes from 'prop-types';
import {ProfileContainer, Description, Avatar, Name, Info, Stats, StatsItem, Label} from './Profile.styled'

const Profile = ({ avatar, username, tag, location, stats }) => {
  return <ProfileContainer>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      
    />
        <Name>{username}</Name>
        <Info>{tag}</Info>
       <Info>{location}</Info>
  </Description>

  <Stats>
    <StatsItem>
      <Label className="label">Followers</Label>
         <Label className="quantity">{stats.followers }</Label>
    </StatsItem>
    <StatsItem>
      <Label className="label">Views</Label>
         <Label className="quantity">{stats.views}</Label>
    </StatsItem>
    <StatsItem>
      <Label className="label">Likes</Label>
         <Label className="quantity">{stats.likes}</Label>
    </StatsItem>
  </Stats>
</ProfileContainer>

  
}

  // "username": "Jacques Gluke",
  // "tag": "jgluke",
  // "location": "Ocho Rios, Jamaica",
  // "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  // "stats": {
  //   "followers": 5603,
  //   "views": 4827,
  //   "likes": 1308
  // }

/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;
