import PropTypes from 'prop-types'
import {StatList, StatListItem, Label} from './StatisticsList.styled'
const StatisticsList = ({ stats }) => {  
    
    return ( 
                 <StatList>       
            {stats.map(stat => (
                <StatListItem key={stat.id}>
                    <span>{stat.label}</span>
                    <Label>{stat.percentage}%</Label>
                </StatListItem>))}
            </StatList>
    )
      
}

StatisticsList.prototype = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
        }
 
        )
    )
    }

export default StatisticsList;