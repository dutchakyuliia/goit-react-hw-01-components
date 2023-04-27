import PropTypes from 'prop-types';

const Statistics = (
    {
        title,
        label,
        percentage
    }
) => (<section className="statistics">
    <h2 className="title"> {title}Upload stats</h2>

    <ul className="stat-list">
        <li className="item">
            <span className="label">{label }</span>
            <span className="percentage">{ percentage}</span>
        </li>
        <li className="item">
            <span className="label">{ label}</span>
            <span className="percentage">{ percentage}</span>
        </li>
        <li className="item">
            <span className="label">{ label}</span>
            <span className="percentage">{ percentage}</span>
        </li>
        <li className="item">
            <span className="label">{label }</span>
            <span className="percentage">{ percentage}</span>
        </li>
    </ul>
</section>);
// const Statistics = ({ users }) => (
//   <ul>
//     {users.map(user => (

//         <li className="item"key={user.id} >
//             <span className="label">{label }</span>
//             <span className="percentage">{ percentage}</span>
//         </li>
//     ))}
//   </ul>
// );

Statistics.propTypes = {
        title: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    };

export default Statistics;