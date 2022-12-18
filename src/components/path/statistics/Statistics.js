import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatListItem,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id}>
              <span>{label}</span>
              <Label>{percentage}%</Label>
            </StatListItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
