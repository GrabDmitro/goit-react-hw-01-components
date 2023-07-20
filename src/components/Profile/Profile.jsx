import {
  Avatar,
  Container,
  Location,
  Description,
  Name,
  Tag,
  Stats,
  StatSection,
  Lable,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatSection>
          <Lable>Followers</Lable>
          <Quantity>{stats.followers}</Quantity>
        </StatSection>
        <StatSection>
          <Lable>Views</Lable>
          <Quantity>{stats.views}</Quantity>
        </StatSection>
        <StatSection>
          <Lable>Likes</Lable>
          <Quantity>{stats.likes}</Quantity>
        </StatSection>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
