import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListBar } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <FriendListBar>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendListBar>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
