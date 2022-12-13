import PropTypes from 'prop-types'
import { FriendCard, FriendItem, Status, } from './FriendList.styled'
const getBgColor = variant => {
  return variant ? 'green' : 'red';
};
const FriendList = ({ friends }) => {
    return (
        <FriendCard>
            { friends.map(friend => ( 
                <FriendItem key={friend.id}>
                    <Status style={{ backgroundColor: getBgColor(friend.isOnline) }}>{friend.isOnline}</Status>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </FriendItem>))}
</FriendCard>  

  )  

}
FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })
 ),
    
 } 

export default FriendList;

//   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812