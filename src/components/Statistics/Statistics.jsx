import { ElemBody, Item, List, Title } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <ElemBody>
      <Title>Upload stats</Title>

      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          );
        })}
      </List>
    </ElemBody>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
