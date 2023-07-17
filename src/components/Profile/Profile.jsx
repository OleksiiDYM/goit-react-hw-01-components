import {
  ProfileWrapper,
  Description,
  Avatar,
  Username,
  DescriptionText,
  Stats,
  StatItem,
  StatItemLabel,
  StatItemValue,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileWrapper>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Username>{username}</Username>
      <DescriptionText>@{tag}</DescriptionText>
      <DescriptionText>{location}</DescriptionText>
    </Description>

    <Stats>
      <StatItem>
        <StatItemLabel>Followers</StatItemLabel>
        <StatItemValue>{stats.followers}</StatItemValue>
      </StatItem>
      <StatItem>
        <StatItemLabel>Views</StatItemLabel>
        <StatItemValue>{stats.views}</StatItemValue>
      </StatItem>
      <StatItem>
        <StatItemLabel>Likes</StatItemLabel>
        <StatItemValue>{stats.likes}</StatItemValue>
      </StatItem>
    </Stats>
  </ProfileWrapper>
);

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
