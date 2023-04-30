import PropTypes from 'prop-types';
import data from './data.json';
import css from './Statistics.module.css'
const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}> {title}Upload stats</h2>
      <ul className={css.list}>
        {data.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}> {stat.label} </span>
            <span className={css.percentage}> {stat.percentage} % </span>
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
