import PropTypes from 'prop-types';
import {StatisticsSection, Title} from './Statistics.styled'

const Statistics = ({ title, children}) => {
   return <StatisticsSection>
        {title && <Title>{ title}</Title>}
        {children}
    
</StatisticsSection>
}
  
Statistics.prototype = {
    title: PropTypes.string,
    children: PropTypes.node,
}



export default Statistics;

