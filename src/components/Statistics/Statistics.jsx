import PropTypes from 'prop-types';
import data from './data.json';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title"> {title}Upload stats</h2>
      <ul className="stat-list">
        {data.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label"> {stat.label} </span>
            <span className="percentage"> {stat.percentage} % </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string
  
};

export default Statistics;
